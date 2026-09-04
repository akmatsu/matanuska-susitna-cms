import { useEffect, useState } from 'react';
import { PageContainer } from '@keystone-6/core/admin-ui/components';
import { TYPESENSE_CLIENT } from '../../src/utils/typesense';
import { Button } from '@keystar/ui/button';
import { toastQueue } from '@keystar/ui/toast';
import { logger } from '../../src/configs/logger';

export default function CustomPage() {
  const [loading, setLoading] = useState(true);
  const [health, setHealth] = useState(false);
  const [createLoading, setCreateLoading] = useState(false);
  const [nlModelLoading, setNlModelLoading] = useState(false);
  const [analyticsLoading, setAnalyticsLoading] = useState(false);
  const [popularSearches, setPopularSearches] = useState<
    { query: string; count: number }[]
  >([]);
  const [noHitSearches, setNoHitSearches] = useState<
    { query: string; count: number }[]
  >([]);

  useEffect(() => {
    getHealth();
    refreshAnalytics();
  }, []);

  function normalizeSearches(data: any) {
    const searches = Array.isArray(data?.searches) ? data.searches : [];
    return searches
      .map((item: { query?: string; count?: number }) => ({
        query: item?.query ?? '',
        count: Number(item?.count ?? 0),
      }))
      .sort((a: { count: number }, b: { count: number }) => b.count - a.count);
  }

  async function getHealth() {
    try {
      setLoading(true);
      const res = await TYPESENSE_CLIENT.health.retrieve();
      if (res) {
        setHealth(true);
      }
    } catch (err) {
      logger.error(err, 'Error getting Typesense health');
      toastQueue.critical(`Failed to get Typesense health: ${err}`);
      setHealth(false);
    } finally {
      setLoading(false);
    }
  }

  async function createCollections() {
    try {
      setCreateLoading(true);
      const res = await fetch('/typesense/create-collections', {
        method: 'POST',
      });
      if (!res.ok) {
        throw new Error(
          `Failed to create collections, ${res.status}: ${res.statusText}`,
        );
      }
      toastQueue.positive('Collections created successfully');
    } catch (err) {
      logger.error(err, 'Error creating collections:');
      toastQueue.critical(`Failed to create collections: ${err}`);
    } finally {
      setCreateLoading(false);
    }
  }

  async function removePagesCollection() {
    try {
      setCreateLoading(true);
      const res = await fetch('/typesense/remove-collection', {
        method: 'POST',
        body: JSON.stringify({ collection: 'pages' }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!res.ok) {
        throw new Error(
          `Failed to remove collection, ${res.status}: ${res.statusText}`,
        );
      }
      toastQueue.positive('Collection removed successfully');
    } catch (err) {
      logger.error(err, 'Error removing collection:');
      toastQueue.critical(`Failed to remove collection: ${err}`);
    } finally {
      setCreateLoading(false);
    }
  }

  async function updateCollectionSchema() {
    try {
      setCreateLoading(true);
      const res = await fetch('/typesense/update-schema', {
        method: 'POST',
      });
      if (!res.ok) {
        throw new Error(
          `Failed to update schema, ${res.status}: ${res.statusText}`,
        );
      }
      toastQueue.positive('Schema updated successfully');
    } catch (err) {
      logger.error(err, 'Error updating schema');
      toastQueue.critical(`Failed to update schema: ${err}`);
    } finally {
      setCreateLoading(false);
    }
  }

  async function importPages() {
    try {
      setCreateLoading(true);
      const res = await fetch('/typesense/import-pages', {
        method: 'POST',
      });

      if (res.status === 409) {
        toastQueue.info(
          'Import already running: A pages import is already running in the background.',
        );
        return;
      }

      if (!res.ok) {
        throw new Error(
          `Failed to import pages, ${res.status}: ${res.statusText}`,
        );
      }

      toastQueue.positive(
        'Pages import started: Pages are importing in the background.',
      );
    } catch (err) {
      logger.error(err, 'Error importing pages:');
      toastQueue.critical(`Failed to import pages: ${err}`);
    } finally {
      setCreateLoading(false);
    }
  }

  async function reindexPages() {
    try {
      setCreateLoading(true);
      const res = await fetch('/typesense/reindex', {
        method: 'POST',
      });

      if (res.status === 409) {
        toastQueue.info(
          'Reindex already running: A reindex is already running in the background.',
        );
        return;
      }

      if (!res.ok) {
        throw new Error(
          `Failed to reindex pages, ${res.status}: ${res.statusText}`,
        );
      }

      toastQueue.positive(
        'Reindex started: Reindexing is running in the background.',
      );
    } catch (err) {
      toastQueue.critical(`Failed to reindex pages: ${err}`);
    } finally {
      setCreateLoading(false);
    }
  }

  async function getPopularSearches() {
    try {
      const res = await fetch('/typesense/popular-searches?limit=100');

      if (!res.ok) {
        throw new Error(
          `Failed to load popular searches, ${res.status}: ${res.statusText}`,
        );
      }

      const data = await res.json();
      const normalized = normalizeSearches(data);

      setPopularSearches(normalized);
    } catch (err) {
      logger.error(err, 'Error retrieving popular searches');
      setPopularSearches([]);
    }
  }

  async function getNoHitSearches() {
    try {
      const res = await fetch('/typesense/no-hit-searches?limit=100');

      if (!res.ok) {
        throw new Error(
          `Failed to load no-hit searches, ${res.status}: ${res.statusText}`,
        );
      }

      const data = await res.json();
      const normalized = normalizeSearches(data);
      setNoHitSearches(normalized);
    } catch (err) {
      logger.error(err, 'Error retrieving no-hit searches');
      setNoHitSearches([]);
    }
  }

  async function refreshAnalytics() {
    try {
      setAnalyticsLoading(true);
      await Promise.all([getPopularSearches(), getNoHitSearches()]);
    } catch (err) {
      toastQueue.critical(`Failed to load search analytics: ${err}`);
    } finally {
      setAnalyticsLoading(false);
    }
  }

  async function createNaturalLanguageModel() {
    try {
      setNlModelLoading(true);
      const res = await fetch('/typesense/create-nl-model', {
        method: 'POST',
      });

      const payload = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(
          payload?.message ||
            `Failed to create NL model, ${res.status}: ${res.statusText}`,
        );
      }

      toastQueue.positive(
        payload?.message ||
          'Natural language model synced: created or updated successfully.',
      );
    } catch (err) {
      logger.error(err, 'Error creating/updating natural language model');
      toastQueue.critical(`Failed to sync natural language model: ${err}`);
    } finally {
      setNlModelLoading(false);
    }
  }

  return (
    <PageContainer header="Typesense">
      <h1 className="text-4xl font-bold">Typesense</h1>
      <p className="mb-4 flex items-center gap-2">
        <span className="font-bold">Typesense Status: </span>
        {loading ? (
          <>
            <span>Checking Typesense health</span>
            <span className="icon-[mdi--loading] animate-spin"></span>
          </>
        ) : health ? (
          <>
            <span>Typesense is healthy</span>
            <span className="icon-[mdi--check-circle] text-green-700"></span>
          </>
        ) : (
          <>
            <span>Typesense is not healthy</span>
            <span className="icon-[mdi--alert-circle] text-red-700"></span>
          </>
        )}
      </p>

      <div className="flex gap-2">
        <Button onPress={createCollections} isPending={createLoading}>
          Create Collections
        </Button>

        <Button onPress={removePagesCollection} isPending={createLoading}>
          Remove Pages Collection
        </Button>

        <Button onPress={updateCollectionSchema} isPending={createLoading}>
          Update Collection Schema
        </Button>

        <Button onPress={importPages} isPending={createLoading}>
          Import Pages
        </Button>

        <Button onPress={reindexPages} isPending={createLoading}>
          Reindex Pages
        </Button>

        <Button
          onPress={createNaturalLanguageModel}
          isPending={nlModelLoading}
        >
          Create/Update NL Model
        </Button>

        <Button onPress={refreshAnalytics} isPending={analyticsLoading}>
          Refresh Search Analytics
        </Button>
      </div>

      <div className="mt-6">
        <h2 className="mb-2 text-2xl font-bold">Top Searches</h2>

        {analyticsLoading ? (
          <p className="flex items-center gap-2">
            <span>Loading popular searches</span>
            <span className="icon-[mdi--loading] animate-spin"></span>
          </p>
        ) : popularSearches.length === 0 ? (
          <p>No popular searches found yet.</p>
        ) : (
          <table className="min-w-[480px] border-collapse">
            <thead>
              <tr className="border-b border-slate-300 text-left">
                <th className="px-2 py-2">Search Query</th>
                <th className="px-2 py-2">Count</th>
              </tr>
            </thead>
            <tbody>
              {popularSearches.map((item) => (
                <tr key={item.query} className="border-b border-slate-200">
                  <td className="px-2 py-2">{item.query || '(empty query)'}</td>
                  <td className="px-2 py-2">{item.count}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      <div className="mt-6">
        <h2 className="mb-2 text-2xl font-bold">No Hit Searches</h2>

        {analyticsLoading ? (
          <p className="flex items-center gap-2">
            <span>Loading no-hit searches</span>
            <span className="icon-[mdi--loading] animate-spin"></span>
          </p>
        ) : noHitSearches.length === 0 ? (
          <p>No no-hit searches found yet.</p>
        ) : (
          <table className="min-w-[480px] border-collapse">
            <thead>
              <tr className="border-b border-slate-300 text-left">
                <th className="px-2 py-2">Search Query</th>
                <th className="px-2 py-2">Count</th>
              </tr>
            </thead>
            <tbody>
              {noHitSearches.map((item) => (
                <tr key={item.query} className="border-b border-slate-200">
                  <td className="px-2 py-2">{item.query || '(empty query)'}</td>
                  <td className="px-2 py-2">{item.count}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </PageContainer>
  );
}

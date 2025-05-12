import { useEffect, useState } from 'react';
import { PageContainer } from '@keystone-6/core/admin-ui/components';
import { TYPESENSE_CLIENT } from '../../src/utils/typesense';
import { Button } from '@keystone-ui/button';
import { useToasts } from '@keystone-ui/toast';
import { logger } from '../../src/configs/logger';

export default function CustomPage() {
  const [loading, setLoading] = useState(true);
  const [health, setHealth] = useState(false);
  const [createLoading, setCreateLoading] = useState(false);

  const toasts = useToasts();

  useEffect(() => {
    getHealth();
  }, []);

  async function getHealth() {
    try {
      setLoading(true);
      const res = await TYPESENSE_CLIENT.health.retrieve();
      if (res) {
        setHealth(true);
      }
    } catch (err) {
      logger.error('Error getting Typesense health:', err);
      toasts.addToast({
        tone: 'negative',
        title: 'Failed to get Typesense health',
        message: `Failed to get Typesense health, ${err}`,
      });
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
      toasts.addToast({
        tone: 'positive',
        title: 'Collections created successfully',
        message: 'Collections created successfully',
      });
    } catch (err) {
      logger.error('Error creating collections:', err);
      toasts.addToast({
        tone: 'negative',
        title: 'Failed to create collections',
        message: `Failed to create collections, ${err}`,
      });
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
      toasts.addToast({
        tone: 'positive',
        title: 'Collection removed successfully',
        message: 'Collection removed successfully',
      });
    } catch (err) {
      logger.error('Error removing collection:', err);
      toasts.addToast({
        tone: 'negative',
        title: 'Failed to remove collection',
        message: `Failed to remove collection, ${err}`,
      });
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
      toasts.addToast({
        tone: 'positive',
        title: 'Schema updated successfully',
        message: 'Schema updated successfully',
      });
    } catch (err) {
      logger.error('Error updating schema:', err);
      toasts.addToast({
        tone: 'negative',
        title: 'Failed to update schema',
        message: `Failed to update schema, ${err}`,
      });
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
      if (!res.ok) {
        throw new Error(
          `Failed to import pages, ${res.status}: ${res.statusText}`,
        );
      }
      toasts.addToast({
        tone: 'positive',
        title: 'Pages imported successfully',
        message: 'Pages imported successfully',
      });
    } catch (err) {
      logger.error('Error importing pages:', err);
      toasts.addToast({
        tone: 'negative',
        title: 'Failed to import pages',
        message: `Failed to import pages, ${err}`,
      });
    } finally {
      setCreateLoading(false);
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
        <Button onClick={createCollections} isLoading={createLoading}>
          Create Collections
        </Button>

        <Button onClick={removePagesCollection} isLoading={createLoading}>
          Remove Pages Collection
        </Button>

        <Button onClick={updateCollectionSchema} isLoading={createLoading}>
          Update Collection Schema
        </Button>

        <Button onClick={importPages} isLoading={createLoading}>
          Import Pages
        </Button>
      </div>
    </PageContainer>
  );
}

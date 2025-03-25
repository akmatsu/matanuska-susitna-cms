import { useEffect, useState } from 'react';
import { PageContainer } from '@keystone-6/core/admin-ui/components';
import { TYPESENSE_CLIENT } from '../../src/utils/typesense';
import { Button } from '@keystone-ui/button';

export default function CustomPage() {
  const [loading, setLoading] = useState(true);
  const [health, setHealth] = useState(false);
  const [createLoading, setCreateLoading] = useState(false);

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
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  async function createCollections() {
    try {
      setCreateLoading(true);
      const res = fetch('/typesense/create-collections', {
        method: 'POST',
      });
      console.log(res);
    } catch (err) {
      console.error(err);
    } finally {
      setCreateLoading(false);
    }
  }

  async function removePagesCollection() {
    try {
      setCreateLoading(true);
      const res = fetch('/typesense/remove-collection', {
        method: 'POST',
        body: JSON.stringify({ collection: 'pages' }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log(res);
    } catch (err) {
      console.error(err);
    } finally {
      setCreateLoading(false);
    }
  }

  async function updateCollectionSchema() {
    try {
      setCreateLoading(true);
      const res = fetch('/typesense/update-schema', {
        method: 'POST',
      });
      console.log(res);
    } catch (err) {
      console.error(err);
    } finally {
      setCreateLoading(false);
    }
  }

  async function importPages() {
    try {
      setCreateLoading(true);
      const res = fetch('/typesense/import-pages', {
        method: 'POST',
      });
      console.log(res);
    } catch (err) {
      console.error(err);
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

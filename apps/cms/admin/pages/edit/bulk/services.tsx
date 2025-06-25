'use client';
import { PageContainer } from '@keystone-6/core/admin-ui/components';
import { gql } from '../../../../src/graphql';
import { useQuery } from '@keystone-6/core/admin-ui/apollo';

const getServicesQuery = gql(`
  query getServicesForBulkEdit($take: Int = 100, $skip: Int = 0, $query: String) {
    services(take: $take, skip: $skip, where: {
      OR: [ {
         title: { contains: $query }
      }, {
        description: { contains: $query }
      }, {
        body: { contains: $query }        
      }]
    }) {
      id
      title
    }
  }
`);

export default function bulkServicesEditPage() {
  const { data, error, loading } = useQuery(getServicesQuery, {});

  return (
    <PageContainer header="Bulk Edit Services">
      <h1 className="text-4xl font-bold">Edit services</h1>
      <ul>
        {loading && <li>Loading...</li>}
        {error && <li>Error: {error.message}</li>}
        {data?.services?.map((service) => (
          <li key={service.id}>
            {service.title} (ID: {service.id})
          </li>
        ))}
      </ul>
    </PageContainer>
  );
}

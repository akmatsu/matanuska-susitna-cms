import {
  ListNavItems,
  NavigationContainer,
  NavItem,
} from '@keystone-6/core/admin-ui/components';
import { ListMeta, NavigationProps } from '@keystone-6/core/types';
import { PAGES } from '../configs/appConfig';
import { PropsWithChildren } from 'react';

import '../styles/global.css';
import Link from 'next/link';

function Divider() {
  return <div className="border-b border-gray-100"></div>;
}

function Header(props: PropsWithChildren) {
  return <h3 className="mx-4 my-2 text-xl font-bold">{props.children}</h3>;
}

function ListSection({
  lists,
  title,
  children,
}: {
  lists?: NavigationProps['lists'];
  title: string;
  children?: React.ReactNode;
}) {
  if ((lists !== undefined && lists.length >= 1) || children) {
    return (
      <>
        <Header>{title}</Header>
        <ListNavItems lists={lists as ListMeta[]} />
        {children}
        <Divider />
      </>
    );
  }
}

export function CustomNavigation({
  lists,
  authenticatedItem,
}: NavigationProps) {
  const documentLists = lists.filter(
    (list) => list.key.includes('Document') || list.key.includes('Image'),
  );
  const userLists = lists.filter(
    (list) => list.key.includes('User') || list.key.includes('Contact'),
  );
  const systemLists = lists.filter((list) =>
    /Alert|Tag|Highlight|ApiKey/g.test(list.key),
  );
  const specialPages = lists.filter((list) =>
    /HomePage|BoardPage/gi.test(list.key),
  );
  const pageLists = lists.filter((list) =>
    /Service|Community|AssemblyDistrict|OrgUnit|Park|Facility|Trail|PublicNotice|Board/gi.test(
      list.key,
    ),
  );

  const excludeKeys = new Set([
    ...documentLists.map((list) => list.key),
    ...specialPages.map((list) => list.key),
    ...userLists.map((list) => list.key),
    ...systemLists.map((list) => list.key),
    ...pageLists.map((list) => list.key),
  ]);

  const otherLists = lists.filter((list) => !excludeKeys.has(list.key));

  return (
    <NavigationContainer authenticatedItem={authenticatedItem}>
      <ListSection title="Home">
        <NavItem href="/">Dashboard</NavItem>
      </ListSection>

      <ListSection lists={specialPages} title="Special Pages" />
      <ListSection lists={userLists} title="Users" />
      <ListSection lists={documentLists} title="Document Management">
        <NavItem href="/bulk-document-upload">Bulk Document Upload</NavItem>
      </ListSection>
      <ListSection lists={pageLists} title="Pages" />
      <ListSection lists={systemLists} title="System">
        <NavItem href={PAGES.TYPESENSE}>Manage Typesense</NavItem>
      </ListSection>

      <ListSection lists={otherLists} title="Other Items" />
      <p className="mx-6 mt-4 mb-8 text-xs text-gray-500">
        This system is the official CMS of the{' '}
        <Link href="https://matsu.gov" target="_blank">
          Matanuska Susitna Borough Website
        </Link>{' '}
        and is developed and maintained by the MSB Web Team. For assistance,
        please{' '}
        <Link
          href="https://support.matsu.gov/TDClient/33/Portal/Requests/ServiceDet?ID=50"
          target="_blank"
        >
          submit a support ticket
        </Link>
        .
      </p>
    </NavigationContainer>
  );
}

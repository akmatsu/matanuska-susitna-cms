import {
  getHrefFromList,
  NavContainer,
  NavItem,
  NavList,
} from '@keystone-6/core/admin-ui/components';
import { ListMeta, NavigationProps } from '@keystone-6/core/types';
import { PAGES } from '../configs/constants';
import { PropsWithChildren } from 'react';

import Head from 'next/head';
import Link from 'next/link';

/**
 * Next only allows a genuine global CSS `import` from the literal `_app.js`
 * file, which Keystone regenerates on every run and doesn't expose a hook
 * into. Tailwind's output is instead prebuilt to public/admin-global.css
 * (see scripts/buildAdminCss.mjs, wired to predev/prebuild) and loaded as a
 * plain stylesheet link here instead.
 */
function AdminGlobalStyles() {
  return (
    <Head>
      <link rel="stylesheet" href="/admin-global.css" />
    </Head>
  );
}

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
        {(lists as ListMeta[] | undefined)?.map((list) => (
          <NavItem key={list.key} href={getHrefFromList(list)}>
            {list.label}
          </NavItem>
        ))}
        {children}
        <Divider />
      </>
    );
  }
}

export function CustomNavigation({ lists }: NavigationProps) {
  const documentLists = lists.filter(
    (list) =>
      list.key.includes('Document') ||
      list.key.includes('Image') ||
      /^(ElectionResult)$/gi.test(list.key),
  );
  const userLists = lists.filter(
    (list) => list.key.includes('User') || list.key.includes('Contact'),
  );
  const systemLists = lists.filter((list) =>
    /^(Alert|Tag|Highlight|ApiKey|Redirect)$/g.test(list.key),
  );
  const specialPages = lists.filter((list) =>
    /^(HomePage|BoardPage|ElectionsPage|Election)$/gi.test(list.key),
  );
  const pageLists = lists.filter((list) =>
    /^(Service|Community|AssemblyDistrict|OrgUnit|Park|Facility|Trail|PublicNotice|Board|Topic|Event|Plan)$/gi.test(
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
    <NavContainer>
      <AdminGlobalStyles />
      <NavList>
        <ListSection title="Home">
          <NavItem href="/">Dashboard</NavItem>
        </ListSection>

        <ListSection lists={specialPages} title="Special Pages" />
        <ListSection lists={userLists} title="Users" />
        <ListSection lists={pageLists} title="Pages" />
        <ListSection lists={documentLists} title="Document Management">
          <NavItem href="/bulk-document-upload">Bulk Document Upload</NavItem>
        </ListSection>
        <ListSection lists={systemLists} title="System">
          <NavItem href={PAGES.TYPESENSE}>Manage Typesense</NavItem>
        </ListSection>
        <ListSection lists={otherLists} title="Other Items" />
      </NavList>
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
    </NavContainer>
  );
}

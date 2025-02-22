import {
  ListNavItems,
  NavigationContainer,
  NavItem,
} from '@keystone-6/core/admin-ui/components';
import { NavigationProps } from '@keystone-6/core/types';
import { PAGES } from '../configs/appConfig';

export function CustomNavigation({
  lists,
  authenticatedItem,
}: NavigationProps) {
  return (
    <NavigationContainer authenticatedItem={authenticatedItem}>
      <NavItem href="/">Dashboard</NavItem>
      <ListNavItems lists={lists} />
      <NavItem href={PAGES.TYPESENSE}>Manage Typesense</NavItem>
      <NavItem href={PAGES.BULK_DOCUMENT_UPLOAD}>Bulk Document Upload</NavItem>
    </NavigationContainer>
  );
}

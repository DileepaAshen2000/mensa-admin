import type { NavItemConfig } from '@/types/nav';
import { paths } from '@/paths';

export const navItems = [
  { key: 'overview', title: 'Dashboard', href: paths.dashboard.overview, icon: 'chart-pie' },
  { key: 'customers', title: 'Orders', href: paths.dashboard.customers, icon: 'users' },
  { key: 'integrations', title: 'Add New Food', href: paths.dashboard.integrations, icon: 'plugs-connected' },
  { key: 'settings', title: 'Manage Product', href: paths.dashboard.settings, icon: 'gear-six' },
  { key: 'category', title: 'Manage Category', href: paths.dashboard.category, icon: 'gear-six' },
  { key: 'account', title: 'Account', href: paths.dashboard.account, icon: 'user' },
] satisfies NavItemConfig[];

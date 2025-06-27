import FAQIcon from '@/components/icons/FAQIcon';
import HelpSupportIcon from '@/components/icons/Help&SupportIcon';
import SubscriptionIcon from '@/components/icons/SubscriptionIcon';
import UsersIcon from '@/components/icons/UsersIcon';

export const sidebarItems = [
  {
    icon: <SubscriptionIcon />,
    label: 'Manage Subscription',
    href: '/manageSubscription',
  },
  {
    icon: <UsersIcon />,
    label: 'Users',
    href: '/users',
  },
  {
    icon: <HelpSupportIcon />,
    label: 'Help And Support',
    href: '/helpAndSupport',
  },
  {
    icon: <FAQIcon />,
    label: 'FAQ',
    href: '/faq',
  },
];

export const planData = [
  {
    id: 'individual',
    name: 'Individual',
    price: 65,
    description: 'For individual Person',
    badge: 'Individual',
    badgeColor:
      'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-100',
    features: [
      'Single user license',
      'Lifetime updates',
      'Secure, HIPAA-compliant data storage',
    ],
    highlighted: false,
  },
  {
    id: 'company',
    name: 'Company Plan',
    price: 650,
    description: 'For large teams, an unlimited number of library users.',
    badge: 'Company Plan',
    badgeColor:
      'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-100',
    bestValue: true,
    features: [
      'Add upto 10 users',
      'Lifetime updates',
      'Upgrade any time',
      'Unlimited library users',
      'Secure, HIPAA-compliant data storage',
    ],
    highlighted: true,
  },
];
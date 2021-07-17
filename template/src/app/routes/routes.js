import { lazy } from 'react';

const routes = [
  {
    path: 'dashboard',
    component: lazy(() => import('features/Dashboard')),
    exact: true,
  },
  {
    path: 'users',
    component: lazy(() => import('features/Users')),
    exact: true,
  },
];

export default routes;

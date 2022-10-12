import React from 'react';
import useId from '../hooks/useId';
import Signin from '../pages/Signin';

const HomePage = React.lazy(() => import('../pages/Home'));
const Properties = React.lazy(() => import('../pages/Properties'));
const HoumeItem = React.lazy(() => import('../pages/HouseItem'));

// import HomePage from '../pages/Home';
// import Properties from '../pages/Properties';

export const navbar = [
  {
    id: useId,
    element: (
      <React.Suspense fallback={<React.Fragment>Loading...</React.Fragment>}>
        <HomePage />{' '}
      </React.Suspense>
    ),
    title: 'Home',
    path: '/home',
    private: false,
    hidden: false,
  },
  {
    id: useId,
    element: (
      <React.Suspense fallback={<React.Fragment>Loading...</React.Fragment>}>
        <Properties />
      </React.Suspense>
    ),
    title: 'Properties',
    path: '/properties',
    private: false,
    hidden: false,
  },
  {
    id: useId,
    element: (
      <React.Suspense fallback={<React.Fragment>Loading...</React.Fragment>}>
        <HoumeItem />
      </React.Suspense>
    ),
    title: 'Single House',
    path: '/properties/:id',
    private: false,
    hidden: true,
  },
  {
    id: useId,
    element: <Signin />,
    title: 'Sign In',
    path: '/signin',
    private: false,
    hidden: true,
  },
  {
    id: useId,
    element: <Signin />,
    title: 'Sign Up',
    path: '/signup',
    private: false,
    hidden: true,
  },
];

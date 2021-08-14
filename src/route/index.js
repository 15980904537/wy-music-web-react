import React from 'react';
import { Redirect } from "react-router-dom";

const Discover = React.lazy(() => import('@/pages/discover'))
const Friend = React.lazy(() => import('@/pages/friend'))
const Mine = React.lazy(() => import('@/pages/mine'))

export const routes = [
  {
    path: '/',
    exact: true,
    render: () => {
      <Redirect to='/discover/' />
    }
  },
  {
    path: "/discover",
    component: Discover,
    routes: [
      {
        path: '/discover',
        exact: true,
        render: () => {
          <Redirect to='/discover/artist' />
        }
      },
    ]
  }, {
    path: '/mine',
    component: Mine
  }, {
    path: '/friend',
    component: Friend
  }
]
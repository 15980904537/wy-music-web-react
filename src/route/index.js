import React from 'react';
import { Redirect } from "react-router-dom";
// import recommend from '../pages/discover/recommend';

const Discover = React.lazy(() => import('../pages/discover'))
const Friend = React.lazy(_ => import('../pages/friend'))
const Mine = React.lazy(_ => import('../pages/mine'))
const Recommend = React.lazy(() => import('../pages/discover/recommend'))
const Ranking = React.lazy(() => import('../pages/discover/ranking'))
const Songs = React.lazy(() => import('../pages/discover/songs'))
const Djradio = React.lazy(() => import('../pages/discover/djradio'))
const Artist = React.lazy(() => import('../pages/discover/artist'))
const Album = React.lazy(() => import('../pages/discover/album'))
export const routes = [
  {
    path: '/',
    exact: true,
    render: () => {
      <Redirect to='/discover' />
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
          <Redirect to='/discover/recommend' />
        }
      },
      {
        path: '/discover/recommend',
        component:Recommend
      },
      {
        path: '/discover/ranking',
        component:Ranking
      }, {
        path: '/discover/songs',
        component:Songs
      },
      {
        path: '/discover/djradio',
        component:Djradio
      },
      {
        path: '/discover/artist',
        component:Artist
      },
      {
        path: '/discover/album',
        component:Album
      }
    ]
  }, {
    path: '/mine',
    component: Mine
  }, {
    path: '/friend',
    component: Friend
  }
]
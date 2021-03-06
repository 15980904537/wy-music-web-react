import React, { memo,Suspense } from 'react'
import { HashRouter } from 'react-router-dom'
import {renderRoutes } from 'react-router-config'
import AppHeader from '@/components/app-header'
import AppFooter from '@/components/app-footer'
import AppPlayerBar from '@/pages/player/app-player-bar'
import { routes} from '@/route'
const Main = memo(function Main(props) {
  console.log(routes);
  // const { routes} = props;
  return (
    <HashRouter>
      <AppHeader />
      <Suspense fallback={<div>loading</div>}>
        {renderRoutes(routes)}
      </Suspense>
      <AppFooter />
      <AppPlayerBar />
    </HashRouter>
  )
})
export default Main

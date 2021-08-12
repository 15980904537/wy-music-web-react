import React, { memo,Suspense } from 'react'
import { HashRouter } from 'react-router-dom'
import {renderRoutes } from 'react-router-config'
import AppHeader from '@/components/app-header'
import AppFooter from '@/components/app-footer'
import { routes} from '@/route'
const Main = memo(function Main() {
  return (
    <HashRouter>
      <AppHeader />
      <Suspense fallback={<div>loading</div>}>
        {renderRoutes(routes)}
      </Suspense>
      <AppFooter />
    </HashRouter>
  )
})
export default Main

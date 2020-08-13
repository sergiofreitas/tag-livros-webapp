import React, { Suspense } from 'react'
import { Switch, Route } from 'react-router-dom'
import Providers from 'core/providers'

import AppLoader from 'ui/AppLoader'
import AppError from 'ui/AppError'

const IndexPage = React.lazy(() => import('pages/index'))
const DetailPage = React.lazy(() => import('pages/Detail'))
const NotFound = React.lazy(() => import('pages/NotFound'))
const SerchPage = React.lazy(() => import('pages/Search'))

const App = () => (
  <AppError>
    <Suspense fallback={<AppLoader />}>
      <Providers>
        <Switch>
          <Route exact path="/" component={IndexPage} />
          <Route path="/detail/:isbn" component={DetailPage} />
          <Route path="/search" component={SerchPage} />
          <Route component={NotFound} />
        </Switch>
      </Providers>
    </Suspense>
  </AppError>
)

export default App

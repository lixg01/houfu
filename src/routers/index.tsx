import React, { Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import routes from './router'

const BasicRoute = () => (
  <BrowserRouter>
    <Suspense fallback={<h1>loading...</h1>}>
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={<route.component />} />
        ))}
      </Routes>
    </Suspense>
    {/* <Redirect from='/*' to='/'/> */}
  </BrowserRouter>
)
export default BasicRoute

import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './layout/Layout'
import { routes } from './utils/routes'

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<Layout/>}>
          {
            routes.map((item) => (
              <Route key={item.path} path={item.path} element={<item.component/>}/>
            ))
          }
        </Route>
      </Routes>
    </>
  )
}

export default App
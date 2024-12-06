import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Info from './pages/Info'
import List from './pages/List'
import DefaultLayout from './layouts/DefaultLayout'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={DefaultLayout}>
          <Route path="/" Component={HomePage} />
          <Route path="/info" Component={Info} />
          <Route path="/list" Component={List} />
        </Route>
      </Routes>
    </BrowserRouter>

  )



}

export default App

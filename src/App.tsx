import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import UserLayout from './components/User/user'
import HomePage from './components/homepages'
import Productdetale from './components/User/productdetale'
import Login from './components/User/Login'
import LogLayout from './components/Log/use'
import Singin from './components/User/Singin'
import Row from './components/User/Row'

import Add from './components/Admin/Add'
import Update from './components/Admin/update'


// 1. Khai báo router react-router-dom

function App() {

  return <BrowserRouter>
    <Routes>
      <Route>
        <Route path='/signup' element={<Singin />} />
        <Route path='/login' element={<Login />} />
      </Route>
      <Route path='/' element={<UserLayout />}>
        <Route index element={<HomePage />} />
        <Route path='product/:id' element={<Productdetale />} />
        <Route path='/row' element={<Row />} />
      </Route>
      <Route path='/Add' element={<Add/>} />
      <Route path='/Update' element={<Update/>} />
        
      







    </Routes>

  </BrowserRouter>
}

export default App
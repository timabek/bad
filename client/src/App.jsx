import React from 'react'
import { BrowserRouter,Link, Route, Routes } from 'react-router-dom';
import {logo} from './assets/assets'
import { Home, CreatePost} from './pages'

const App = () => {
  return (
   <BrowserRouter>
  <header className="w-full flex justify-between items-center bg-zinc-950 sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]">
      <Link to="/">
      <img src={logo} alt="" />
      </Link>
      <Link to='/create-post'
      className='font-inter font-medium bg-black border border-solid border-white text-white px-8  py-3 rounded-md'>
        <span className='text-[22px]'>😨</span>
      </Link>
   </header>
   <main className='sm:p-8 px-4 py-8 w-full bg-[#0b206cbe] min-h-[calc(100vh-73px)]'>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/create-post' element={<CreatePost/>}/>
    </Routes>

   </main>
   </BrowserRouter>
  )
}

export default App

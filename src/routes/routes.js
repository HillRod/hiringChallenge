import React from 'react'
import { BrowserRouter as Router, Route, Routes, useNavigate, } from 'react-router-dom'

import PostsProvider from '../context/posts/Provider'
import Posts from '../views/Index/index'


export default function RoutesPrincipal() {

  return (
    <Router>
      <Routes>
        {/*Index Route*/}
        <Route path='/' element={
          <PostsProvider>
            <Posts />
          </PostsProvider>
        } />

        {/*404 Route*/}
        <Route path='*' element={
          <NotFound />
        } />


      </Routes>
    </Router>
  )
}


//404 Route

function NotFound() {
  const navigate = useNavigate();

  const goToIndex = () => {
    navigate('/')
  }
  return (
    <div className='d-flex flex-column align-items-center justify-content-center' style={{ height: '100vh' }}>
      <h1>Oops! You seem to be lost.</h1>
      <h1><a href='#' onClick={goToIndex}>Get back</a></h1>
    </div>
  )
}


import React from 'react'
import App from '../App'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import PostsProvider from '../context/posts/Provider'
import Posts from '../views'


export default function RoutesPrincipal() {

  return (
    <Router>
      <Routes>
        {/*Index Route*/}
        <Route path='/' element={
          <PostsProvider>
            <Posts/>
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
  return (
    <div>
      <h1>Oops! You seem to be lost.</h1>
    </div>
  )
}


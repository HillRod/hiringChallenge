import React from 'react'
import App from '../App'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'



export default function RoutesPrincipal() {

  return (
    <Router>
      <Routes>
        {/*Index Route*/}
        <Route path='/' element={
          <>
            <App />
          </>
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


import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AuthRoute, GuestRoute, Navbar } from './components'
import {Auth, Home, Settings } from './pages'


function App() {
  return(
    <Router>
      <div>
        <header>
          <Navbar />
        </header>
        <main>
          <Routes>
            <Route path='/' element ={<Home />} />

            <Route path='/register' element ={<GuestRoute />} >
              <Route path='/register' element ={<Auth key='register' />} />
            </Route>

            <Route path='/login' element ={<GuestRoute />} >
              <Route path='/login' element ={<Auth key='login' />} />
            </Route>

            <Route path='/settings' element={<AuthRoute />} >
              <Route path='/settings' element={<Settings />} />
            </Route>
            
            <Route path='/editor' element ={<AuthRoute />} >
              <Route path='/editor' element ={<h1>Editor</h1>} />
            </Route>
           
            <Route path='/editor/:slug' element ={<h1>Editor</h1>} />
            <Route path='/article/:slug' element ={<h1>Article</h1>} />
            <Route path='/profile/:username' element ={<h1>Profile</h1>} />
            
            <Route path='/@:username'  element ={<AuthRoute />} >
              <Route path='/@:username' element ={<h1>Profile</h1>} />
            </Route>
            
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App

import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import './App.css'
import Register from './pages/Register'
import Categories from './pages/Categories';
import Home from './pages/Home';
import Authentication from './utils/Authentication';
import Movies from './pages/Movies';

function App() {
  

  return (
    <Router>
      <Routes>
        <Route 
        path = "/" 
        element = {
          <Authentication>
            <Home />
          </Authentication>} />
        <Route path = "/register" element = {<Register />} />
        <Route 
        path = "/category" 
        element = {
          <Authentication>
            <Categories />
          </Authentication>} />
        <Route 
        path = "/browse" 
        element = {
          <Authentication>
            <Movies />
          </Authentication>} />
      </Routes>
    </Router>
  )
}

export default App

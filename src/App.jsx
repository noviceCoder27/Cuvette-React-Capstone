import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import './App.css'
import Register from './pages/Register'
import Categories from './pages/Categories';
import Home from './pages/Home';
import Authentication from './utils/Authentication';

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
        <Route path = "/category" element = {<Categories />} />
      </Routes>
    </Router>
  )
}

export default App

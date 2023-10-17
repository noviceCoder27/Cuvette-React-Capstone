import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import './App.css'
import Register from './pages/Register'
import Categories from './pages/Categories';

function App() {
  

  return (
    <Router>
      <Routes>
        <Route path = "/register" element = {<Register />} />
        <Route path = "/category" element = {<Categories />} />
      </Routes>
    </Router>
  )
}

export default App

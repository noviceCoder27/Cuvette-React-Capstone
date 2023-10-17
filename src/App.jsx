import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import './App.css'
import Register from './pages/Register'

function App() {
  

  return (
    <Router>
      <Routes>
        <Route path = "/register" element = {<Register />} />
      </Routes>
    </Router>
  )
}

export default App

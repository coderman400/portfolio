
import {Home} from './pages'
import Navbar from './components/Navbar'
import { BrowserRouter as Router } from 'react-router-dom'
function App() {
  return (
    <Router>
      <Navbar />
      <Home />
    </Router>
  )
}

export default App
import { useState } from 'react'
import{Route, BrowserRouter as Router, Routes} from "react-router-dom"
import CreateBlog from './pages/create'
import BlogUpdate from './pages/update'
import BlogView from './pages/viewpage'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path="/" element={<CreateBlog />}  />
        <Route path="/blogupdate" element={<BlogUpdate />}  />
        <Route path="/blogview" element={<BlogView />}  />
      </Routes>
      
    </Router>
  )
}

export default App

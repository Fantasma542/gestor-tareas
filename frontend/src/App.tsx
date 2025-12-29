import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'
import Home from './components/Home'
import TasksPage from './pages/TasksPage'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tasks" element={<TasksPage />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App

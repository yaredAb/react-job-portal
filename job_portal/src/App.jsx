import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import AddJob from './pages/AddJob'
import PageNotFound from './pages/PageNotFound'
import Jobs from './pages/Jobs'

const App = () => {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/add-job' element={<AddJob />} />
      <Route path='/jobs' element={<Jobs />} />
      <Route path='*' element={< PageNotFound />} />
    </Routes>
    
    
    </BrowserRouter>
  )
}

export default App
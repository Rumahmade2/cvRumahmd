import './App.css'
import Home from './pages/Home'
import DetailPortfolio from './pages/DetailPortfolio'
import PagrNotFound from './pages/PagrNotFound'
import Experience from './pages/Experience'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter> 
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/Portfolio/:id' element={<DetailPortfolio/>}/>
        <Route path='/page-not-found' element={<PagrNotFound/>}/>
        <Route path='/experience' element={<Experience/>} />
        <Route path='*' element={<PagrNotFound/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App


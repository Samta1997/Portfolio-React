import './App.css'
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Home from './page/Home'
import About from './page/About'
import Services from './page/Services'
import Contact from './page/Contact'
import Blog from './page/Blog'
import Blog1 from './page/Blog1'


function App() {
  

  return (
    <BrowserRouter>
     
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/blog1' element={<Blog1/>}/>
      </Routes>
      
    </BrowserRouter>
  )
}

export default App

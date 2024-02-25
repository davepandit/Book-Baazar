import { useState } from 'react'
import { Routes , Route } from 'react-router-dom'
import Register from './pages/Register'
import Login from './pages/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ListBooks from './pages/ListBooks';
import Home from './pages/Home';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavBar/>
    <div>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/register' element= {<Register />}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/book/list' element={<ListBooks/>}/>

        </Routes>
      </div>
    </>
  )
}

export default App

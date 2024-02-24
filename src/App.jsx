import { useState } from 'react'
import { Routes , Route } from 'react-router-dom'
import Register from './pages/Register'
import Login from './pages/Login';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<h1>Home</h1>}/>
        <Route path='/register' element= {<Register />}/>
        <Route path='/login' element={<Login/>}/>

      </Routes>
    </>
  )
}

export default App

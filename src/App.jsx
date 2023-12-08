import { useState } from 'react'
import Authenticate from './components/Authenticate.jsx'
import SignUpForm from './components/SignUpForm.jsx'
import './App.css'

 function App() {
  const [token, setToken] = useState(null)

  return (
    <>
    <div>
    <SignUpForm token={token} setToken={setToken} />
    <Authenticate token={token} setToken={setToken} /> 
    </div>
    </>
  )
  
}
export default App



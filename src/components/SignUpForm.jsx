import { useState } from "react"




export default function SignUpForm() {
   

const [username, setUsername] = useState("")
const [password, setPassword] = useState("")
const [error, setError] = useState(null)


async function handleSubmit(Event) {
    Event.preventDefault()
    try {
       const response = await fetch("https://fsa-jwt-practice.herokuapp.com/signup", 
       { 
         method: "POST", 
         headers: { 
           "Content-Type": "application/json" 
         }, 
         body: JSON.stringify({ 
           username: {username}, 
           password: {password}
         }) 
       })
       const result = await response.json()
       //console.log(result)


    }
    catch (error) {
        setError(error.message)

    }
}
    return (
        <div>
        <h2> Sign Up Now! </h2>
        {error && <p>{error}</p>}

    <form onSubmit={handleSubmit}>
        <label>
            Username: <input value={username} onChange={(Event) =>
            setUsername(Event.target.value)} />
        </label>
        <label>
            Password: <input value={password} onChange={(Event) =>
            setPassword(Event.target.value)} />
        </label>
        <button> Submit Here! </button>
    </form>
    </div>
    )
}

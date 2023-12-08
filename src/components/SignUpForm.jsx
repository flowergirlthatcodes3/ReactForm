import { useState } from "react"




export default function SignUpForm({token, setToken}) {
   

const [username, setUsername] = useState("")
const [password, setPassword] = useState("")
const [error, setError] = useState(null)


async function handleSubmit(event) {
    event.preventDefault()

    try {
       const response = await fetch('https://fsa-jwt-practice.herokuapp.com/signup', 
       { 
         method: "POST", 
         headers: { 
           "Content-Type": "application/json" 
         }, 
         body: JSON.stringify({ 
           username: username, 
           password: password
         }) 
       })
       const result = await response.json()
       setToken(result.token)
       console.log(result)

    }
    catch(error) {
        setError(error.message)

    }
}
    return (
        <div>
        <h2> Sign Up Now! </h2>
        {error && <p>{error}</p>}

    <form onSubmit={handleSubmit}>
        <label>
            Username: <input value={username} onChange={(event) =>
            setUsername(event.target.value)} />
        </label>
        <br / >
        <label>
            Password: < input type="password" value={password} onChange={(event) =>
            setPassword(event.target.value)}
             />
        </label>
        <br />
        <p>Please create a username and password with 8 or more characters. </p>
        <button type="submit" disabled={(username.length < 8 || password.length < 8) ? true : false}> Submit Here! </button>
    </form>
    </div>
    )
}

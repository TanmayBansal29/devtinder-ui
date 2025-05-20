import axios from 'axios';
import { useState } from 'react'

const Login = () => {

  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const res = await axios.post("http://localhost:3000/login", {
      emailId,
      password
    },
  {withCredentials: true})
    } catch (err) {
      console.log("Error: ", err)
    }
  }
  return (
    <div className='flex justify-center mt-10'>
      <div className="card bg-base-300 w-96 shadow-sm">
        <div className="card-body">
          <h2 className="card-title justify-center">Login</h2>
          <div>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Email ID</legend>
              <input type="text" className="input" 
              value={emailId} 
              onChange={(e) => setEmailId(e.target.value)}
              placeholder="Type here" />
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Password</legend>
              <input type="text" className="input" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Type here" />
            </fieldset>
          </div>
          <div className="card-actions justify-center">
            <button onClick={handleLogin} className="btn btn-primary">Login</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
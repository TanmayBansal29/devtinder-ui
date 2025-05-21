import axios from 'axios';
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../utils/constants';

const Login = () => {

  const [emailId, setEmailId] = useState("sharma@gmail.com");
  const [password, setPassword] = useState("@Sharma098");
  const [error, setError] = useState("")
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post(BASE_URL + "/login", {
      emailId,
      password
    },
    {withCredentials: true})
    dispatch(addUser(res.data))
    return navigate("/")
    } catch (err) {
      setError(err?.response?.data || "Something Went Wrong")
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
          <p className='text-red-500'>{error}</p>
          <div className="card-actions justify-center">
            <button onClick={handleLogin} className="btn btn-primary">Login</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
import { Outlet } from 'react-router-dom'
import NavBar from './NavBar'

const Body = () => {
  return (
    <div>
        <NavBar />

        {/* To Render the children routes of body component */}
        <Outlet />
    </div>
  )
}

export default Body
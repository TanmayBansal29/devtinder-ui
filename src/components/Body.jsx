import { Outlet } from 'react-router-dom'
import NavBar from './NavBar'
import Footer from './Footer'

const Body = () => {
  return (
    <div>
        <NavBar />

        {/* To Render the children routes of body component */}
        <Outlet />

        <Footer />
    </div>
  )
}

export default Body
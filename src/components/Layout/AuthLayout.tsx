import { Outlet } from "react-router-dom"
import Navbar from "../Navbar/Navbar"
import MobileSidebar from "../Sidebar/MobileSidebar"
import Sidebar from "../Sidebar/Sidebar"

function AuthLayout() {
    return (
        <div className='relative'>
            <Outlet />
        </div>
    )
}
export default AuthLayout
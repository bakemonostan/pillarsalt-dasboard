import { Outlet } from "react-router-dom"
import Navbar from "../Navbar/Navbar"
import MobileSidebar from "../Sidebar/MobileSidebar"
import Sidebar from "../Sidebar/Sidebar"
import { useAuthStore } from "../../store/auth/auth";

function RootLayout() {
    const { isLoggedIn } = useAuthStore();
    return (
        <div className='relative'>
            <MobileSidebar />
            <Sidebar />
            <Navbar />
            <div className='relative font-mullish xl:absolute right-0  xl:w-[calc(100%-15.563rem)] bg-[#FAFAFA] py-8 px-3 xl:px-16'>
                <Outlet />
            </div>
        </div>
    )
}
export default RootLayout
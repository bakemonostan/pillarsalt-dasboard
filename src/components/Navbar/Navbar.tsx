import Input from "../Form/Input"
import wallet from '/images/navwallet.svg'
import bell from '/images/bell.svg'
import profile from '/images/UserGear.svg'
import arrow from '/images/arrow-down.svg'
import logo from '/images/logo-home.svg'
import menu from '/images/Menu.svg'
import { useTestStore } from "../../store/store"


type Props = {}

const navicons = [
    {
        src: '/images/bell.svg',
        alt: 'notification bell icon'
    },
    {
        src: '/images/UserGear.svg',
        alt: 'userprofile icon'
    },
    {
        src: '/images/navwallet.svg',
        alt: 'wallet icon'
    },
]


export default function Navbar({ }: Props) {
    const showSidebar = useTestStore(state => state.showSidebar)
    return (
        <div className="">
            <div className="xl:hidden flex justify-between items-center px-3" >
                <img src={logo} alt="" />
                <div className="cursor-pointer" onClick={showSidebar}>
                    <img src={menu} alt="" />
                </div>
            </div>
            <div className="hidden w-[calc(100%-15.563rem)] ml-auto relative
         border-b border-b-[#E0E0E0] py-8 h-[4rem] 
         xl:flex items-center"
            >
                <div className="flex items-center justify-between px-5  w-[85%]">
                    <Input type="search" name="search" onchange={() => { }} placeholder="Search anything here..." required={false} value="" classes="w-[70%] rounded-sm" />
                </div>
                <div className="flex gap-8 items-center">
                    <img src={bell} alt="" />

                    <span className="flex gap-3">
                        <img src={profile} alt="" />
                        <img src={arrow} alt="" />
                    </span>

                    <span className="flex gap-3">
                        <img src={wallet} alt="" />
                        N0.00
                    </span>
                </div>
            </div>
        </div>
    )
}
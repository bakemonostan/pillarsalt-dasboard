import { Link } from "react-router-dom";
import arrow from '/images/arrow-down.svg'
import Input from "../Form/Input"
import wallet from '/images/navwallet.svg'
import bell from '/images/bell.svg'
import profile from '/images/UserGear.svg'
import { useTestStore } from '../../store/store';


const links = [
    { name: "Dashboard", icon: "/images/dashboard.svg", href: '/', nestedLink: false },
    { name: "Wallet", icon: "/images/wallet.svg", href: 'wallet', nestedLink: false },
    { name: "Branch", icon: "/images/branch.svg", href: 'branch', showIcon: true, nestedLink: false },
    { name: "Branch Location", icon: "/images/branch.svg", href: 'branch/branch-location', nestedLink: true },
    { name: "Branch Report", icon: "/images/branch.svg", href: 'branch/branch-report', nestedLink: true },
    { name: "Customer Support", icon: "/images/faq.svg", href: 'support', nestedLink: false },
    { name: "Profile", icon: "/images/profile.svg", href: 'profile', nestedLink: false },
]


type Props = {}
export default function MobileSidebar({ }: Props) {
    const isOpen = useTestStore(state => state.isOpen)
    const closeSidebar = useTestStore(state => state.closeSidebar)
    'absolute top-0 left-0 w-full h-full bg-gray-100 py-5 px-7'
    return (
        <div className={` top-0 left-0 w-full h-full bg-gray-100 py-5 px-7 ${isOpen ? 'absolute' : 'hidden'}`}
        >

            <div>
                <div className="" >
                    {/* <div>
                        <img src={menu} alt="" className="cursor-pointer" />
                    </div> */}
                </div>
                <div className="flex justify-between pb-16">
                    <span className="flex gap-1">
                        <img src={profile} alt="" />
                        <img src={arrow} alt="" />
                    </span>

                    <div className='flex gap-5'>
                        <img src={bell} alt="" />
                        <span className="flex gap-3">
                            <img src={wallet} alt="" />
                            N0.00
                        </span>
                    </div>


                </div>
                <div className=""
                >
                    <div className="">
                        <Input type="search" name="search" onchange={() => { }} placeholder="Search anything here..." required={false} value="" classes="rounded-sm" />
                    </div>

                </div>
            </div>


            <div className=" py-5 font-medium ">
                <ul className=" flex flex-col gap-8 text-[#959595]">
                    {links.map((link, index) => (
                        <Link to={link.href} key={link.name} className={`${link.showIcon ? ' relative flex items-center gap-20' : ''} ${link.nestedLink ? 'block ml-8 -mt-8' : ''} `}
                            onClick={closeSidebar}
                        >


                            <li className="cursor-pointer flex items-center gap-4 ">
                                {!link.nestedLink && <img src={link.icon} alt="icon" className="mb-1" />}
                                <span>{link.name}</span>
                            </li>
                            {link.showIcon &&
                                <>
                                    <li className="cursor-pointer">
                                        <img src={arrow} alt="" className="w-3 h-3" onClick={() => { }} />
                                    </li>

                                </>
                            }
                        </Link>

                    ))}

                </ul>
            </div>

        </div>
    )
}
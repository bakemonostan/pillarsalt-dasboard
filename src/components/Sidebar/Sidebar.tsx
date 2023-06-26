import { useState } from 'react';
import { Link } from "react-router-dom";
import HomeLogo from "/images/logo-home.svg"
import arrow from '/images/arrow-down.svg'


const links = [
    { name: "Dashboard", icon: "/images/dashboard.svg", href: '/', nestedLink: false },
    { name: "Wallet", icon: "/images/wallet.svg", href: 'wallet', nestedLink: false },
    { name: "Branch", icon: "/images/branch.svg", href: 'branch', showIcon: true, nestedLink: false },
    { name: "Branch Location", icon: "/images/branch.svg", href: 'branch/branch-location', nestedLink: true },
    { name: "Branch Report", icon: "/images/branch.svg", href: 'branch/branch-report', nestedLink: true },
    { name: "Customer Support", icon: "/images/faq.svg", href: 'support', nestedLink: false },
    { name: "Profile", icon: "/images/profile.svg", href: 'profile', nestedLink: false },
]



type Props = {

}
export default function Sidebar({ }: Props) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleCollapse = (link: []) => {
    };

    return (
        <div className="hidden absolute xl:flex flex-col pl-10 w-[15.563rem] h-[100vh] xl:border-r xl:border-r-[#E0E0E0] py-5">
            <div>
                <img src={HomeLogo} alt="Logo" className='relative right-3' />
            </div>
            <div className=" pt-14 font-medium ">
                <ul className=" flex flex-col gap-12 text-[#959595]">
                    {links.map((link, index) => (
                        <Link to={link.href} key={link.name} className={`${link.showIcon ? ' relative flex items-center gap-20' : ''} ${link.nestedLink ? 'block ml-8 -mt-8' : ''} `} >
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



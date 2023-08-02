import React, { useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import HomeLogo from '/images/logo-home.svg';
import arrow from '/images/arrow-down.svg';
import Button from '../Button/Button';
import { motion } from 'framer-motion';
import { useAuthStore } from '../../store/auth/auth';

const links = [
    { name: 'Dashboard', icon: '/images/DashboardIcon.svg', href: '/', nestedLink: false },
    { name: 'Wallet', icon: '/images/wallet.svg', href: 'wallet', nestedLink: false },
    { name: 'Branch', icon: '/images/branch.svg', href: 'branch', showIcon: true, nestedLink: false },
    { name: 'Branch Location', icon: '/images/branch.svg', href: 'branch/branch-location', nestedLink: true },
    { name: 'Branch Report', icon: '/images/branch.svg', href: 'branch/branch-report', nestedLink: true },
    // { name: 'Customer Support', icon: '/images/faq.svg', href: 'support', nestedLink: false },
    { name: 'Profile', icon: '/images/profile.svg', href: 'profile', nestedLink: false },
];


export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);
    const { logout } = useAuthStore()

    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="hidden absolute xl:flex flex-col  w-[15.563rem] h-[100vh] xl:border-r xl:border-r-[#E0E0E0] py-5">
            <div>
                <img src={HomeLogo} alt="Logo" className="relative -right-3" />
            </div>
            <div className="pt-14 font-medium">
                <ul className="  flex flex-col gap-5 text-[#959595] relative ">
                    {links.map((link, index) => (
                        <React.Fragment key={link.name}>
                            {!link.nestedLink && (
                                <NavLink
                                    to={link.href}
                                    style={({ isActive }) => ({
                                        borderLeft: isActive ? '0.4rem solid #056839' : '',
                                        backgroundColor: isActive ? 'rgb(236, 243, 240)' : '',
                                        color: isActive ? '#056839' : '',
                                        fontWeight: isActive ? 'bold' : '',
                                    })}
                                    className={`bg-opacity-5 px-5 py-1.5 ${link.showIcon ? 'relative flex items-center gap-20 ' : ''}`}
                                >
                                    <li className="cursor-pointer flex items-center gap-4">
                                        {!link.nestedLink && <img src={link.icon} alt="icon" className="mb-1" />}
                                        <span>{link.name}</span>
                                    </li>
                                    {link.showIcon && (
                                        <motion.li
                                            whileHover={{ scale: 1.2 }}
                                            whileTap={{ scale: 0.9 }}
                                            initial={{ rotate: 0 }}
                                            animate={isOpen ? { rotate: 0 } : { rotate: 180 }}
                                            className="cursor-pointer bg-green-100 rounded-full w-5 h-5 flex items-center justify-center"
                                            onClick={toggleCollapse}
                                        >
                                            <img src={arrow} alt="" className="w-3.5 h-3.5" />
                                        </motion.li>
                                    )}
                                </NavLink>
                            )}
                            {link.nestedLink && isOpen && (
                                <NavLink to={link.href} className="ml-8">
                                    <li className="cursor-pointer flex items-center gap-4">
                                        <span>{link.name}</span>
                                    </li>
                                </NavLink>
                            )}
                        </React.Fragment>
                    ))}
                </ul>
                <div className='mt-32 flex justify-center mx-auto w-2/3'
                    onClick={() => { logout() }}
                >
                    <Button label='Log Out' type='button' variant='primary' />
                </div>
            </div>
        </div>
    );
}

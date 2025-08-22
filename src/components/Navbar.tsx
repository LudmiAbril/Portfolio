"use client";

import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import ClearIcon from '@mui/icons-material/Clear';
import { IoMoonOutline } from "react-icons/io5";
import { ES, GB } from 'country-flag-icons/react/1x1';
import { menuOptions } from '@/utils/texts';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState<boolean>(false);
    const toggleMobileMenu = () => {
        setMenuOpen((prev) => !prev);
    }
    return (
        <div className='sticky top-0 w-full px-[28px] bg-background z-1000'>
            <div className='py-4 box-border flex justify-between items-center'>
                <div className='flex items-center gap-[20px]'>
                    <button><IoMoonOutline size={20} /></button>
                    <div className='flex gap-2'>
                        <button> <GB title="Gibberish" className='w-6 h-4' />
                        </button>
                        <button>
                            <ES title="Español" className='w-6 h-4' />
                        </button>
                    </div>

                </div>
                <div>
                    <button onClick={toggleMobileMenu}>{menuOpen ? <ClearIcon /> : <MenuIcon />}</button>
                </div>
            </div>
            {
                menuOpen && (<div>
                    <ul className='flex flex-col gap-5 py-4'>
                        {menuOptions.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
                )
            }
        </div>
    )
}

export default Navbar
"use client";

import React, { useEffect, useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import ClearIcon from '@mui/icons-material/Clear';
import { IoMoonOutline } from "react-icons/io5";
import { ES, GB } from 'country-flag-icons/react/1x1';
import { useScrollToSection } from '@/hooks/UseScrollToSection';
import { useLang } from '@/context/LanguageContext';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState<boolean>(false);
    const scrollTo = useScrollToSection();
    const [pendingScrollId, setPendingScrollId] = useState<string | null>(null);
    const { t } = useLang();

    const handleClick = (id: string) => {
        if (menuOpen) {
            setPendingScrollId(id);
            setMenuOpen(false);
        } else {
            scrollTo(id);
        }
    };
    useEffect(() => {
        if (!menuOpen && pendingScrollId) {
            scrollTo(pendingScrollId);
            setPendingScrollId(null);
        }
    }, [menuOpen, pendingScrollId, scrollTo]);


    const toggleMobileMenu = () => {
        setMenuOpen((prev) => !prev);
    }

    return (
        <nav className='sticky top-0 w-full px-[28px] lg:px-[80px] bg-background z-1000'>
            <div className='py-4 box-border flex justify-between items-center'>
                <div className='flex items-center gap-[20px] lg:gap-[50px]'>
                    <button><IoMoonOutline size={20} /></button>
                    <LanguageSwitcher />
                </div>
                <div>
                    <button className='lg:hidden' onClick={toggleMobileMenu}>{menuOpen ? <ClearIcon /> : <MenuIcon />}</button>
                    <ul className='hidden flex gap-[50px] lg:flex'>
                        {Object.entries(t.menu).map(([key, label]) => (
                            <li
                                key={key}
                                className="group relative transition transition-colors duration-[500ms] hover:text-[var(--primary)] cursor-pointer hover:scale-105"
                                onClick={() => handleClick(key)}
                            >
                                <span>{label}</span>
                                <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[var(--primary)] transition-all duration-500 group-hover:w-full" />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            {
                menuOpen && (<div>
                    <ul className='flex flex-col gap-5 py-4 lg:hidden'>
                        {Object.entries(t.menu).map(([key, label]) => (
                            <li key={key} onClick={() => handleClick(key)}>{label}</li>
                        ))}
                    </ul>
                </div>
                )
            }
        </nav>
    )
}

const LanguageSwitcher = () => {
    const { setLang } = useLang();
    const buttonStyles = 'cursor-pointer hover:text-[var(--primary)] transition';
    return (<div className='flex font-semibold gap-1'>
        <button className={buttonStyles} onClick={() => setLang("en")}>EN</button>
        /
        <button className={buttonStyles} onClick={() => setLang("es")}>ES</button>
    </div>)
}

export default Navbar
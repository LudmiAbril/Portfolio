"use client";

import { useLang } from '@/context/LanguageContext';
import { useScrollToSection } from '@/hooks/UseScrollToSection';
import React from 'react'

const Footer = () => {
  const scrollTo = useScrollToSection();
  const { t } = useLang();
  return (
    <div className='py-5 px-[28px] bg-footer-background text-footer-text text-center flex flex-col gap-5 lg:flex-row lg:justify-between lg:px-[80px] lg:py-10'><p>Ludmila Pereyra © {new Date().getFullYear()}</p>
      <ul className='flex flex-wrap gap-4 justify-center lg:gap-[50px]'>
        {Object.entries(t.menu).map(([key, label]) => (<li onClick={() => scrollTo(key)} key={key} className='cursor-pointer hover:text-[var(--primary)] transition'>{label}</li>))}
      </ul>
    </div>
  )
}

export default Footer
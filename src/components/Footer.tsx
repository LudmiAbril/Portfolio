"use client";

import { useScrollToSection } from '@/hooks/UseScrollToSection';
import { menuOptionsEs } from '@/utils/texts'
import React from 'react'

const Footer = () => {
  const scrollTo = useScrollToSection();
  return (
    <div className='py-5 px-[28px] bg-footer-background text-footer-text text-center flex flex-col gap-5 lg:flex-row lg:justify-between lg:px-[80px] lg:py-10'><p>Ludmila Pereyra © {new Date().getFullYear()}</p>
      <ul className='flex flex-wrap gap-4 justify-center lg:gap-[50px]'>
        {menuOptionsEs.map((item, index) => (<li onClick={() => scrollTo(item.id)} key={index} className='cursor-pointer hover:text-[var(--primary)] transition'>{item.label}</li>))}
      </ul>
    </div>
  )
}

export default Footer
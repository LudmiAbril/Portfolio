"use client";

import React from 'react'
import Button from './ui/Button'
import HeroAnimation from './HeroAnimation'
import { motion } from 'framer-motion';
import { containerVariants, textVariants } from '@/utils/animations';
import { useScrollToSection } from '@/hooks/UseScrollToSection';

const HomeSection = () => {
  const scrollTo = useScrollToSection();
  return (
    <div className='flex flex-col items-center min-h-screen lg:flex-row lg:justify-between lg:items-center' id='home'>
      <div className='mt-30 lg:order-1'><HeroAnimation /></div>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className='text-center flex flex-col items-center lg:items-start lg:max-w-[800px]'>
        <motion.h1 className="font-noto-sans text-4xl font-medium mb-2 lg:text-5xl" variants={textVariants}>Ludmila Pereyra</motion.h1>
        <motion.h3 className='text-[var(--primary)] font-noto-sans text-2xl mb-2 textAnimation lg:text-3xl' variants={textVariants}>Desarrolladora Web</motion.h3>
        <motion.p className='font-nunito mb-8 lg:text-left' variants={textVariants}>Me enfoco en la creacion de soluciones frontend atendiendo los requerimientos del producto y la experiencia de usuario.</motion.p>
        <motion.div variants={textVariants}><Button onClick={() => scrollTo("skills")}>Comenzar</Button></motion.div>
      </motion.div >
    </div >
  )
}

export default HomeSection
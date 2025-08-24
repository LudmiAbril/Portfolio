"use client";

import React from 'react'
import Button from './ui/Button'
import HeroAnimation from './HeroAnimation'
import { motion } from 'framer-motion';
import { containerVariants, textVariants } from '@/utils/animations';

const HomeSection = () => {
  return (
    <div className='flex flex-col items-center min-h-screen'>
      <div className='mb-1 mt-30'><HeroAnimation /></div>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className='text-center flex flex-col items-center'>
        <motion.h1 className="font-noto-sans text-4xl font-medium mb-2" variants={textVariants}>Ludmila Pereyra</motion.h1>
        <motion.h3 className='text-[var(--primary)] font-noto-sans text-2xl mb-2 textAnimation' variants={textVariants}>Desarrolladora Web</motion.h3>
        <motion.p className='font-nunito mb-8' variants={textVariants}>Me enfoco en la creacion de soluciones frontend atendiendo los requerimientos del producto y la experiencia de usuario.</motion.p>
        <motion.div variants={textVariants}><Button>Comenzar</Button></motion.div>
      </motion.div >
    </div >
  )
}

export default HomeSection
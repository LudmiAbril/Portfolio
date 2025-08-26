"use client";

import React from 'react'
import Line from './ui/Line'
import { motion } from 'framer-motion'
import { containerVariants, textVariants } from '@/utils/animations'
import { experienceES } from '@/utils/texts';

const Experience = () => {
    return (
        <div className='flex flex-col items-center min-h-screen scroll-mt-40 items-center' id='experience'>
            <motion.h1 className="font-noto-sans text-4xl font-medium mb-15 lg:text-5xl lg:mb-30" variants={textVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}>Experiencia</motion.h1>
            <motion.div variants={containerVariants} viewport={{ once: true, amount: 0.3 }} initial="hidden"
                whileInView="visible" className='lg:w-full'>
                <motion.h3 className='font-noto-sans font-semibold text-2xl mb-2 lg:text-3xl' variants={textVariants}>{experienceES.company}</motion.h3>
                <motion.p className='font-noto-sans font-semibold text-xl text-[var(--primary)] mb-4 lg:text-2xl' variants={textVariants}>{experienceES.date}</motion.p>
                <Line />
                <motion.p className='mt-4' variants={textVariants}>
                    {experienceES.desc}
                </motion.p>
            </motion.div>
        </div>
    )
}

export default Experience
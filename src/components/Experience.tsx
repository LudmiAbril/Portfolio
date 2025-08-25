"use client";

import React from 'react'
import Line from './ui/Line'
import { motion } from 'framer-motion'
import { containerVariants, textVariants } from '@/utils/animations'

const Experience = () => {
    return (
        <div className='flex flex-col items-center min-h-screen scroll-mt-40' id='experience'>
            <motion.h1 className="font-noto-sans text-4xl font-medium mb-15" variants={textVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}>Experiencia</motion.h1>
            <motion.div variants={containerVariants} viewport={{ once: true, amount: 0.3 }} initial="hidden"
                whileInView="visible">
                <motion.h3 className='font-noto-sans font-semibold text-2xl mb-2' variants={textVariants}>Flydevs</motion.h3>
                <motion.p className='font-noto-sans font-semibold text-xl text-[var(--primary)] mb-4' variants={textVariants}>Jun 2024 - May 2025</motion.p>
                <Line />
                <motion.p className='mt-4' variants={textVariants}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam fugiat laudantium perferendis blanditiis obcaecati porro officia optio repellat nobis veniam ea dolore quas facere, doloremque aliquam ipsam provident, quo natus.</motion.p>
            </motion.div>

        </div>
    )
}

export default Experience
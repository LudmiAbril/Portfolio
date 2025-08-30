"use client";

import { lineVariants } from '@/utils/animations';
import { motion } from 'framer-motion'
import React from 'react'

const Line = () => {
    return (
        <motion.div className='bg-[var(--text)] w-full h-[2px]' variants={lineVariants}></motion.div>
    )
}

export default Line
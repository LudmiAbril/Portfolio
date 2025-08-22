"use client";

import { lineVariants } from '@/utils/animations';
import { motion } from 'framer-motion'
import React from 'react'

const Line = () => {
    return (
        <motion.div className='bg-white w-full h-[0.5px]' variants={lineVariants}></motion.div>
    )
}

export default Line
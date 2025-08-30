"use client";

import { textVariants } from '@/utils/animations';
import { motion } from 'framer-motion'
import React from 'react'
import Carrousel from './Carrousel';
import { useLang } from '@/context/LanguageContext';

const ProfessionalProjects = () => {
    const { t } = useLang();
    return (
        <div className='flex flex-col items-center min-h-screen scroll-mt-40' id='projects'>
            <motion.h1 className="flex flex-col font-noto-sans text-4xl font-medium mb-15 text-center lg:inline lg:text-5xl lg:mb-30" variants={textVariants} initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}>
                {t.professionalProjects.sectionTitle.map((part, index) => (
                    <span
                        key={index}
                        className={part.highlight ? "text-[var(--primary)]" : ""}
                    >
                        {part.text}{" "}
                    </span>
                ))}
            </motion.h1>
            <motion.div
                className="w-full h-full flex flex-col text-center items-center"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.5 }}
            >
                <Carrousel slides={t.professionalProjects.data} />
            </motion.div>
        </div>
    )
}

export default ProfessionalProjects
"use client";

import { textVariants, containerVariants, skillVariants } from '@/utils/animations'
import { motion } from 'framer-motion'
import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { GrMail } from 'react-icons/gr';
import Line from './ui/Line';
import ContactForm from './ContactForm';
import { useLang } from '@/context/LanguageContext';
import { SocialProps } from '@/utils/typing';

const Contact = () => {
    const { t } = useLang();
    return (
        <div className='flex flex-col items-center min-h-screen scroll-mt-40 lg:flex-row lg:items-start lg:justify-between' id='contact'>
            <div className='flex flex-col items-center lg:items-start lg:max-w-150'>
                <motion.h1 className="font-title text-4xl font-medium mb-15 lg:text-5xl" variants={textVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}>{t.contact.sectionTitle}</motion.h1>
                <motion.div variants={containerVariants} viewport={{ once: true, amount: 0.3 }} initial="hidden"
                    whileInView="visible" className='flex flex-col items-center lg:items-start'>
                    <motion.p className='font-noto-sans mb-9 text-center lg:text-start' variants={textVariants}>{t.contact.description}</motion.p>
                    <div className='hidden lg:flex lg:w-full lg:mb-6'>
                        <Line />
                    </div>
                    <motion.div className='flex gap-6'>
                        <Social link='https://www.linkedin.com/in/ludmila-pereyra-a77456176/'><FaLinkedin size={33} /></Social>
                        <Social link='https://github.com/LudmiAbril'><FaGithub size={33} /></Social>
                        <Social link='mailto:ludmila.pereyra543@gmail.com'><GrMail size={33} /></Social>
                    </motion.div>
                </motion.div>
            </div>
            <ContactForm />
        </div>
    )
}

export const Social = ({ children, link }: SocialProps) => {
    const isMail = link.startsWith("mailto:");
    return (
        <motion.a
            href={link}
            target={isMail ? undefined : "_blank"}
            rel={isMail ? undefined : "noopener noreferrer"}
            variants={skillVariants}
        >
            {children}
        </motion.a>
    );
};

export default Contact;
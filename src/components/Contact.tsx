"use client";

import { textVariants, containerVariants } from '@/utils/animations'
import { motion } from 'framer-motion'
import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Button from './ui/Button';
import { IoIosSend } from 'react-icons/io';
import { GrMail } from 'react-icons/gr';


const Contact = () => {
    const inputStyles = 'p-2 bg-white text-black rounded-[16px] focus:outline-none';
    const labelStyles = 'flex flex-col w-full';
    return (
        <div className='flex flex-col items-center min-h-screen'>
            <motion.h1 className="font-noto-sans text-4xl font-medium mb-15" variants={textVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}>¡Hablemos!</motion.h1>
            <motion.div variants={containerVariants} viewport={{ once: true, amount: 0.3 }} initial="hidden"
                whileInView="visible" className='flex flex-col items-center'>
                <motion.p className='font-noto-sans mb-9 text-center' variants={textVariants}>Estoy abierta a nuevas oportunidades laborales, tanto freelance como a tiempo completo. Si te interesa o tenes algun proyecto en mente, no dudes en contactarte conmigo!</motion.p>
                <div className='flex gap-6'>
                    <a href="https://www.linkedin.com/in/ludmila-pereyra-a77456176/" target='_blank'>  <FaLinkedin size={33} /></a>
                    <a href="https://github.com/LudmiAbril" target='_blank'><FaGithub size={33} /></a>
                    <a href="mailto:ludmila.pereyra543@gmail.com"><GrMail size={33} /></a>
                </div>
                <form action="" className="flex flex-col gap-4 w-full items-center mt-10">
                    <label htmlFor="nombre" className={labelStyles}>
                        <p className='mb-2'>Nombre</p>
                        <input type="text" id="nombre" name="nombre" className={inputStyles} />
                    </label>

                    <label htmlFor="email" className={labelStyles}>
                        <p className='mb-2'>Email</p>
                        <input type="email" id="email" name="email" className={inputStyles} />
                    </label>

                    <label htmlFor="mensaje" className={labelStyles}>
                        <p className='mb-2'>Mensaje</p>
                        <textarea id="mensaje" name="mensaje" className={`${inputStyles} h-60 resize-none`}></textarea>
                    </label>
                    <Button className='flex items-center gap-2 mt-2'>Enviar <IoIosSend size={20} /></Button>
                </form>
            </motion.div>
        </div>
    )
}

export default Contact
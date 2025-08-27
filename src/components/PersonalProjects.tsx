"use client";

import { textVariants } from '@/utils/animations'
import { motion } from 'framer-motion'
import React from 'react'
import Carrousel from './Carrousel'
import { ProjectData } from './ProfessionalProjects';

const personalProjects: ProjectData[] = [
    { name: "Alquimia", date: "2025", description: "Aplicación para confeccionar tu propio perfume, personalizar envase, descubrir familias aromaticas y conectar con proveedores de insumos.", image: "/alquimia-img.png", stack: ["Next", "Typescript", "Tailwind", "Zustand"], demoUrl: "https://frontend-alquimia.vercel.app/" },
    { name: "Ghibli Wiki", date: "2024", description: "Enciclopedia sobre la filmografia de studio ghibli.", image: "/ghibli-wiki-img.png", stack: ["React", "Javascript", "Tailwind"], demoUrl: "https://ludmiabril.github.io/Wiki-de-Studio-Ghibli-con-React/", repoUrl: "https://github.com/LudmiAbril/Wiki-de-Studio-Ghibli-con-React" },
    { name: "Consultor Clima Actual", date: "2024", description: "App que permite consultar el temporal en cualquier parte del mundo.", image: "/weather-app-img.png", stack: ["React", "Javascript", "Material UI"], demoUrl: "https://ludmiabril.github.io/App-clima-actual/", repoUrl: "https://github.com/LudmiAbril/App-clima-actual" },
];

const PersonalProjects = () => {
    return (
        <div className='flex flex-col items-center min-h-screen'>
            <motion.h1 className="font-noto-sans text-4xl font-medium mb-15 text-center flex flex-col lg:text-5xl lg:inline lg:mb-30" variants={textVariants} initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}>Proyectos<span className='text-[var(--primary)]'> Personales</span></motion.h1>
            <motion.div
                className="w-full h-full flex flex-col text-center items-center"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.5 }}
            >
                <Carrousel slides={personalProjects} />
            </motion.div>
        </div>
    )
}

export default PersonalProjects
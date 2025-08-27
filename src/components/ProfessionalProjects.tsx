"use client";

import { textVariants } from '@/utils/animations';
import { motion } from 'framer-motion'
import React from 'react'
import Carrousel from './Carrousel';

export interface ProjectData {
    name: string,
    date: string,
    description: string,
    image: string
    stack: string[],
    demoUrl?: string,
    repoUrl?: string
}

const professionalProjects: ProjectData[] = [
    { name: "One Vok", date: "2025", description: "Aplicación para la realización de tests vocacionales, con gestión de usuarios y administración de los tests adquiridos por los clientes.", image: "/onevok-2-img.jpg", stack: ["Next", "Typescript", "Tailwind", "Material UI"], demoUrl: "https://www.onevok.com/" },
    { name: "Millotón - Landing Page", date: "2024", description: "Sitio web para una aplicación de preguntas y su programa de Televisión.", image: "/milloton-img.png", stack: ["React", "Typescript"], demoUrl: "https://www.milloton.com/" },
    { name: "Millotón - Dashboard", date: "2024", description: "Plataforma para la gestion de preguntas y usuarios registrados en la app Millotón.", image: "/milloton-2-img.png", stack: ["Next", "Typescript", "Material UI"] },
    { name: "Flydevs - Intranet", date: "2024", description: "Plataforma para la de gestión interna de usuarios de la empresa.", image: "/intranet-img.webp", stack: ["React", "Typescript", "Material UI", "Styled Components", "Context API"] },
    { name: "Tulip - Landing Page", date: "2024", description: "Sitio web para una aplicacion que conecta con distintos profesionales de la salud.", image: "/tulip-img.webp", stack: ["React", "Typescript", "Material UI"] },
];

const ProfessionalProjects = () => {
    return (
        <div className='flex flex-col items-center min-h-screen scroll-mt-40' id='projects'>
            <motion.h1 className="font-noto-sans text-4xl font-medium mb-15 text-center lg:text-5xl lg:mb-30" variants={textVariants} initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}>Proyectos<span className='text-[var(--primary)]'> Profesionales</span></motion.h1>
            <motion.div
                className="w-full h-full flex flex-col text-center items-center"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.5 }}
            >
                <Carrousel slides={professionalProjects} />
            </motion.div>
        </div>
    )
}

export default ProfessionalProjects
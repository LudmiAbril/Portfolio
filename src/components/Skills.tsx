"use client";

import React from 'react';
import Image from "next/image";
import { motion } from 'framer-motion';
import { textVariants, containerVariants, skillVariants } from '@/utils/animations';

const Skills = () => {

    interface Skills {
        name: string,
        img: string
    }

    const skills: Skills[] = [
        { name: "HTML", img: "/html-icon.svg" },
        { name: "CSS", img: "/css-icon.svg" },
        { name: "Javascript", img: "/javascript-icon.svg" },
        { name: "Typescript", img: "/typescript-icon.svg" },
        { name: "React", img: "/react-icon.svg" },
        { name: "Next", img: "/next-icon.svg" },
        { name: "Tailwind", img: "/tailwind-icon.svg" },
    ]

    return (
        <div className='flex flex-col items-center min-h-screen'>
            <motion.h1 className="font-noto-sans text-4xl font-medium mb-20" variants={textVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}>
                Habilidades
            </motion.h1>
            <motion.div className='flex flex-wrap gap-8 items-center justify-center' variants={containerVariants} viewport={{ once: true, amount: 0.3 }} initial="hidden"
                whileInView="visible">
                {skills.map((skill, index) => (
                    <motion.div className='flex flex-col items-center justify-center basis-1/4 mb-8' key={"skill-" + index}
                        variants={skillVariants}>
                        <Image src={skill.img} alt={skill.name + "-icon"} width={52} height={30} />
                        <p className='mt-4'>{skill.name}</p>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    )
}

export default Skills
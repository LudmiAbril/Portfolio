"use client";

import React from 'react';
import Image from "next/image";
import { motion } from 'framer-motion';
import { textVariants, containerVariants, skillVariants } from '@/utils/animations';
import { useLang } from '@/context/LanguageContext';

const Skills = () => {
    const { t } = useLang();

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
        { name: "Git", img: "/git-icon.svg" },
        { name: "Postman", img: "/postman-icon.svg" },
        { name: "Zustand", img: "/zustand-icon.svg" },
        { name: "Figma", img: "/figma-icon.svg" },
    ]

    return (
        <div className='flex flex-col items-center min-h-screen scroll-mt-40' id='skills'>
            <motion.h1 className="font-noto-sans text-4xl font-medium mb-15 lg:text-5xl lg:mb-30" variants={textVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}>
                {t.skills.sectionTitle}
            </motion.h1>
            <motion.div className='flex flex-wrap gap-8 items-center justify-center lg:w-full lg:gap-32' variants={containerVariants} viewport={{ once: true, amount: 0.3 }} initial="hidden"
                whileInView="visible">
                {skills.map((skill, index) => (
                    <motion.div className='flex flex-col items-center justify-center basis-1/4 mb-8 lg:basis-auto' key={"skill-" + index}
                        variants={skillVariants}>
                        <div className="relative w-12 h-12 lg:w-16 lg:h-16">
                            <Image
                                src={skill.img}
                                alt={skill.name + "-icon"}
                                fill
                                className="object-contain"
                            />
                        </div>

                        <p className='mt-4'>{skill.name}</p>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    )
}

export default Skills
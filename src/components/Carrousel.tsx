"use client";

import "../app/globals.css"
import Image from "next/image";
import { ProjectData } from "./ProfessionalProjects";
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { FiExternalLink } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";

type Props = { slides: ProjectData[] };

const Carrousel: React.FC<Props> = ({ slides }) => {
    const linkStyles = "font-noto-sans underline text-semibold text-xl flex gap-1 items-center"
    const titleStyles = "font-noto-sans font-semibold mb-2"

    return (
        <Swiper
            spaceBetween={50}
            slidesPerView={1}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            className="w-[100%]"
            loop
            autoplay
            modules={[Pagination]}
        >
            {slides.map((project, index) => (
                <SwiperSlide key={"project-" + index}>
                    <div className="w-full h-full flex flex-col text-center items-center">
                        <div className="relative w-80 h-50 mb-6">
                            <Image src={project.image} alt="Project Image" fill className="object-cover rounded-[16px]" />
                        </div>
                        <h4 className={`${titleStyles} text-2xl`}>{project.name}</h4>
                        <p className={`${titleStyles} text-xl text-[var(--primary)]`}>{project.date}</p>
                        <p>{project.description}</p>
                        <div className="flex gap-6 justify-center mt-8">
                            {project.demoUrl && <a href={project.demoUrl} target="_blank" className={linkStyles}>Visitar<FiExternalLink /></a>}
                            {project.repoUrl && <a href={project.repoUrl} target="_blank" className={linkStyles}>Código<FaGithub /></a>}
                        </div>
                    </div>
                </SwiperSlide>
            ))}
            <div className="custom-swiper-pagination mt-[4rem] flex justify-center"></div>
        </Swiper>
    );
};

export default Carrousel;

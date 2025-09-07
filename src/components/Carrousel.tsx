"use client";

import "../app/globals.css"
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Keyboard, Navigation, Pagination } from "swiper/modules";
import { FiExternalLink } from "react-icons/fi";
import { FaArrowLeft, FaArrowRight, FaGithub } from "react-icons/fa";
import { ProjectData } from "@/utils/typing";
import { useLang } from "@/context/LanguageContext";

type Props = { slides: ProjectData[] };

const Carrousel: React.FC<Props> = ({ slides }) => {
    const linkStyles = "underline text-semibold text-xl flex gap-1 items-center hover:text-[var(--primary)] transition"
    const titleStyles = "font-title font-semibold mb-2"
    const isWeb = typeof window !== "undefined" && window.innerWidth >= 1024;
    const { t } = useLang();

    return (
        <Swiper
            spaceBetween={50}
            slidesPerView={1}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            className="w-[100%]"
            loop
            keyboard={{ enabled: true }}
            navigation={isWeb}
            modules={[Pagination, Navigation, Keyboard]}
        >
            {slides.map((project, index) => (
                <SwiperSlide key={"project-" + index}>
                    <div className="w-full h-full flex flex-col text-center items-center lg:flex-row lg:items-start lg:justify-center lg:gap-20">
                        <div className="relative w-80 h-50 mb-6 lg:w-160 lg:h-100">
                            <Image src={project.image} alt="Project Image" fill className="object-cover rounded-[16px] dark:shadow-lg" />
                        </div>
                        <div className="flex flex-col lg:items-start lg:w-auto lg:max-w-120">
                            <h4 className={`${titleStyles} text-2xl lg:text-3xl`}>{project.name}</h4>
                            <p className={`${titleStyles} text-xl text-[var(--primary)] lg:text-2xl`}>{project.date}</p>
                            <p className="lg:text-start lg:mt-4">{project.description}</p>
                            <div className="hidden lg:flex lg:gap-4 lg:mt-8 lg:flex-wrap">
                                {project.stack.map((item, index) => (<div key={index} className="px-6 py-1 text-white bg-[#714d94] rounded-[16px]">
                                    {item}
                                </div>))}
                            </div>
                            <div className="flex gap-6 justify-center mt-8 lg:mt-10">
                                {project.demoUrl && <a href={project.demoUrl} target="_blank" className={linkStyles}>{t.linkTexts.demo}<FiExternalLink /></a>}
                                {project.repoUrl && <a href={project.repoUrl} target="_blank" className={linkStyles}>{t.linkTexts.code}<FaGithub /></a>}
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
            <div className="custom-swiper-pagination mt-[4rem] lg:mt-[6rem] flex justify-center"></div>
            <button className="custom-prev absolute top-1/2 -left-10 transform -translate-y-1/2 bg-black/40 text-white p-3 rounded-full hover:bg-black transition">
                <FaArrowLeft />
            </button>
            <button className="custom-next absolute top-1/2 -right-10 transform -translate-y-1/2 bg-black/40 text-white p-3 rounded-full hover:bg-black transition">
                <FaArrowRight />
            </button>
        </Swiper>
    );
};

export default Carrousel;

"use client";

export const useScrollToSection = () => {
    const scrollTo = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };
    return scrollTo;
};

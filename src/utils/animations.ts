import { easeOut } from "framer-motion";

export const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2,
        },
    },
};

export const textVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: easeOut }
    },
    exit: {
        opacity: 0
    }
};

export const skillVariants = {
    hidden: { opacity: 0, scale: 0.4 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.4,
            ease: easeOut,
        },
    },
};
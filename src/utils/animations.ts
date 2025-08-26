import { easeOut } from "framer-motion";
import { Variants } from "framer-motion";

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

export const skillVariants : Variants = {
    hidden: { opacity: 0, scale: 0.7 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
             type: "spring",
            stiffness: 400,
            damping: 10,
        },
    },
};

export const lineVariants = {
    hidden: { scaleX: 0, originX: 0 },
    visible: {
        scaleX: 1,
        transition: { duration: 0.6, ease: easeOut },
    },
};
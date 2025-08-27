"use client";

import { motion } from "framer-motion";

interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
}
const Button = ({ children, className, onClick }: ButtonProps) => {
    return <motion.button
        whileHover={{
            scale: 1.05,
            backgroundColor: "#7a37b9ff",
            color: "#ddddddff"
        }}
        whileTap={{
            scale: 0.50,
        }}
        transition={{
            type: "spring",
            stiffness: 400,
            damping: 10,
        }}
        className={`${className} w-fit px-8 py-3 bg-[var(--primary)] rounded-[16px] font-noto-sans font-medium text-lg cursor-pointer`} onClick={onClick}>{children}</motion.button>;
};

export default Button;

"use client";

interface ButtonProps {
    children: React.ReactNode;
    className?: string;
}
const Button = ({ children, className }: ButtonProps) => {
    return <div className={`${className} w-fit px-8 py-3 bg-[var(--primary)] rounded-[16px] font-noto-sans font-medium text-lg`}>{children}</div>;
};

export default Button;

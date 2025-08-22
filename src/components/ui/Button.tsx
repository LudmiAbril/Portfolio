"use client";

const Button = ({ children }: { children: React.ReactNode }) => {
    return <div className="w-fit px-8 py-3 bg-[var(--primary)] rounded-[16px] font-noto-sans font-medium text-xl">{children}</div>;
};

export default Button;

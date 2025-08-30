"use client";

import { motion } from 'framer-motion'
import React, { useRef, useState } from 'react'
import { IoIosSend } from 'react-icons/io';
import Button from './ui/Button';
import emailjs from "emailjs-com";
import { useLang } from '@/context/LanguageContext';
import { FormInputProps } from '@/utils/typing';

const ContactForm = () => {
    const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
    const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
    const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;
    const formRef = useRef<HTMLFormElement>(null);
    const [emailSent, setEmailSent] = useState<boolean | null>(null);
    const { t } = useLang();

    const handleInputChange = () => {
        if (emailSent !== null) setEmailSent(null);
    };

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!formRef.current) return;
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
            .then(() => {
                setEmailSent(true)
                formRef.current?.reset();
            },
                (error: Error) => {
                    setEmailSent(false)
                    console.error("Failed to send email: ", error.message);
                }
            );
    }

    return (
        <motion.form
            ref={formRef}
            onSubmit={sendEmail}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }}
            className="flex flex-col gap-4 w-full items-center mt-10 lg:mt-0 lg:max-w-150 lg:items-start lg:gap-6">
            {t.contact.formInputs.map((item, index) =>
            (<div className='w-full' key={index}>
                <FormInput inputType={item.inputType} inputName={item.inputName} label={item.label} onInputChange={handleInputChange} />
            </div>))}
            <div className='flex flex-col gap-2 items-center lg:items-start'>
                {emailSent === true && <p>{t.contact.successMessage}</p>}
                {emailSent === false && <p>{t.contact.errorMessage}</p>}
                <Button className='flex items-center gap-2 mt-2 mb-10'>{t.contact.buttonText} <IoIosSend size={20} /></Button>
            </div>
        </motion.form>
    )
}

const FormInput = ({ onInputChange, inputType, inputName, label }: FormInputProps) => {
    const labelStyles = 'font-title flex flex-col w-full lg:font-semibold';
    const inputStyles = 'p-2 bg-white text-black rounded-[16px] focus:outline-none dark:border-2';
    return (<label htmlFor={inputName} className={labelStyles}>
        <p className='mb-2'>{label} *</p>
        {inputType === "textarea" ? (<textarea id={inputName} name={inputName} onChange={onInputChange} className={`${inputStyles} h-60 resize-none`} required />) : (<input type={inputType} id={inputName} name={inputName} onChange={onInputChange} className={inputStyles} required />)}

    </label>)
}

export default ContactForm
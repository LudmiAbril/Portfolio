"use client";

import { motion } from 'framer-motion'
import React, { useRef, useState } from 'react'
import { IoIosSend } from 'react-icons/io';
import Button from './ui/Button';
import emailjs from "emailjs-com";

const ContactForm = () => {
    const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
    const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
    const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;
    const labelStyles = 'flex flex-col w-full lg:font-semibold';
    const inputStyles = 'p-2 bg-white text-black rounded-[16px] focus:outline-none';
    const formRef = useRef<HTMLFormElement>(null);
    const [emailSent, setEmailSent] = useState<boolean | null>(null);

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
            <label htmlFor="user_name" className={labelStyles}>
                <p className='mb-2'>Nombre *</p>
                <input type="text" id="user_name" name="user_name" onChange={handleInputChange} className={inputStyles} required />
            </label>
            <label htmlFor="user_email" className={labelStyles}>
                <p className='mb-2'>Email *</p>
                <input type="email" id="user_email" name="user_email" onChange={handleInputChange} className={inputStyles} required />
            </label>
            <label htmlFor="subject" className={labelStyles}>
                <p className='mb-2'>Asunto *</p>
                <input type="text" id="subject" name="subject" onChange={handleInputChange} className={inputStyles} required />
            </label>
            <label htmlFor="message" className={labelStyles}>
                <p className='mb-2'>Mensaje *</p>
                <textarea id="message" name="message" onChange={handleInputChange} className={`${inputStyles} h-60 resize-none`} required></textarea>
            </label>
            <div className='flex flex-col gap-2'>
                {emailSent === true && <p>Email enviado!</p>}
                {emailSent === false && <p>Ocurrio un error al enviar el mail.</p>}
                <Button className='flex items-center gap-2 mt-2'>Enviar <IoIosSend size={20} /></Button>
            </div>
        </motion.form>
    )
}

export default ContactForm
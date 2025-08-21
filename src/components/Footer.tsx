import { menuOptions } from '@/utils/texts'
import React from 'react'

const Footer = () => {
  return (
    <div className='py-5 px-[28px] bg-footer-background text-footer-text text-center flex flex-col gap-5'><p>Ludmila Pereyra © {new Date().getFullYear()}</p>
      <ul className='flex flex-wrap gap-4 justify-center'>
        {menuOptions.map((item, index) => (<li key={index}>{item}</li>))}
      </ul>
    </div>
  )
}

export default Footer
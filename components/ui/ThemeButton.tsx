
import { ThemeButtonType } from '@/types'
import Image from 'next/image'
import React from 'react'

const ThemeButton = ({ children, icon, style, onButtonClick }: ThemeButtonType) => {
    return (
        <button onClick={onButtonClick} className={`bg-black text-white px-5 py-2 flex gap ${style}`}>
            <span>{children}</span>
            {icon && (<Image src={icon} alt='icon' width={15} height={12} />)}
        </button>
    )
}

export default ThemeButton
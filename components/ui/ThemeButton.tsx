
import { ThemeButtonType } from '@/types'
import React from 'react'

const ThemeButton = ({ children, icon, style, onButtonClick }: ThemeButtonType) => {
    return (
        <button onClick={onButtonClick} className={`bg-black text-white px-5 py-2 flex gap ${style}`}>
            <span>{children}</span>
            {icon && (<img src={icon} alt='icon' />)}
        </button>
    )
}

export default ThemeButton
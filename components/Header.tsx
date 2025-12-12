'use client'
import React from 'react'
import ThemeButton from './ui/ThemeButton'

const Header = () => {
    return (
        <div className='fixed w-full bg-white pl-20'>
            <div className='flex justify-between items-center'>
                <div>
                    <p>Logo</p>
                </div>
                <ThemeButton onButtonClick={() => {
                }}
                    style='!py-5 pr-40'
                >
                    Explore
                </ThemeButton>
            </div>
        </div>
    )
}

export default Header
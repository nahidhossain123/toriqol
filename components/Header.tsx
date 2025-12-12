'use client'
import React from 'react'
import ThemeButton from './ui/ThemeButton'
import Logo from './assets/logo.svg'
import ReturnArrow from './assets/back-arrow.svg'
import Image from 'next/image'

const Header = () => {
    return (
        <div className='fixed w-full bg-white pl-20'>
            <div className='flex justify-between items-center'>
                <div>
                    <Image src={Logo} alt='logo' width={80} height={24} />
                </div>
                <ThemeButton
                    icon={ReturnArrow}
                    onButtonClick={() => {
                    }}
                    style='!py-5 gap-20 text-2xl font-iceland'
                >
                    Explore
                </ThemeButton>
            </div>
        </div>
    )
}

export default Header
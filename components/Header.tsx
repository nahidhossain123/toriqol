'use client'
import React from 'react'
import ThemeButton from './ui/ThemeButton'
import Logo from './assets/logo.svg'
import ShortLogo from './assets/short-logo.svg'
import ReturnArrow from './assets/back-arrow.svg'
import Image from 'next/image'

const Header = () => {
    return (
        <div className='fixed w-full bg-white border-b border-primary'>
            <div className='flex justify-between items-center'>
                <div className='flex items-center gap-10 pl-4'>
                    <Image src={ShortLogo} alt='logo' width={13} height={17} />
                    <Image src={Logo} alt='logo' width={80} height={24} />
                </div>
                <ThemeButton
                    icon={ReturnArrow}
                    onButtonClick={() => {
                    }}
                    style='!py-[1px] gap-16 !pl-12 text-4xl font-iceland'
                >
                    Explore
                </ThemeButton>
            </div>
        </div>
    )
}

export default Header
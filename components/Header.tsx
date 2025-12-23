'use client'
import React, { useEffect, useRef } from 'react'
import ThemeButton from './ui/ThemeButton'
import Logo from './assets/logo.svg'
import ShortLogo from './assets/short-logo.svg'
import ReturnArrow from './assets/back-arrow.svg'
import Image from 'next/image'
import { useGSAP } from '@gsap/react'
import { time } from 'console'
import gsap from 'gsap'

const Header = () => {
    let [isOpenMenu, setIsOpenMenu] = React.useState(false)
    const containerRef = useRef(null);
    useEffect(() => {
        gsap.to(".box", {
            scale: isOpenMenu ? 1 : 0,
            transformOrigin: isOpenMenu ? "top left" : "bottom right",
            duration: isOpenMenu ? 0.6 : 0.4,
            ease: isOpenMenu ? "power3.out" : "power3.in",
        });
    }, [isOpenMenu]);
    return (
        <div className='fixed w-full  z-40'>
            <div className='bg-white border-b border-primary'>
                <div className='flex justify-between items-center'>
                    <div className='flex items-center gap-10 pl-4'>
                        <Image src={ShortLogo} alt='logo' width={13} height={17} />
                        <Image src={Logo} alt='logo' width={80} height={24} />
                    </div>
                    <ThemeButton
                        icon={ReturnArrow}
                        onButtonClick={() => {
                            setIsOpenMenu((prevState) => !prevState)
                        }}
                        style='!py-[1px] gap-16 !pl-12 text-4xl font-iceland'
                    >
                        Explore
                    </ThemeButton>
                </div>
            </div>
            <div ref={containerRef} className=' w-full h-[95vh] bottom-0 px-12'>
                <div className='w-full h-full grid grid-cols-3 grid-rows-2 gap-5 p-5'>
                    <div className='box bg-black row-span-2 h-full w-full rounded-2xl scale-0'></div>
                    <div className='box bg-black h-full w-full rounded-2xl scale-0'></div>
                    <div className='box bg-black h-full w-full rounded-2xl scale-0'></div>
                    <div className='box bg-black h-full w-full rounded-2xl scale-0'></div>
                    <div className='box bg-black h-full w-full rounded-2xl scale-0'></div>
                </div>
            </div>
        </div>
    )
}

export default Header
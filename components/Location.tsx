'use client'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import ShortLogoWhite from './assets/short-logo-white.svg'
import gsap from 'gsap'

const Location = () => {
    const locRef = useRef<HTMLDivElement>(null);
    // useEffect(() => {
    //     const tl = gsap.timeline({ defaults: { ease: "power3.out", } });
    //     tl.fromTo(
    //         locRef.current,
    //         {
    //             yPercent: 100,
    //             opacity: 0,
    //             delay: 20,
    //         },
    //         {
    //             yPercent: 0,
    //             opacity: 1,
    //             duration: 1.5,
    //             ease: "power4.out",
    //             delay: 25,
    //         }
    //     );
    // }, []);
    return (
        <div ref={locRef} className='flex border-2 border-black'>
            <div className='bg-black w-8 flex justify-center items-center'>
                <Image src={ShortLogoWhite} alt='logo' width={13} height={17} />
            </div>
            <p className='font-iceland text-[28px] leading-7 px-2'>Located in the Bangladesh</p>
        </div>
    )
}

export default Location
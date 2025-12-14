
'use client'
import gsap from 'gsap';
import React, { useEffect } from 'react'
import Logo from './assets/logo.svg'
import ShortLogo from './assets/short-logo.svg'
import Image from 'next/image';

const Banner = () => {
    const lineRef = React.useRef<HTMLDivElement>(null);
    const logoRef = React.useRef<HTMLDivElement>(null);
    useEffect(() => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out", } });
        tl.to(logoRef.current,
            {
                scale: 1.2,
                opacity: 1,
                duration: 1,
                ease: 'power4.out',
                delay: 3,
            },
        ).to('.line',
            {
                width: '100%',
                duration: 1.5,
                ease: 'power4.inOut',
            },

        ).to(logoRef.current,
            {
                yPercent: 200,
                duration: 2,
                ease: 'power4.inOut',
            },
            '<'
        )
            .to('.content', {
                yPercent: -100,
                duration: 1.5,
                ease: 'power4.inOut',
            }).fromTo('.content-bg', {
                yPercent: 100,
                duration: 1.5,
                ease: 'power4.inOut',
            },
                {
                    yPercent: 0,
                    duration: 1.5,
                    ease: "power4.inOut",
                }
            ).to('.content-bg', {
                yPercent: -100,
                duration: 1.5,
                ease: 'power4.inOut',
            });

    }, []);

    return (
        <div className='grid grid-rows-4 min-h-screen w-full pt-10'>
            <div className='relative overflow-hidden'>
                <div className='content px-12 h-full flex items-end translate-y-full'>
                    <div className='w-full flex justify-between'>
                        <h2 className='text-9xl leading-22 font-atomic text-primary'>FREELANCE</h2>
                        <div className='flex gap-3'>
                            <ul className='font-iceland text-sm leading-3'>
                                <li>
                                    SEAMLESS
                                </li>
                                <li>
                                    PATTERN
                                </li>
                                <li>
                                    DESIGNER
                                </li>
                            </ul>
                            <span className='w-3 h-3 inline-block bg-primary'></span>
                        </div>
                    </div>
                </div>
                <div className='content-bg absolute left-0 top-0 h-full w-full bg-secondary' />
                <div ref={lineRef} className='line absolute w-0 left-0 right-0 bottom-0 m-auto border-b border-primary' />
            </div>
            <div className='relative overflow-hidden'>
                <div className='content px-12 h-full flex justify-between items-end text-primary translate-y-full'>
                    <h2 className='text-9xl leading-22 font-atomic'>FASHION</h2>
                    <div className='-mr-2 space-y-2'>
                        <span className='inline-block font-bold font-atomic'>2015 to</span>
                        <h2 className='text-9xl leading-22 font-atomic'>2026</h2>
                    </div>
                </div>
                <div ref={logoRef} className='absolute bottom-0 opacity-0 w-full flex justify-center'>
                    <Image src={Logo} alt='logo' width={150} height={50} />
                </div>
                <div className='content-bg absolute left-0 top-0 h-full w-full bg-secondary' />
                <div ref={lineRef} className='line absolute w-0 left-0 right-0 bottom-0 m-auto border-b border-primary' />
            </div>
            <div className='relative overflow-hidden'>
                <div className='content px-12 h-full flex justify-between items-end translate-y-full'>
                    <div className='flex justify-between w-full'>
                        <div className='flex justify-between flex-1 max-w-[300px]'>
                            <div className='flex gap-3'>
                                <span className='w-3 h-3 inline-block bg-primary'></span>
                                <ul className='font-iceland text-sm leading-3'>
                                    <li>
                                        APPAREL
                                    </li>
                                    <li>
                                        TECHPACK
                                    </li>
                                    <li>
                                        DESIGNER
                                    </li>
                                </ul>
                            </div>
                            <div className='flex gap-3'>
                                <span className='w-3 h-3 inline-block bg-primary'></span>
                                <ul className='font-iceland text-sm leading-3'>
                                    <li>
                                        3D
                                    </li>
                                    <li>
                                        GARMENT
                                    </li>
                                    <li>
                                        DESIGNER
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <h2 className='text-9xl leading-22 font-atomic text-primary'>DESIGNER</h2>
                    </div>
                </div>
                <div className='content-bg absolute left-0 top-0 h-full w-full bg-secondary' />
                <div ref={lineRef} className='line absolute w-0 left-0 right-0 bottom-0 m-auto border-b border-primary' />
            </div>
            <div className='relative overflow-hidden'>
                <div className='px-12'>

                </div>
                <div className='content-bg absolute left-0 top-0 h-full w-full bg-secondary' />
                <div ref={lineRef} className='line absolute w-0 left-0 right-0 bottom-0 m-auto border-b border-primary' />
            </div>
        </div>
    )
}

export default Banner
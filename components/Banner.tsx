
'use client'
import gsap from 'gsap';
import React, { useEffect, useRef } from 'react'
import Logo from './assets/logo.svg'
import ShortLogo from './assets/short-logo.svg'
import LogoGray from './assets/logo-gray.svg'
import Image from 'next/image';
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const Banner = () => {
    const bannerRef = useRef(null)
    const section1Ref = useRef(null)
    const section2Ref = useRef(null)
    const lineRef = useRef<HTMLDivElement>(null);
    const logoRef = useRef<HTMLDivElement>(null);
    const marqueeRef = useRef(null);
    // useEffect(() => {
    //     const tl = gsap.timeline({ defaults: { ease: "power3.out", } });
    //     tl.to(logoRef.current,
    //         {
    //             scale: 1.2,
    //             opacity: 1,
    //             duration: 1,
    //             ease: 'power4.out',
    //             delay: 3,
    //         },
    //     ).to('.line',
    //         {
    //             width: '100%',
    //             duration: 1.5,
    //             ease: 'power4.inOut',
    //         },

    //     ).to(logoRef.current,
    //         {
    //             yPercent: 200,
    //             duration: 2,
    //             ease: 'power4.inOut',
    //         },
    //         '<'
    //     )
    //         .to('.content', {
    //             yPercent: -100,
    //             duration: 1.5,
    //             ease: 'power4.inOut',
    //         }).fromTo('.content-bg', {
    //             yPercent: 100,
    //             duration: 1.5,
    //             ease: 'power4.inOut',
    //         },
    //             {
    //                 yPercent: 0,
    //                 duration: 1.5,
    //                 ease: "power4.inOut",
    //             }
    //         ).to('.content-bg', {
    //             yPercent: -100,
    //             duration: 1.5,
    //             ease: 'power4.inOut',
    //         });

    //     const tl = gsap.timeline({
    //         scrollTrigger: {
    //             trigger: containerRef.current,
    //             start: "top top",
    //             end: "+=200%", // controls total pinned scroll length
    //             scrub: true,
    //             pin: true,
    //             anticipatePin: 1,
    //         },
    //     })

    //     tl
    //         // Section 1 appears
    //         .fromTo(
    //             section1Ref.current,
    //             { y: "100%", opacity: 0 },
    //             { y: "0%", opacity: 1, duration: 1 }
    //         )

    //         // Section 2 appears on top
    //         .fromTo(
    //             section2Ref.current,
    //             { y: "100%", opacity: 0 },
    //             { y: "0%", opacity: 1, duration: 1 }
    //         )

    //     return () => {
    //         ScrollTrigger.killAll()
    //     }

    // }, []);

    useEffect(() => {
        // GSAP CONTEXT (React-safe)
        const ctx = gsap.context(() => {

            /* ----------------------------------
             1️⃣ INTRO ANIMATION (ON LOAD)
            ---------------------------------- */
            const introTl = gsap.timeline({
                defaults: { ease: "power3.out" },
            })

            introTl.to(logoRef.current,
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


            /* ----------------------------------
             2️⃣ SCROLL-BASED PINNED ANIMATION
            ---------------------------------- */
            const scrollTl = gsap.timeline({
                scrollTrigger: {
                    trigger: bannerRef.current,
                    start: "top top",
                    end: "+=250%",
                    scrub: true,
                    pin: true,
                    anticipatePin: 1,
                },
            })

            scrollTl.fromTo(
                section1Ref.current,
                { yPercent: 100 },
                {
                    yPercent: 4.5,
                    duration: 1,
                }
            )
                .fromTo(
                    section2Ref.current,
                    { yPercent: 100 },
                    {
                        yPercent: 28.2,
                        duration: 1,
                    }
                )

        }, bannerRef)

        return () => ctx.revert()
    }, [])

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.to(".marquee-track", {
                xPercent: -50,
                repeat: -1,
                duration: 5,
                ease: "linear",
            });
        }, section2Ref);

        return () => ctx.revert();
    }, []);


    return (
        <section ref={bannerRef} className='min-h-screen w-full pt-10'>
            <div className='grid grid-rows-4 h-full'>
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
            <div
                ref={section1Ref}
                className="w-[73.33%] absolute inset-0 bg-[#D1D3D4] ml-12"
            >
                <h2 className="text-5xl mt-20 font-normal font-roboto text-white px-5">
                    <span>Hi, this is Toriqol...</span>
                    <br />
                    <span>I will create techpack for your clothing brand.</span>
                </h2>
            </div>

            {/* Section 2 */}
            <div
                ref={section2Ref}
                className="w-[28.33%] absolute bottom-0 top-0 right-0 bg-[#F1F2F2] mr-12 overflow-hidden"
            >
                <div ref={marqueeRef} className='marquee-track flex gap-2 mt-60'>
                    <Image src={LogoGray} alt="Logo Gray" width={433} height={131} className="mt-10 ml-5" />
                    <Image src={LogoGray} alt="Logo Gray" width={433} height={131} className="mt-10 ml-5" />
                </div>
            </div>
        </section>
    )
}

export default Banner
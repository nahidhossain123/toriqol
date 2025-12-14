'use client'
import gsap from 'gsap';
import React, { useEffect } from 'react'

const Nav = () => {
    const navRef = React.useRef<HTMLDivElement>(null);
    useEffect(() => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out", } });
        tl.from(navRef.current,
            {
                xPercent: 100,
                opacity: 0,
                duration: 0.5,
                delay: 11,
            },);
    }, []);
    return (
        <nav ref={navRef} className='w-12 h-full'>
            <ul className='h-full flex flex-col justify-between'>
                <li className='-rotate-90 font-iceland text-3xl'>
                    CONTACT
                </li>
                <li className='-rotate-90 font-iceland text-3xl'>
                    ABOUT
                </li>
                <li className='-rotate-90 font-iceland text-3xl'>
                    WORK
                </li>
            </ul>
        </nav>
    )
}

export default Nav
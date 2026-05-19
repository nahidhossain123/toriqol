'use client'
import React, { useEffect, useRef, useState } from 'react'
import ThemeButton from './ui/ThemeButton'
import Logo from './assets/logo.svg'
import ShortLogo from './assets/short-logo.svg'
import ReturnArrow from './assets/back-arrow.svg'
import Image from 'next/image'
import gsap from 'gsap'

const Header = () => {
    const [open, setOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement | null>(null);
    const itemsRef = useRef<HTMLParagraphElement[]>([]);
    const menuBtnRef = useRef<HTMLDivElement | null>(null);

    const menuItems = [
        "WORK SAMPLES",
        "CLIENTS",
        "PROJECTS",
        "DEVELOPMENTS",
        "ACADEMIC WORKS",
        "CERTIFICATES AND ACHIEVEMENTS",
        "ABOUT",
        "RESUME",
        "PORTFOLIO",
    ];

    useEffect(() => {
        const clickOutside = (e: MouseEvent) => {
            const el = menuRef.current;
            console.log('ClickOutsite', e.target, !el.contains(e.target as Node))
            if (!el) return;
            if (!el.contains(e.target as Node) && !menuBtnRef.current?.contains(e.target as Node)) {
                toggleMenu();
            }
        }
        document.addEventListener('mousedown', clickOutside);

    }, []);

    const toggleMenu = () => {
        const el = menuRef.current;
        if (!el) return;
        if (!open) {
            setOpen(true);
            const height = el.scrollHeight;
            gsap.fromTo(
                el,
                { height: 0 },
                {
                    height: height,
                    duration: 0.6,
                    ease: "power3.out",
                    onComplete: () => {
                        el.style.height = "auto"; // ✅ important
                    },
                }
            );
            gsap.fromTo(
                itemsRef.current,
                { y: -20, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    stagger: 0.07,
                    duration: 0.4,
                    ease: "power2.out",
                    delay: 0.2,
                }
            );
        } else {
            console.log('toggleMenu', open)
            const height = el.scrollHeight;
            gsap.to(itemsRef.current, {
                y: -10,
                opacity: 0,
                stagger: 0.05,
                duration: 0.2,
                ease: "power2.in",
            });
            gsap.fromTo(
                el,
                { height: height },
                {
                    height: 0,
                    duration: 0.5,
                    ease: "power3.in",
                    onComplete: () => setOpen(false),
                }
            );
        }
    };

    useEffect(() => {
        const cleanups = itemsRef.current.map((el) => {
            if (!el) return;

            const inner = el.querySelector(".inner");

            const enter = () => {
                gsap.killTweensOf(inner); // ✅ important
                gsap.to(inner, {
                    y: "-50%",
                    scale: 1.2,              // 🔥 THIS gives the "bigger feel"
                    duration: 0.5,
                    ease: "expo.out",
                });
            };

            const leave = () => {
                gsap.killTweensOf(inner); // ✅ important
                gsap.to(inner, {
                    y: "0%",
                    scale: 1,
                    duration: 0.45,
                    ease: "expo.out",
                });
            };

            el.addEventListener("mouseenter", enter);
            el.addEventListener("mouseleave", leave);

            return () => {
                el.removeEventListener("mouseenter", enter);
                el.removeEventListener("mouseleave", leave);
            };
        });

        return () => cleanups.forEach((fn) => fn && fn());
    }, [open]);
    return (
        <div className='fixed w-full  z-40'>
            <div className='bg-white border-b border-primary'>
                <div className='flex justify-between items-center'>
                    <div className='flex items-center gap-10 pl-4'>
                        <Image src={ShortLogo} alt='logo' width={13} height={17} />
                        <Image src={Logo} alt='logo' width={80} height={24} />
                    </div>
                    <div ref={menuBtnRef}>
                        <ThemeButton
                            icon={ReturnArrow}
                            onButtonClick={toggleMenu}
                            style='!py-[1px] gap-16 !pl-12 text-4xl font-iceland'
                        >
                            Explore
                        </ThemeButton>
                    </div>
                </div>
            </div>

            <div
                ref={menuRef}
                className="max-w-fit mx-auto text-center bg-black overflow-hidden h-0"
            >
                {/* Title */}
                <div className='border-b border-[#ED1C24] py-3 mb-6'>
                    <Image src={'/toriqol-stroke.svg'} alt='logo' width={98} height={30} className='mx-auto' />
                </div>

                {/* Items */}
                <div className="tracking-widest text-[3.33vw] leading-none font-iceland px-10 h-[500px] overflow-y-auto">
                    {menuItems.map((item, i) => (
                        <div
                            key={i}
                            ref={(el) => {
                                if (el) itemsRef.current[i] = el;
                            }}
                            className="overflow-hidden cursor-pointer h-[1em]"
                        >
                            <div className="inner flex flex-col will-change-transform">

                                <p className="text-white">{item}</p>
                                <p className="text-white">{item}</p>

                            </div>
                        </div>
                    ))}
                </div>

                {/* Contact */}
                <div className="border-t border-[#ED1C24] mt-6 py-3">
                    <p className=" text-black text-[48px] font-bold [-webkit-text-stroke:1px_white] leading-none font-iceland">
                        CONTACT
                    </p>
                </div>
            </div>

        </div>
    )
}

export default Header
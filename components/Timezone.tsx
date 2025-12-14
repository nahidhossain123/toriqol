'use client'
import gsap from 'gsap';
import React, { useEffect, useState } from 'react'

const Timezone = () => {
    const [data, setDate] = useState(new Date)
    const timezoneRef = React.useRef<HTMLDivElement>(null);
    const options: Intl.DateTimeFormatOptions = {
        weekday: 'long',
        month: 'short',
        day: 'numeric',
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
        timeZone: 'Asia/Dhaka',
        timeZoneName: 'shortOffset'
    };
    const newDate: Date = new Date();
    const bstTime: string = new Intl.DateTimeFormat('en-US', options).format(newDate);
    console.log(bstTime);

    useEffect(() => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out", } });
        tl.from(timezoneRef.current,
            {
                xPercent: -100,
                opacity: 0,
                duration: 0.5,
                delay: 12,
            },);
    }, []);
    return (
        <div ref={timezoneRef} className='bg-primary w-fit text-white px-1 space-y-3'>
            <div>
                <span className='block text-center text-[10px] font-iceland'>LOCAL</span>
                <span className='block text-center text-[10px] font-iceland'>TIME</span>
            </div>
            <div>
                <span className='block text-center text-2xl font-iceland text-[18px] leading-[18px]'>AM</span>
                <span className='block text-center text-2xl font-iceland leading-6'>10</span>
                <span className='block text-center text-2xl font-iceland leading-6'>10</span>
            </div>
            <span className='block text-center text-[10px] font-iceland'>GMT 6+</span>
        </div>
    )
}

export default Timezone
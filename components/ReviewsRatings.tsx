import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import Review1 from './assets/review1.png'
import Review2 from './assets/review2.png'
import Review3 from './assets/review3.png'
import gsap from 'gsap'
import SectionHeaderH3 from './SectionHeaderH3'

const images = [
    "/asset_3.png",
    "/asset_4.png",
    "/asset_3.png",
    "/asset_3.png",
    "/asset_4.png",
    "/asset_3.png",
];

const AnimatedColumn = ({ direction = "up" }) => {
    const containerRef = useRef(null);
    const tweenRef = useRef(null);

    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;

        const height = el.scrollHeight / 2;

        const tween = gsap.fromTo(
            el,
            { y: direction === "up" ? 0 : -height },
            {
                y: direction === "up" ? -height : 0,
                duration: 20,
                ease: "none",
                repeat: -1,
            }
        );

        tweenRef.current = tween;

        return () => tween.kill();
    }, [direction]);

    return (
        <div
            className="h-[500px] overflow-hidden"
            onMouseEnter={() => {
                console.log('OnEnter')
                if (tweenRef.current) tweenRef.current.pause();
            }}
            onMouseLeave={() => {
                console.log('OnLeave')
                if (tweenRef.current) tweenRef.current.resume();
            }}
        >
            <div ref={containerRef}>
                {[...images, ...images].map((src, i) => (
                    <img
                        key={i}
                        src={src}
                        className="mb-4 w-full rounded-lg pointer-events-none"
                    />
                ))}
            </div>
        </div>
    );
};

const ReviewsRatings = () => {
    return (
        <div className='border-b border-primary relative mx-12'>
            <div className="grid grid-cols-3 gap-4">
                <AnimatedColumn direction="up" />
                <AnimatedColumn direction="down" />
                <AnimatedColumn direction="up" />
            </div>
            <SectionHeaderH3 text="RATINGS AND REVIEWS" className='z-40' />
            {/* <div className='flex justify-between px-12 relative'>
                <Image src={Review1} alt="Logo Gray" width={433} height={131} className="mt-10 ml-5" />
                <Image src={Review2} alt="Logo Gray" width={433} height={131} className="mt-10 ml-5" />
                <Image src={Review3} alt="Logo Gray" width={433} height={131} className="mt-10 ml-5" />
                <h3 className='absolute bottom-0 tracking-[0.55em] text-7xl leading-12 font-atomic'>RATINGS AND REVIEWS</h3>
            </div> */}
        </div>
    )
}

export default ReviewsRatings
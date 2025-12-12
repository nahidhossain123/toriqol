'use client'
import React, { useEffect, useRef } from 'react'
import { gsap } from "gsap";


const RollingDigits = () => {
    const unitRef = useRef(null);
    const decimalRef = useRef(null);
    const hundredRef = useRef(null);

    useEffect(() => {
        const animation = gsap.timeline({
            defaults: { ease: "power4.inOut" },
            repeat: -1,
            repeatDelay: 1,
            yoyo: true,
            paused: true
        });

        animation.to(unitRef.current, { y: "-=910%", duration: 2 });
        animation.to(decimalRef.current, { y: "-=910%", duration: 1.5 }, "<0.5");
        animation.to(hundredRef.current, { y: "-=100%", duration: 1.5 }, "<0.05");

        animation.play();
    }, []);
    return (
        <div className="flex text-white items-center justify-center overflow-hidden relative">
            {/* Outer wrapper controls cropping */}
            <div className='flex'>
                <div className="w-12 h-20 text-center relative overflow-hidden">
                    <div ref={hundredRef} className="absolute w-full h-full text-7xl font-extrabold translate-y-0">
                        0 1
                    </div>
                </div>
                <div className="w-12 h-20 text-center relative overflow-hidden">
                    <div ref={unitRef} className="absolute w-full h-full text-7xl font-extrabold translate-y-0">
                        0 1 2 3 4 5 6 7 8 9 0
                    </div>
                </div>
                <div className="w-12 h-20 text-center relative overflow-hidden">
                    <div ref={decimalRef} className="absolute w-full h-full text-7xl font-extrabold translate-y-0">
                        0 1 2 3 4 5 6 7 8 9 0
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RollingDigits

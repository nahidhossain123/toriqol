import { MarqueeTimelineType } from '@/types';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef } from 'react'

const MarqueeTimeline = ({ children, direction = -1 }: MarqueeTimelineType) => {
    const marqueeTrackRef = useRef<HTMLDivElement>(null);
    useGSAP(() => {
        const track = marqueeTrackRef.current;
        if (track) {
            const width = track.scrollWidth / 2;
            gsap.fromTo(
                track,
                { x: 0 },
                {
                    x: width * direction,
                    duration: 15,
                    repeat: -1,
                    ease: "none"
                }
            );
        }
    });
    return (
        <div ref={marqueeTrackRef} className='marquee-track flex gap-2'>
            {children}
        </div>
    )
}

export default MarqueeTimeline
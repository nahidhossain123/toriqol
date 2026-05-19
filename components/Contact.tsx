import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import Map from './assets/map.png'
import WhatsApp from './assets/whatsapp.svg'

const Contact = () => {
    const imgRef = useRef<HTMLImageElement | null>(null);
    const spanRefs = useRef<(HTMLSpanElement | null)[]>([]);

    const text = "Let’s create garments design together"

    useEffect(() => {
        if (!imgRef.current) return;
        const imgRect = imgRef.current?.getBoundingClientRect();
        if (!imgRect) return;

        spanRefs.current.forEach((span) => {
            if (!span) return;

            const rect = span.getBoundingClientRect();

            const overlap =
                !(rect.right < imgRect.left ||
                    rect.left > imgRect.right ||
                    rect.bottom < imgRect.top ||
                    rect.top > imgRect.bottom);

            span.style.color = overlap ? "white" : "black";
        });
    }, []);

    return (
        <div className='mx-12 relative my-10'>

            <h3 className='h-fit absolute top-0 bottom-0 left-0 right-0 m-auto text-center leading-12 text-[98px] font-iceland font-bold'>
                {text.split("").map((char, i) => (
                    <span
                        key={i}
                        ref={(el) => { spanRefs.current[i] = el }}
                    >{char}</span>
                ))}
            </h3>

            <div className='w-[80%] mx-auto space-y-10'>
                <div>
                    <Image
                        src={Map}
                        alt="map"
                        width={433}
                        height={131}
                        className="w-full h-auto"
                        ref={imgRef}
                    />
                    <div className='flex justify-between'>
                        <p className='text-2xl font-iceland'>info@toriqol.com	+88013 0333 0011</p>
                        <p className='text-2xl font-iceland'>470, Lane 08, Baridhara DOHS, Dhaka 1212, Bangladesh</p>
                    </div>
                </div>
                <button className='border-2  border-[#59BA4E] w-full flex justify-center p-2'>
                    <Image src={WhatsApp} alt="map" width={182} height={37} className="" />
                </button>
            </div>
        </div>
    )
}

export default Contact
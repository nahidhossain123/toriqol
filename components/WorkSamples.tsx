import { useRef, useState } from "react";
import gsap from "gsap";

const panels = [
    { title: 'AOP' },
    { title: 'ACCESSORIES' },
    { title: 'TECHPACK' },
    { title: '3D GARMENTS' },
    { title: '360° VIDEO' },
];

const WorkSamples = () => {
    const [active, setActive] = useState<number | null>(2);
    return (
        <div className="h-screen overflow-hidden border-b border-primary">
            <div className="relative h-full w-full flex px-12">
                {panels.map((item, index) => (
                    <div
                        key={index}
                        onMouseEnter={() => setActive(index)}
                        onMouseLeave={() => setActive(null)}
                        className={`
                                flex 
                                text-4xl cursor-pointer
                                transition-[flex-grow] duration-500 ease-out
                                ${active === index ? "grow-4" : "grow"}
                                border-r border-gray-700
                            `}
                    >
                        <div>
                            <div className="flex items-center gap-2">
                                <span className='w-3 h-3 inline-block bg-primary'></span>
                                <h4 className="text-2xl font-iceland">{item.title}</h4>
                            </div>
                        </div>
                    </div>
                ))}
                <h3 className='absolute bottom-0 tracking-[0.55em] text-7xl leading-12 font-atomic'>WORK SAMPLES</h3>
            </div>
        </div>
    )
}

export default WorkSamples
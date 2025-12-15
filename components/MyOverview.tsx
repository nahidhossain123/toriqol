import React from 'react'
import MarqueeTimeline from './MarqueeTimeline';
import MarqueeLogo from './assets/logo-marquee.svg';
import Image from 'next/image';

const MyOverview = () => {
    return (
        <div className='relative h-[80vh]'>
            <div className='absolute w-full bg-black overflow-hidden flex py-2 z-30'>
                <MarqueeTimeline>
                    <Image src={MarqueeLogo} alt="Logo Gray" width={116} height={24} />
                    <Image src={MarqueeLogo} alt="Logo Gray" width={116} height={24} />
                    <Image src={MarqueeLogo} alt="Logo Gray" width={116} height={24} />
                    <Image src={MarqueeLogo} alt="Logo Gray" width={116} height={24} />
                    <Image src={MarqueeLogo} alt="Logo Gray" width={116} height={24} />
                    <Image src={MarqueeLogo} alt="Logo Gray" width={116} height={24} />
                    <Image src={MarqueeLogo} alt="Logo Gray" width={116} height={24} />
                    <Image src={MarqueeLogo} alt="Logo Gray" width={116} height={24} />
                    <Image src={MarqueeLogo} alt="Logo Gray" width={116} height={24} />
                    <Image src={MarqueeLogo} alt="Logo Gray" width={116} height={24} />
                    <Image src={MarqueeLogo} alt="Logo Gray" width={116} height={24} />
                    <Image src={MarqueeLogo} alt="Logo Gray" width={116} height={24} />
                    <Image src={MarqueeLogo} alt="Logo Gray" width={116} height={24} />
                    <Image src={MarqueeLogo} alt="Logo Gray" width={116} height={24} />
                    <Image src={MarqueeLogo} alt="Logo Gray" width={116} height={24} />
                    <Image src={MarqueeLogo} alt="Logo Gray" width={116} height={24} />
                    <Image src={MarqueeLogo} alt="Logo Gray" width={116} height={24} />
                    <Image src={MarqueeLogo} alt="Logo Gray" width={116} height={24} />
                    <Image src={MarqueeLogo} alt="Logo Gray" width={116} height={24} />
                    <Image src={MarqueeLogo} alt="Logo Gray" width={116} height={24} />
                    <Image src={MarqueeLogo} alt="Logo Gray" width={116} height={24} />
                    <Image src={MarqueeLogo} alt="Logo Gray" width={116} height={24} />
                    <Image src={MarqueeLogo} alt="Logo Gray" width={116} height={24} />
                    <Image src={MarqueeLogo} alt="Logo Gray" width={116} height={24} />
                    <Image src={MarqueeLogo} alt="Logo Gray" width={116} height={24} />
                    <Image src={MarqueeLogo} alt="Logo Gray" width={116} height={24} />
                    <Image src={MarqueeLogo} alt="Logo Gray" width={116} height={24} />
                    <Image src={MarqueeLogo} alt="Logo Gray" width={116} height={24} />

                </MarqueeTimeline>
            </div>
            <div className="grid grid-cols-[1fr_2fr_3fr_2fr] grid-rows-[1fr_4fr] h-full w-full gap-6 p-4 px-12">
                <div className={` bg-[#E6E7E8]`}>

                </div>
                {/* Row 1, Column 2 */}
                <div className={` bg-[#D1D3D4]`}>

                </div>
                {/* Row 1, Column 3 */}
                <div className={` bg-[#E6E7E8]`}>

                </div>
                {/* Row 1, Column 4 */}
                <div className={` bg-[#D1D3D4]`}>

                </div>

                {/* Row 2, Column 1 */}
                <div className={` bg-[#E6E7E8] relative`}>
                    <h3 className='absolute bottom-0 font-bold text-primary font-atomic text-[64px]'>
                        DE
                        V.
                    </h3>
                </div>
                {/* Row 2, Column 2 */}
                <div className={` bg-[#D1D3D4] relative`}>
                    <h3 className='absolute bottom-0 font-bold text-primary font-atomic text-[64px]'>
                        PRO
                        JECTS
                    </h3>
                </div>
                {/* Row 2, Column 3 */}
                <div className={` bg-[#E6E7E8] relative`}>
                    <h3 className='absolute bottom-0 font-bold text-primary font-atomic text-[64px]'>
                        PROFESSIONAL
                        PORTFOLIO
                    </h3>
                </div>
                {/* Row 2, Column 4 */}
                <div className={` bg-[#D1D3D4] relative`}>
                    <h3 className='absolute bottom-0 font-bold text-primary font-atomic text-[64px]'>
                        ACADEMIC
                        PORTFOLIO
                    </h3>
                </div>
            </div>
            <div className='absolute w-full bg-black overflow-hidden flex py-2 z-30'>
                <MarqueeTimeline direction={1}>
                    <Image src={MarqueeLogo} alt="Logo Gray" width={116} height={24} />
                    <Image src={MarqueeLogo} alt="Logo Gray" width={116} height={24} />
                    <Image src={MarqueeLogo} alt="Logo Gray" width={116} height={24} />
                    <Image src={MarqueeLogo} alt="Logo Gray" width={116} height={24} />
                    <Image src={MarqueeLogo} alt="Logo Gray" width={116} height={24} />
                    <Image src={MarqueeLogo} alt="Logo Gray" width={116} height={24} />
                    <Image src={MarqueeLogo} alt="Logo Gray" width={116} height={24} />
                    <Image src={MarqueeLogo} alt="Logo Gray" width={116} height={24} />
                    <Image src={MarqueeLogo} alt="Logo Gray" width={116} height={24} />
                    <Image src={MarqueeLogo} alt="Logo Gray" width={116} height={24} />
                    <Image src={MarqueeLogo} alt="Logo Gray" width={116} height={24} />
                    <Image src={MarqueeLogo} alt="Logo Gray" width={116} height={24} />
                    <Image src={MarqueeLogo} alt="Logo Gray" width={116} height={24} />
                    <Image src={MarqueeLogo} alt="Logo Gray" width={116} height={24} />
                    <Image src={MarqueeLogo} alt="Logo Gray" width={116} height={24} />

                </MarqueeTimeline>
            </div>
        </div>
    )
}

export default MyOverview
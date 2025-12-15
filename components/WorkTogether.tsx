import React from 'react'
import DotShapes from './assets/dot-shapes.svg';
import Behance from './assets/behance-icon.svg';
import Dribbble from './assets/dribbble-icon.svg';
import Linkedin from './assets/linkedin-icon.svg';
import UpWork from './assets/upwork-icon.svg';
import Fiverr from './assets/fiver-icon.svg';
import Email from './assets/email-icon.svg';
import WhatsApp from './assets/whatsapp-icon.svg';

import Image from 'next/image';

const WorkTogether = () => {
    return (
        <section className='h-screen mx-12'>
            <div className='relative my-20'>
                <Image src={DotShapes} alt="dot-shape" width={433} height={131} className="w-full h-full" />
                <h3 className='absolute top-0 bottom-0 m-auto text-[138px] font-iceland font-bold'>Let’s work together.</h3>
            </div>
            <div className='flex w-full'>
                <div className='flex-1 border h-[183px] flex flex-col justify-between p-5'>
                    <Image src={Fiverr} alt="Behance" width={24} height={24} />
                    <h4 className='text-[19px] font-iceland'>Fiverr</h4>
                </div>
                <div className='flex-1 border h-[183px] flex flex-col justify-between p-5'>
                    <Image src={UpWork} alt="Behance" width={24} height={24} />
                    <h4 className='text-[19px] font-iceland'>UpWork</h4>
                </div>
                <div className='flex-1 border h-[183px] flex flex-col justify-between p-5'>
                    <Image src={Email} alt="Behance" width={24} height={24} />
                    <h4 className='text-[19px] font-iceland'>info@toriqol.com</h4>
                </div>
                <div className='flex-1 border h-[183px] flex flex-col justify-between p-5'>
                    <Image src={WhatsApp} alt="Behance" width={24} height={24} />
                    <h4 className='text-[19px] font-iceland'>Whatsapp</h4>
                </div>
                <div className='flex-1 border h-[183px] flex flex-col justify-between p-5'>
                    <Image src={Linkedin} alt="Behance" width={24} height={24} />
                    <h4 className='text-[19px] font-iceland'>LinkedIn</h4>
                </div>
                <div className='flex-1 border h-[183px] flex flex-col justify-between p-5'>
                    <Image src={Behance} alt="Behance" width={24} height={24} />
                    <h4 className='text-[19px] font-iceland'>Behance</h4>
                </div>
            </div>
        </section>
    )
}

export default WorkTogether
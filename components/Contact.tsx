import Image from 'next/image'
import React from 'react'
import Map from './assets/map.png'
import WhatsApp from './assets/whatsapp.svg'

const Contact = () => {
    return (
        <div className='mx-12 relative my-10'>

            <h3 className='h-fit absolute top-0 bottom-0 left-0 right-0 m-auto text-center leading-12 text-[98px] font-iceland font-bold'>Let’s <span className='text-white'>create garments design tog</span>ether</h3>

            <div className='w-[80%] mx-auto space-y-10'>
                <div>
                    <Image src={Map} alt="map" width={433} height={131} className="w-full h-auto" />
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
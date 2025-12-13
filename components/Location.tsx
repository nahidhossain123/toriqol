import Image from 'next/image'
import React from 'react'
import ShortLogoWhite from './assets/short-logo-white.svg'

const Location = () => {
    return (
        <div className='flex border-2 border-black'>
            <div className='bg-black w-8 flex justify-center items-center'>
                <Image src={ShortLogoWhite} alt='logo' width={13} height={17} />
            </div>
            <p className='font-iceland text-[28px] leading-7'>Located in the Bangladesh</p>
        </div>
    )
}

export default Location
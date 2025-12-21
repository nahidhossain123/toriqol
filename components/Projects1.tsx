import React from 'react'
import SheinxLogo from './assets/sheinx-logo.svg';
import Image from 'next/image';
const Projects1 = () => {
    return (
        <div className='mx-12'>
            <h4 className='tracking-[0.35em] text-6xl text-white border-2 [-webkit-text-stroke:1px_black] leading-10 font-atomic'>PROJECTS</h4>
            <div className='flex justify-center'>
                <Image src={SheinxLogo} alt="Logo Gray" width={325} height={40} />
            </div>
            <div className='my-20 space-y-5'>
                <div className='flex justify-between'>
                    <div className='h-96 w-full border p-5'>
                        <div className='bg-gray-100 h-full w-full'></div>
                    </div>
                    <div className='h-96 w-full border p-5'>
                        <div className='bg-gray-100 h-full w-full'></div>
                    </div>
                    <div className='h-96 w-full border p-5'>
                        <div className='bg-gray-100 h-full w-full'></div>
                    </div>
                    <div className='h-96 w-full border p-5'>
                        <div className='bg-gray-100 h-full w-full'></div>
                    </div>
                    <div className='h-96 w-full border p-5'>
                        <div className='bg-gray-100 h-full w-full'></div>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <a href="https://us.shein.com/designer/2566" className="underline text-center w-full">https://us.shein.com/designer/2566</a>
                </div>
            </div>
            <div className='h-20 bg-gray-200 mx-5'>
                <h5>Tittle</h5>
            </div>
        </div>
    )
}

export default Projects1
import React from 'react'
import SheinxLogo from './assets/sheinx-logo.svg';
import Image from 'next/image';
const Projects2 = () => {
    return (
        <div className='border-t border-primary'>
            <div className='mx-12 px-5'>
                <h4 className='tracking-[0.35em] text-6xl text-white border-2 [-webkit-text-stroke:1px_black] leading-10 font-atomic'>PROJECTS</h4>
                <div className='space-y-5'>
                    <div className='h-20 bg-gray-200'>
                        <h5>Tittle</h5>
                        <p>text</p>
                    </div>
                    <div className='flex justify-between h-[322px] bg-gray-200'>

                    </div>
                    <div className='flex justify-center'>
                        <a href="https://seraitrade.com" className="underline text-center w-full">https://seraitrade.com</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects2
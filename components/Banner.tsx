import React from 'react'

const Banner = () => {
    return (
        <div className='grid grid-rows-4 min-h-screen gap-4 w-full'>
            <div className='border-b'>
                <div className='px-20 h-full flex items-end'>
                    <h2 className='text-9xl leading-22 -ml-3'>FREELANCE</h2>
                </div>
            </div>
            <div className='border-b'>
                <div className='px-20 h-full flex justify-between items-end'>
                    <h2 className='text-9xl leading-22 -ml-3'>FASHION</h2>
                    <div className='-mr-2 space-y-2'>
                        <span className='inline-block font-bold'>2015 to</span>
                        <h2 className='text-9xl leading-22'>2026</h2>
                    </div>
                </div>
            </div>
            <div className='border-b'>
                <div className='px-20 h-full flex justify-end items-end'>
                    <h2 className='text-9xl leading-22 -mr-2'>DESIGNER</h2>
                </div>
            </div>
            <div className='border-b'>
                <div className='px-20'>
                </div>
            </div>
        </div>
    )
}

export default Banner
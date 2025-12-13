import React from 'react'

const Banner = () => {
    return (
        <div className='grid grid-rows-4 min-h-screen gap-4 w-full pt-10'>
            <div className='border-b border-primary'>
                <div className='px-12 h-full flex items-end'>
                    <div className='w-full flex justify-between'>
                        <h2 className='text-9xl leading-22 font-atomic text-primary'>FREELANCE</h2>
                        <div className='flex gap-3'>
                            <ul className='font-iceland text-sm leading-3'>
                                <li>
                                    SEAMLESS
                                </li>
                                <li>
                                    PATTERN
                                </li>
                                <li>
                                    DESIGNER
                                </li>
                            </ul>
                            <span className='w-3 h-3 inline-block bg-primary'></span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='border-b border-primary'>
                <div className='px-12 h-full flex justify-between items-end text-primary'>
                    <h2 className='text-9xl leading-22 font-atomic'>FASHION</h2>
                    <div className='-mr-2 space-y-2'>
                        <span className='inline-block font-bold font-atomic'>2015 to</span>
                        <h2 className='text-9xl leading-22 font-atomic'>2026</h2>
                    </div>
                </div>
            </div>
            <div className='border-b border-primary'>
                <div className='px-12 h-full flex justify-between items-end'>
                    <div className='flex justify-between w-full'>
                        <div className='flex justify-between flex-1 max-w-[300px]'>
                            <div className='flex gap-3'>
                                <span className='w-3 h-3 inline-block bg-primary'></span>
                                <ul className='font-iceland text-sm leading-3'>
                                    <li>
                                        APPAREL
                                    </li>
                                    <li>
                                        TECHPACK
                                    </li>
                                    <li>
                                        DESIGNER
                                    </li>
                                </ul>
                            </div>
                            <div className='flex gap-3'>
                                <span className='w-3 h-3 inline-block bg-primary'></span>
                                <ul className='font-iceland text-sm leading-3'>
                                    <li>
                                        3D
                                    </li>
                                    <li>
                                        GARMENT
                                    </li>
                                    <li>
                                        DESIGNER
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <h2 className='text-9xl leading-22 font-atomic text-primary'>DESIGNER</h2>
                    </div>
                </div>
            </div>
            <div className='border-b border-primary'>
                <div className='px-12'>

                </div>
            </div>
        </div>
    )
}

export default Banner
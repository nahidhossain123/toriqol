import React from 'react'

const Download = () => {
    return (
        <div className=' mx-12'>
            <div className='mt-20 mx-auto h-full space-y-20'>
                <div className='space-y-7'>
                    <div className='h-[1122px] space-y-5 flex justify-center gap-3'>
                        <div className=' flex-1'></div>
                        <div className='bg-[#E6E7E8] w-[55%] h-full'></div>
                        <div className='space-y-5 flex flex-col justify-center items-center flex-1'>
                            <div className='w-[165px] h-[235px] bg-[#E6E7E8]'></div>
                            <div className='w-[165px] h-[235px] bg-[#E6E7E8]'></div>
                            <div className='w-[165px] h-[235px] bg-[#E6E7E8]'></div>
                        </div>
                        {/* <div className='bg-[#E6E7E8]'></div>
                <div className='bg-[#E6E7E8]'></div> */}
                    </div>
                    <div className='flex justify-center'>
                        <div className='flex gap-3'>
                            <span className='w-3 h-3 rounded-full inline-block bg-black'></span>
                            <span className='w-3 h-3 rounded-full inline-block bg-black'></span>
                            <span className='w-3 h-3 rounded-full inline-block bg-black'></span>
                        </div>
                    </div>
                </div>

                <button className='w-[55%] mx-auto border-2 border-black text-5xl font-iceland text-white [-webkit-text-stroke:1px_black] flex justify-center p-2'>
                    DOWNLOAD
                </button>
            </div>
        </div>
    )
}

export default Download
import React from 'react'

const Download = () => {
    return (
        <div className='h-screen mx-12'>
            <div className='flex flex-col gap-20 mt-20 w-[60%] mx-auto h-full'>
                <div className='flex-1 space-y-5'>
                    <div className='bg-[#E6E7E8] h-full'></div>
                    {/* <div className='bg-[#E6E7E8]'></div>
                <div className='bg-[#E6E7E8]'></div> */}
                    <div className='flex justify-center'>
                        <div className='flex gap-3'>
                            <span className='w-3 h-3 rounded-full inline-block bg-black'></span>
                            <span className='w-3 h-3 rounded-full inline-block bg-black'></span>
                            <span className='w-3 h-3 rounded-full inline-block bg-black'></span>
                        </div>
                    </div>
                </div>

                <button className='border-2 border-black text-5xl font-iceland text-white [-webkit-text-stroke:1px_black] w-full flex justify-center p-2'>
                    DOWNLOAD
                </button>
            </div>
        </div>
    )
}

export default Download
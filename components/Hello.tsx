import React from 'react'
import RollingDigits from './RollingDigits'

const Hello = () => {
    return (
        <div className='h-screen w-screen bg-black flex justify-center items-center relative'>
            <div className='flex items-center gap-2'>
                <span className='inline-block w-2 h-2 bg-white rounded-full'></span>
                <h1 className='text-4xl text-white font-iceland'>
                    Hello
                </h1>
            </div>
            <div className='absolute right-20 bottom-20'>
                <RollingDigits />
            </div>
        </div>
    )
}

export default Hello
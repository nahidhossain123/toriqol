import React from 'react'

const PhotoGallery = () => {
    return (
        <div className='mx-12 my-40'>
            <div className='flex gap-0.5 h-[404px] w-[70%] mx-auto'>
                <div className='flex-1 h-full w-full outline-2'></div>
                <div className='flex-3 h-full w-full outline-2 -mt-10'></div>
                <div className='flex-1 h-full w-full outline-2'></div>
            </div>
            <div className='flex gap-16 h-[500px] w-[42%] mx-auto'>
                <div className='h-full w-full outline-2'></div>
                <div className='h-full w-full outline-2 mt-10'></div>
                <div className='h-full w-full outline-2 -mt-10'></div>
            </div>
            <div className='flex gap-0.5 w-[66%] mx-auto'>
                <div className='flex-2 h-[282px] w-full outline-2'></div>
                <div className='flex-[1.3_1_0] h-[400px] w-full outline-2 mt-10'></div>
                <div className='flex-2 h-[282px] w-full outline-2 mt-70'></div>
            </div>
            <div className='h-[382px] w-[23.3%] ml-[34.7%] outline-2' />
            <div className='flex gap-0.5 h-[304px] w-[70%] mx-auto'>
                <div className='flex-[1.45_1_0] h-full w-full outline-2'></div>
                <div className='flex-[1.7_1_0] h-full w-full flex justify-end '>
                    <div className=' h-full w-[60%] outline-2 mt-20'></div>
                </div>
                <div className='flex-1 h-full w-full outline-2'></div>
                <div className='flex-1 h-full w-full outline-2 mt-40'></div>
            </div>
        </div>
    )
}

export default PhotoGallery
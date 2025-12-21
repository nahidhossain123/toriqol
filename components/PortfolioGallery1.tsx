import React from 'react'

const PortfolioGallery1 = () => {
    return (
        <section className=' relative h-screen my-20'>
            <h3 className='absolute top-0 tracking-[0.55em] text-8xl  font-atomic'><span className='text-primary'>Gold</span><span className='text-white'>en Grain</span></h3>
            <div className='grid grid-cols-4 grid-rows-[2fr_1fr] gap-4 h-full'>
                <div className='bg-gray-500 row-span-2 mt-28 mb-16'></div>
                <div className='bg-gray-300 col-span-2 flex items-end p-10'>
                    <div className='font-iceland text-2xl'>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
                        </p>
                        <p>Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonum</p>
                    </div>
                </div>
                <div className='bg-gray-500'></div>
                <div className='bg-gray-200'></div>
                <div className='bg-gray-400'></div>
                <div className='bg-gray-600'></div>
            </div>
            <h3 className='absolute bottom-0 tracking-[0.35em] text-[66px] text-white [-webkit-text-stroke:1px_black] leading-12 font-atomic'>CERTIFICATES & ACHIEVEMENTS</h3>
        </section>
    )
}

export default PortfolioGallery1
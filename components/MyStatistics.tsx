import React from 'react'

const MyStatistics = () => {
    return (
        <div className='mx-12'>
            <h4 className='tracking-[0.35em] text-6xl text-white border-2 [-webkit-text-stroke:1px_black] leading-10 font-atomic'>WORK SPEAKS THROUGH NUMBERS</h4>
            <div className='flex justify-between my-20'>
                <div className='flex flex-col justify-center items-center space-y-5'>
                    <h4 className='text-6xl font-bold font-atomic'>3400+</h4>
                    <div>
                        <h5 className='text-2xl font-iceland'>Apparel Designs</h5>
                        <p className='max-w-[300px] text-sm'>
                            All realistic 3D garment designs,
                            Hi-resolution image &
                            impressive render quality.
                        </p>
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center space-y-5'>
                    <h4 className='text-6xl font-bold font-atomic'>160+</h4>
                    <div>
                        <h5 className='text-2xl font-iceland'>Clients Served</h5>
                        <p className='max-w-[300px] text-sm'>
                            From start to present -
                            each treated as like only one.
                        </p>
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center space-y-5'>
                    <h4 className='text-6xl font-bold font-atomic'>100%</h4>
                    <div>
                        <h5 className='text-2xl font-iceland'>Success Score</h5>
                        <p className='max-w-[300px] text-sm'>
                            All realistic 3D garment designs,
                            Hi-resolution image &
                            impressive render quality.
                        </p>
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center space-y-5'>
                    <h4 className='text-6xl font-bold font-atomic'>7+</h4>
                    <div>
                        <h5 className='text-2xl font-iceland'>Years of Expertise</h5>
                        <p className='max-w-[300px] text-sm'>
                            All realistic 3D garment designs,
                            Hi-resolution image &
                            impressive render quality.
                        </p>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-7 ">
                {[...Array(21)].map((_, i) => (
                    <div key={i} className="aspect-square border" />
                ))}
            </div>

        </div>
    )
}

export default MyStatistics
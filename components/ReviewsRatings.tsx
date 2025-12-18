import Image from 'next/image'
import React from 'react'
import Review1 from './assets/review1.png'
import Review2 from './assets/review2.png'
import Review3 from './assets/review3.png'

const ReviewsRatings = () => {
    return (
        <div className='border-b border-primary'>
            <div className='flex justify-between px-12 relative'>
                <Image src={Review1} alt="Logo Gray" width={433} height={131} className="mt-10 ml-5" />
                <Image src={Review2} alt="Logo Gray" width={433} height={131} className="mt-10 ml-5" />
                <Image src={Review3} alt="Logo Gray" width={433} height={131} className="mt-10 ml-5" />
                <h3 className='absolute bottom-0 tracking-[0.55em] text-7xl leading-12 font-atomic'>RATINGS AND REVIEWS</h3>
            </div>
        </div>
    )
}

export default ReviewsRatings
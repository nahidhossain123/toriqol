import React from 'react'
import PortfolioGallery1 from './PortfolioGallery1'
import PortfolioGallery2 from './PortfolioGallery2'
import PortfolioGallery3 from './PortfolioGallery3'

const Portfolio = () => {
    return (
        <section className='mx-12'>
            <div className='h-screen flex justify-center items-center bg-[#F1F2F2]'>
                <h2 className='text-[244px] text-white font-atomic'>PORTFOLIO</h2>
            </div>
            <PortfolioGallery1 />
            <PortfolioGallery2 />
            <PortfolioGallery3 />
        </section>
    )
}

export default Portfolio
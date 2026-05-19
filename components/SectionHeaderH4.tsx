import React from 'react'

interface SectionHeaderProps {
    text: string;
    className?: string;
}

const SectionHeaderH4 = ({ text, className }: SectionHeaderProps) => {
    return (
        <h4 className={`tracking-[0.35em] text-6xl text-white border-2 [-webkit-text-stroke:1px_black] leading-10 font-atomic ${className || ''}`}>{text}</h4>
    )
}

export default SectionHeaderH4
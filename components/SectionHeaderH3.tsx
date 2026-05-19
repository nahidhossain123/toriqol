import React from 'react'

interface SectionHeaderProps {
    text: string;
    className?: string;
}

const SectionHeaderH3 = ({ text, className }: SectionHeaderProps) => {
    return (
        <h3 className={`absolute bottom-0 tracking-[0.55em] text-7xl leading-12 font-atomic ${className || ''}`}>{text}</h3>
    )
}

export default SectionHeaderH3
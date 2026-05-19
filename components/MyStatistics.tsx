import React from 'react'
const stats = [
    {
        id: 1,
        value: "3400+",
        title: "Apparel Designs",
        description: `All realistic 3D garment designs,
Hi-resolution image & impressive render quality.`,
    },
    {
        id: 2,
        value: "160+",
        title: "Clients Served",
        description: `From start to present -
each treated as like only one.`,
    },
    {
        id: 3,
        value: "100%",
        title: "Success Score",
        description: `All realistic 3D garment designs,
Hi-resolution image & impressive render quality.`,
    },
    {
        id: 4,
        value: "7+",
        title: "Years of Expertise",
        description: `All realistic 3D garment designs,
Hi-resolution image & impressive render quality.`,
    },
];
const MyStatistics = () => {
    return (
        <div className='mx-12'>
            <h4 className='tracking-[0.35em] text-6xl text-white border-2 [-webkit-text-stroke:1px_black] leading-10 font-atomic'>WORK SPEAKS THROUGH NUMBERS</h4>
            <div className='flex justify-between my-20 px-2'>
                {stats.map((item) => (
                    <div
                        key={item.id}
                        className="space-y-5"
                    >
                        <h4 className="text-6xl font-bold font-atomic border-b-4">
                            {item.value}
                        </h4>
                        <div>
                            <h5 className="text-2xl font-iceland">
                                {item.title}
                            </h5>
                            <p className="max-w-[300px] text-sm whitespace-pre-line">
                                {item.description}
                            </p>
                        </div>
                    </div>
                ))}
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
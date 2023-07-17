import React from 'react'
import { useState } from 'react'


const Accordion = ({ items, slColor }) => {
    const [showDetail, setShowDetail] = useState(null)
    const expandHandler = (index) => {
        console.log(slColor)
        if (showDetail === index) setShowDetail(null)
        else setShowDetail(index)
    }
    // const handleColor = () => {
    //     return `${title === 'weightlossfaq' && 'text-[#6CB4A8] text-xl md:text-2xl'}`;
    // }
    return (
        <div className="max-w-7xl mx-auto p-2 font-semibold">
            {items && items.map((item, index) => (
                <div key={index} className="flex flex-col gap-3 bg-white rounded-md my-2 md:my-5 shadow-[0px_0px_15px_0px_rgba(0,0,0,0.1)] text-[#666666]">
                    <div onClick={() => expandHandler(index)} className={`px-6 py-2 flex gap-1 justify-between cursor-pointer`}>
                        <p className='w-[95%] font-bold text-lg md:text-xl'><span className={`text-xl md:text-2xl`} style={{
                            color: slColor
                        }}>{item.serial + '. '}</span>{item.title}</p>
                        <p className='w-[2%] text-2xl text-yellow-700'>{showDetail !== index ? '+' : '-'}</p>
                    </div>
                    <p className={`${showDetail === index ? 'visible' : 'hidden'} text-sm px-3 md:px-6 pb-4`}>{item.desc}</p>
                </div>
            ))}
        </div>
    )
}

export default Accordion
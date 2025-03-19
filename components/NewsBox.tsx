import Image from 'next/image'
import React from 'react'
import { ImPriceTag } from 'react-icons/im'
import Watermark from '../public/logo.png'

type Props = {
    data: any;
}

function NewsBox({ data }: Props) {
  return (
    <div className="mb-32 relative min-h-72 ">
        <Image src={data.image} alt="" className="object-cover object-left-top" fill/> 
        <div className="relative top-3 -left-20 h-8 opacity-30">
             <Image src={Watermark} alt="" className="object-contain" fill />
        </div>
        
        <div className="px-4 py-2 w-full rounded-lg absolute left-0 top-44 flex flex-col space-y-4 bg-white/90 shadow">
            <div className="py-1 flex items-center space-x-2">
                <ImPriceTag className="w-3 h-3" />
                <span className="text-sm font-medium line-clamp-3">{data.category}</span>
            </div>
            <h1 className="text-base md:text-base font-black leading-[20px] text-[#0E1A62] uppercase">{data.title}</h1>
            <p className="text-base font-medium line-clamp-4">{data.excerpt}</p>
            <div className="pb-4 text-xs font-bold">by {data.author} | {data.date}</div>
        </div> 
    </div>
  )
}

export default NewsBox
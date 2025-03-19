import React from 'react'
import { MdEmail, MdPlayArrow } from 'react-icons/md'


type Props = {}

function FooterSideMid({}: Props) {
  return (
    <div className="pb-10 sm:pb-0 sm:px-10 sm:min-h-48 sm:min-w-[27rem] flex flex-col justify-start space-y-6 border-b-4 sm:border-b-0 sm:border-r-4 border-dashed border-white">
        <div className="flex flex-col justify-start space-y-3 sm:space-y-6">
            <div className="flex items-center space-x-1 ">
                <span className="text-lg font-bold underline">Our Vision and Values</span>
                <MdPlayArrow className="h-6 w-6"/>
            </div>
            <div className="flex items-center space-x-1 ">
                <span className="text-lg font-bold underline">Discover Our Category of Services</span>
                <MdPlayArrow className="h-6 w-6"/>
            </div>
            <div className="flex items-center space-x-1 ">
                <span className="text-lg font-bold underline">Browse Through Our Products </span>
                <MdPlayArrow className="h-6 w-6"/>
            </div>
            <div className="flex items-center space-x-1 ">
                <span className="text-lg font-bold underline">Contact Us</span>
                <MdPlayArrow className="h-6 w-6"/>
            </div>
        </div>
        <div className="px-6 py-3 w-56 bg-[#EE3E02] flex items-center justify-center space-x-2">
            <span className="text-white text-lg font-bold tracking-wider">Service Request</span>
            <MdPlayArrow className="h-5 w-5 text-white"/>
        </div>
    </div>
  )
}

export default FooterSideMid
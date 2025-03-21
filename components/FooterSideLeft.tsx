import React from 'react'
import { MdEmail } from 'react-icons/md'
import { FaFacebookF, FaInstagram, FaPhone, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Link from 'next/link';

type Props = {}

function FooterSideLeft({}: Props) {
  return (
    <div className="pb-10 sm:pb-0 sm:pr-3 sm:min-h-48 sm:min-w-[23rem] flex flex-col space-y-6 sm:space-y-6 sm:border-r-4 border-b-4 sm:border-b-0 border-dashed border-white">
        <div className="space-y-3">
            <h1 className="text-xl sm:text-[1.7rem] leading-5 sm:leading-8 font-black text-primary md:text-black text-justify">Nursing and Midwifery Training College - Esiama.</h1>
            <p className="text-base sm:text-lg leading-5 sm:leading-8 font-black">P.O.Box 7, Esiama W/R, Ghana, West Africa.     </p>
        </div>
        <div className="flex items-center justify-start space-x-4">
            <div className="p-3 h-fit w-fit bg-primary rounded-full">
                <FaInstagram className="h-4 w-4 sm:h-6 sm:w-6 text-white"/>
            </div>
            <div className="p-3 h-fit w-fit bg-primary rounded-full">
                <FaFacebookF className="h-4 w-4 sm:h-6 sm:w-6 text-white"/>
            </div>
            <div className="p-3 h-fit w-fit bg-primary rounded-full">
                <FaXTwitter className="h-4 w-4 sm:h-6 sm:w-6 text-white"/>
            </div>
            <div className="p-3 h-fit w-fit bg-primary rounded-full">
                <FaYoutube className="h-4 w-4 sm:h-6 sm:w-6 text-white"/>
            </div>
        </div>
        <div className="flex flex-col space-y-3">
            <Link href="mailto:chntsesiama@gmail.com" className="flex items-center space-x-2">
                <MdEmail className="h-4 w-4 sm:h-6 sm:w-6" />
                <span className="underline">chntsesiama@gmail.com</span>
            </Link>
            <Link href="tel:0312092320" className="flex items-center space-x-3">
                <FaPhone className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="underline">(031) 2092320</span>
            </Link>
        </div>
    </div>
  )
}

export default FooterSideLeft
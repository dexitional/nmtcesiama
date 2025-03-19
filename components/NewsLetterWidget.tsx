import React from 'react'
import { MdDoubleArrow } from 'react-icons/md'

type Props = {}

function NewsLetterWidget({}: Props) {
  return (
    <div className="w-full bg-[#0E1A62]">
        <form action="" method="post" className="px-4 py-10 md:py-20 md:mx-auto md:max-w-6xl flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 font-sans">
            <h1 className="w-48 text-5xl font-bold text-white">JOIN US</h1>
            <div className="flex flex-col space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="flex flex-col space-y-1">
                        <label htmlFor="" className="text-white text-base tracking-wide">First Name (required)</label>
                        <input type="text" className="px-6 py-3" name="" placeholder="" />
                    </div>
                    <div className="flex flex-col space-y-1">
                        <label htmlFor="" className="text-white text-base tracking-wide">Last Name (required)</label>
                        <input type="text" className="px-6 py-3" name="" placeholder="" />
                    </div>
                    <div className="flex flex-col space-y-1">
                        <label htmlFor="" className="text-white text-base tracking-wide">Email (required)</label>
                        <input type="text" className="px-6 py-3" name="" placeholder="" />
                    </div>
                    <div className="flex items-end ">
                        <button className="px-6 py-3 w-44 bg-[#EE3E02] cursor-pointer text-white flex items-center space-x-2 justify-center">
                            <span className="font-bold text-lg">SIGN UP</span>
                            <MdDoubleArrow className="h-7 w-7" />
                        </button>
                    </div>
                    
                </div>
                <label className="flex items-center space-x-3 text-base text-white">
                    <input type="checkbox" name="" className="h-5 w-5"/>
                    <span>I would like to receive email updates from AnnanD Enterprise. I understand I can unsubscribe at any time.</span>
                </label>
            </div>
        </form>
    </div>
  )
}

export default NewsLetterWidget
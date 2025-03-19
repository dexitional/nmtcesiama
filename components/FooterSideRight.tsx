import React from 'react'
import LogoFoot from './LogoFoot'

type Props = {}

function FooterSideRight({}: Props) {
  return (
    <div className="sm:px-10 sm:min-h-48 sm:min-w-[25rem]">
        <div className="flex flex-col md:space-y-10 ">
            <LogoFoot />
            <p className="text-primary font-bold">We train middle-level nurses and midwives to strengthen Ghana’s healthcare workforce, improving and maintaining health for all, both locally and beyond.</p>
        </div>
        <div></div>
    </div>
  )
}

export default FooterSideRight
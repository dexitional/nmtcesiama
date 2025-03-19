import React from 'react'

type Props = {}

function MapSection({}: Props) {
  return (
    <section className="w-full flex flex-col justify-center bg-white border-t-[12px] ">
        <iframe 
           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1017591.2605367439!2d-3.5861699218749936!3d4.945327600000018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfe7fb90ca128ef1%3A0xdc23d1036c4532da!2sESIAMA%20NURSING%20AND%20MIDWIFERY%20COLLEGE!5e0!3m2!1sen!2sgh!4v1742392772124!5m2!1sen!2sgh" 
           className="w-full h-64 md:h-96 border-0" 
           allowFullScreen 
           loading="lazy" 
           referrerPolicy="no-referrer-when-downgrade">
        </iframe>
    </section>
  )
}

export default MapSection
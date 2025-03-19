import React from 'react'
import ProgramCard from './ProgramCard'
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md'

type Props = {}

const data = [
    {
       title: "Registered Community Nursing (RCN)",
       description: "Trains nurses to provide preventive, curative, and maternal health services at the community level. Focuses on health education, immunization, sanitation, and basic clinical care. Graduates work in public health centers, clinics, and outreach programs to improve healthcare access.",
       link: "/programs/rcn"
    },
    {
       title: "Nurse Assistant Preventive (NAP)",
       description: "Prepares students to assist in preventive healthcare services, health education, and basic nursing care. Covers disease prevention, hygiene promotion, and public health initiatives. Graduates support hospitals, clinics, and community-based health programs.",
       link: "/programs/nap"
    },
    {
       title: "Midwifery (MID)",
       description: "Trains students to provide maternal and newborn care, safe delivery services, and reproductive health support. Covers antenatal, labor, postnatal care, and family planning. Graduates work in hospitals, maternity wards, and health centers to reduce maternal and infant mortality.",
       link: "/programs/mid"
    },

    
]

function ProgramSection({}: Props) {
  return (
    <main className="py-10 w-full font-sans bg-white">
      <section className="w-full mx-auto md:max-w-7xl flex flex-col space-y-6">
        <h2 className="pt-4 pb-6 relative text-3xl font-black">
            <span>Explore Fields of Study</span>
            <span className="absolute bottom-0 left-0 h-2 w-14 bg-primary"></span>
        </h2>
        <p>Slide 1 to 4 of 4</p>
        <div className="relative w-full">
            {/* Slides */}
            <div className="w-full grid grid-cols-3 gap-6">
               { data.map((r,i) => <ProgramCard key={i} title={r.title} description={r.description} link={r.link} /> )}
            </div>
            {/* Switcher */}
            <div className="absolute -left-9 top-1/2 -translate-y-[50%] h-14 w-14 bg-blue-950 rounded-full flex items-center justify-center">
               <MdArrowBackIos className="h-6 w-6 text-white" />
            </div>
            <div className="absolute -right-9 top-1/2 -translate-y-[50%] h-14 w-14 bg-blue-950 rounded-full flex items-center justify-center">
               <MdArrowForwardIos className="h-6 w-6 text-white" />
            </div>
        </div>
      </section>
    </main>
  )
}

export default ProgramSection
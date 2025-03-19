import InsightBox from './InsightBox'

type Props = {}

function GlobalInsightWidget({}: Props) {
  
  const pills = [
     { title: 'OUR VISION', content:'To contribute to the country’s health manpower through the training of middle level cadre of nurses and midwives so as to improve and maintain the health status of all people living in Ghana and beyond.' },
     { title: 'OUR MISSION', content:'Training well-motivated and intelligent nurses and midwives to improve health awareness and ensure access to quality healthcare and related interventions in every Ghanaian household and community.' },
     { title: 'OUR CORE VALUES', content:'Faith, Excellence, Service, and Integrity are guiding values that foster trust, growth, and ethical success. Together, they create a foundation for innovation, strong relationships, and positive impact.' },
     //{ title: 'OUR PROGRAMS', content:'Pursuing a College Diploma or Certificate at NMTC-Esiama is not just about earning a credential—it\'s about transforming yourself into a more knowledgeable, skilled, and confident professional prepared to make a meaningful impact in your field. ' },
  ]
  return (
    <div className="w-full bg-blue-50/50 font-sans">
        <div className="py-6 md:py-10 md:pt-6 md:pb-14 px-4 md:px-10 md:mx-auto md:max-w-7xl flex flex-col space-y-6 md:space-y-12 justify-center items-center">
            <h2 className="md:w-1/2 text-xl md:text-[2.2rem] text-center font-black leading-tight"> <br/><span className="px-4 md:px-10 pt-4 pb-2 rounded-full bg-primary text-white">NMTC - ESIAMA</span></h2>
            {/* <p className='w-[90%] text-lg  md:text-[1.4rem] font-medium text-center leading-relaxed line-clamp-2'>
              At AnnanD, we believe that technology has the power to transform businesses, educational institutions, and individuals.  
            </p> */}
            <div className='mt-16 mb-6 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8'>
              { pills?.map(r => <InsightBox key={r.title} data={r} />)}
            </div>
        </div>
    </div>
  )
}

export default GlobalInsightWidget
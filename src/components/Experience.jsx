import React from 'react'
import { motion } from "framer-motion" 
import { EXPERIENCES } from '../constants'

function Experience() {
  return (
    <div className="border-b border-gray-300 pb-4"> 
        <motion.h2 
         whileInView={{opacity:1,y:0}}
         initial={{opacity:0,y:-100}}
         transition={{duration:0.5}}
        className="my-20 text-center text-4xl text-stone-700">Experience</motion.h2>
        <div>
            {EXPERIENCES.map((experience,index)=>(
                <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                    <motion.div
                    whileInView={{opacity:1,x:0}}
                    initial={{opacity:0,x:-100}}
                    transition={{duration:1}}
                    className="w-full lg:w-1/4">
                        <p className="mb-2 text-sm text-stone-600">{experience.year}</p>
                    </motion.div>
                    <motion.div
                    whileInView={{opacity:1,x:0}}
                    initial={{opacity:0,x:100}}
                    transition={{duration:1}}
                    className="w-full max-w-xl lg:w-3/4">
                    <h6 className="mb-2 font-semibold text-blue-900">
                        {experience.role} - <span className="text-sm text-stone-500"><a href={experience.link} target='_blank' className='no-underline hover:underline hover:decoration-2 hover:decoration-stone-500 hover:cursor-pointer'>{experience.company}</a></span>
                    </h6>
                    <p className="mb-1 text-stone-700">{experience.description}</p>
                    <div className="flex flex-wrap">
                    {experience.technologies.map((tech,index)=>(
                        <span key={index} className="mr-2 mt-4 rounded bg-slate-200 px-2 py-1 text-sm font-medium text-red-900">{tech}</span>
                    ))}
                    </div>
                    
                    </motion.div>
                </div>
            ))}
        </div>

    </div>
  )
}

export default Experience
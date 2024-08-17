import React from 'react'
import { motion } from "framer-motion" 
import { EXPERIENCES, PROJECTS } from '../constants'

function Projects() {
  return (
    <div className="border-b border-gray-300 pb-4">
        <motion.h2 
        whileInView={{opacity:1,y:0}}
        initial={{opacity:0,y:-100}}
        transition={{duration:0.5}}
        className="my-20 text-center text-4xl text-stone-600">Projects</motion.h2>
        <div>
            {PROJECTS.map((project,index)=>(
                <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                    <motion.div 
                    whileInView={{opacity:1,x:0}}
                    initial={{opacity:0,x:-100}}
                    transition={{duration:0.5}}
                    className="w-full lg:w-1/4">
                       <a href={project.link} target='_blank'><img src={project.image}  alt={project.title} width={350} height={300} className="mb-6 rounded border border-slate-900 hover:shadow-2xl shadow-slate-700" /></a> 
                    </motion.div>
                    <motion.div 
                    whileInView={{opacity:1,x:0}}
                    initial={{opacity:0,x:100}}
                    transition={{duration:1}}
                    className="w-full max-w-xl lg:w-3/4">
                     <a href={project.link} target='_blank' className='no-underline hover:underline hover:decoration-blue-900 hover:decoration-2 hover:cursor-pointer'><h6 className="text-blue-900 mb-2 font-bold ">{project.title}</h6></a>
                     <p className="text-slate-600 font-medium mb-2 text-justify">{project.description}</p>
                     <div className="flex flex-wrap">
                    {project.technologies.map((tech,index)=>(
                        <span key={index} className="mr-2 mt-2 rounded bg-slate-200 px-2 py-1 text-sm font-medium text-red-900">{tech}</span>
                    ))}
                    </div>
                    </motion.div>
                </div>
                
            ))}
        </div>
    </div>
  )
}

export default Projects
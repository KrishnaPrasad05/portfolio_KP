import React from 'react'
import { motion } from "framer-motion" 
import aboutImg from "../assets/about.jpg"
import { ABOUT_TEXT } from '../constants'
function About() {
  return (
    <div className="border-b border-gray-300 pb-24">
        <h2 className="my-20 text-center text-4xl text-stone-800">About Me</h2>
        <div className="flex flex-wrap">
        <motion.div
        whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:-100}}
        transition={{duration:0.5}}
        className="w-full lg:w-1/2">
            <div className="flex items-center justify-center">
                <img className="rounded-2xl" src={aboutImg} alt="About Image" />
            </div>
        </motion.div>
        <motion.div
        whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:100}}
        transition={{duration:0.5}}
        className="w-full lg:w-1/2">
            <div className="flex justify-center lg:justify-start">
                <p className="text-stone-700 my-2 max-w-xl py-6 text-justify">{ABOUT_TEXT}</p>
            </div>
        </motion.div>
        </div>
        
    </div>
  )
}

export default About
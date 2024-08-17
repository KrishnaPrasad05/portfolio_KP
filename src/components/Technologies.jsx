import React from 'react'
import { motion } from "framer-motion" 
import { BsGithub } from 'react-icons/bs'
import { DiJava, DiJavascript, DiMongodb } from 'react-icons/di'
import { FaNodeJs } from 'react-icons/fa'
import { FiFigma } from 'react-icons/fi'
import {RiReactjsLine, RiTailwindCssLine} from "react-icons/ri"
import { SiExpress, SiMongoose } from 'react-icons/si'
import { TbBrandReactNative } from 'react-icons/tb'

const iconVariants = (duration) =>({
    initial :{y:-10},
    animate : {
        y:[10,-10],
        transition:{
            duration: duration,
            ease:"linear",
            repeat : Infinity,
            repeatType: "reverse"
        }
    },
})


function Technologies() {
  return (
    <div className="border-b border-gray-300 pb-24">
        <motion.h2
         whileInView={{opacity:1,y:0}}
         initial={{opacity:0,y:-100}}
         transition={{duration:1.5}}
        className="my-20 text-center text-4xl text-stone-700">Technologies</motion.h2>
        <motion.div
        whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:-100}}
        transition={{duration:1.5}}
        className="flex flex-wrap justify-center items-center gap-4">
            <motion.div
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-gray-300 p-4">
                <RiReactjsLine className=" text-7xl text-cyan-400"/>
            </motion.div>
            <motion.div
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-gray-300 p-4">
                <FaNodeJs className=" text-7xl text-green-500"/>
            </motion.div>
            <motion.div
            variants={iconVariants(3.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-gray-300 p-4">
                <SiExpress className=" text-7xl text-stone-800"/>
            </motion.div>
            <motion.div
            variants={iconVariants(4)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-gray-300 p-4">
                <DiMongodb className=" text-7xl text-green-400"/>
            </motion.div>
            <motion.div
            variants={iconVariants(3.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-gray-300 p-4">
                <SiMongoose className=" text-7xl text-red-800"/>
            </motion.div>
            <motion.div
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-gray-300 p-4">
                <RiTailwindCssLine className=" text-7xl text-cyan-600"/>
            </motion.div>
            <motion.div
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-gray-300 p-4">
                <DiJavascript className=" text-7xl text-yellow-500"/>
            </motion.div>
            <motion.div
            variants={iconVariants(2)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-gray-300 p-4">
                <DiJava className=" text-7xl text-red-700"/>
            </motion.div>
            <motion.div
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-gray-300 p-4">
                <BsGithub className=" text-7xl text-stone-800"/>
            </motion.div>
            <motion.div
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-gray-300 p-4">
                <TbBrandReactNative className=" text-7xl text-cyan-400"/>
            </motion.div>
            
        </motion.div>
    </div>
  )
}

export default Technologies
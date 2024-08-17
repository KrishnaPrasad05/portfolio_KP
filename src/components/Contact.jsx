import React from 'react'
import { motion } from "framer-motion"
import { CONTACT } from '../constants'
import { LiaLinkedin } from 'react-icons/lia'
import { BsInstagram, BsLinkedin, BsTwitterX, BsWhatsapp } from 'react-icons/bs'

function Contact() {
  return (
    <div className="border-b border-gray-300 pb-24 lg:mb-35">
        <motion.h2 
        whileInView={{opacity:1,y:0}}
        initial={{opacity:0,y:-100}}
        transition={{duration:0.5}}
        className="my-10 text-center text-4xl text-stone-700">Get in Touch</motion.h2>
        <div className="text-center tracking-tighter">
            <motion.p 
             whileInView={{opacity:1,x:0}}
             initial={{opacity:0,x:-100}}
             transition={{duration:1}}
            className="my-4 text-slate-500">{CONTACT.address}</motion.p>
            <motion.p 
            whileInView={{opacity:1,x:0}}
            initial={{opacity:0,x:100}}
            transition={{duration:1}}
            className="my-4 text-slate-500">{CONTACT.phoneNo}</motion.p>
            <a href="mailto:krishnasrinivasan41@gmail.com" className="border-b text-slate-500">{CONTACT.email}</a>
        </div>
       {/*  <div className="flex flex-wrap gap-4 justify-center items-center my-6">
            <BsLinkedin className=" text-slate-700 text-2xl cursor-pointer"/>
            <BsInstagram className=" text-slate-700 text-2xl cursor-pointer"/>
            <BsTwitterX className=" text-slate-700 text-2xl cursor-pointer"/>
            <BsWhatsapp className=" text-slate-700 text-2xl cursor-pointer"/>
        </div> */}
    </div>
  )
}

export default Contact
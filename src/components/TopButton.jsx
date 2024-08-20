import React from 'react'
import { BiLeftTopArrowCircle, BiSolidUpArrow, BiUpArrow, BiUpArrowAlt, BiUpArrowCircle } from 'react-icons/bi';
import { BsGraphUpArrow } from 'react-icons/bs';
import { FaUpLong } from 'react-icons/fa6';
import { FcUp } from 'react-icons/fc';
import { GiUpCard } from 'react-icons/gi';

function TopButton() {
    const handleTop=()=>{
        window.scrollTo(0,0);
    }
  return (
    <div>
        <button onClick={handleTop} className='bg-slate-800 fixed bottom-5 right-5 p-1 rounded-md'>
          <BiUpArrow className='text-slate-50 text-2xl'/>
        </button>
    </div>
  )
}

export default TopButton
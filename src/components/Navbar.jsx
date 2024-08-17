import React from 'react'
import logo from '../assets/KrishnaPrasadLogo.png'
function Navbar() {
  return (
    <nav className=" mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center ">
            <img src={logo} alt="" className='w-16 h-10' />
        </div>
        <div>
        <button class="bg-slate-200 text-red-900 hover:shadow-lg shadow-slate-400 hover:transition transition-all font-bold py-2 px-4 rounded mx-4">
  <a href="https://linktr.ee/krishnaprasad05" target='_blank'>Connect</a>
</button>

        </div>
    </nav>
  )
}

export default Navbar
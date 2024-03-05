import React from 'react'

const Footer = () => {
  return (
    <div className='h-fit pt-10 pb-3 '>
        <div className="container flex flex-col md:flex-row p-4 justify-between">
            <div className="left w-full px-2 md:w-[46%] flex flex-col justify-center items-center">
                <h1 className='text-2xl font-bold text-orange-400'>MohapatraEstate</h1>
                <p className='text-sm text-center text-gray-400'>Our vision is to make all people the best place to live for them.</p>
            </div>
            <div className="right w-full px-2 md:w-[46%] flex flex-col justify-center items-center">
                <h1 className='text-2xl font-bold'>Information</h1>
                <p className='text-slate-400'>Talcher Town, Near SuryaFilling station</p>
                <ul className='flex space-x-5'>
                    <li><a href="#" className='hover:underline hover:text-gray-500'>About</a></li>
                    <li><a href="#" className='hover:underline hover:text-gray-500'>Services</a></li>
                    <li><a href="#" className='hover:underline hover:text-gray-500'>Contacts</a></li>
                    <li><a href="#" className='hover:underline hover:text-gray-500'>Property</a></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer
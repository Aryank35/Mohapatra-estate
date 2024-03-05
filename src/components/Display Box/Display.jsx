import React from 'react'

const Display = () => {
  return (
    <div className=' h-fit bg-blue-500 rounded-xl flex items-center m-8 py-10 px-4'>
        <div className="container flex flex-col text-white justify-center items-center space-y-9">
            <h1 className='text-2xl font-bold'>Get Started With MohapatraEstate</h1>
            <p className=' text-gray-200 sm:w-[35%] w-[90%] text-center'>Subscribe and find super attractive price quotes from us. Find your residence soon</p>
            <a href="">
                <button className='py-3 px-6 border rounded-md hover:scale-75 delay-75 transition-all ease-out bg-blue-400 font-semibold text-lg hover:text-slate-300'>Get Started</button>
            </a>
        </div>
    </div>
  )
}

export default Display
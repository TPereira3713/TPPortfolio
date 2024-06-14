import React from 'react'
import { FaGithubSquare } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='max-w-[1300px] mx-auto flex justify-between p-6 md:p-20 text-sm md:text-lg mt-12'>

      <div className='space-y-4'>
        <h3 className='text-2xl text-black font-semibold'>Tiago Pereira</h3>
        <div className='flex flex-row gap-6 text-black text-4xl'>
          <a href="https://github.com/TPereira3713"><FaGithubSquare/></a>
        </div>

      </div>

      <p className='text-black'>@ 2024 Tiago Pereira</p>
      
    </div>
  )
}

export default Footer

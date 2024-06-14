import React from 'react'
import Skills from '../assets/Skills.png'
import FrontEnd from '../assets/FrontEnd.jpg'
import FullStack from '../assets/FullStack.webp'
import { DiJavascript1, DiReact, DiNodejsSmall, DiHtml5, DiCss3, DiMongodb,} from 'react-icons/di'

const About = () => {
  return (
    <div className='max-w-[1300px] mx-auto grid md:grid-cols-2 gap-8 place-items-center' id="about">

      <div className='md:hidden bg-white bg-opacity-10 backdrop-blur-lg rounded-lg p-6 flex flex-wrap gap-4 text-4xl justify-center'>
        <DiHtml5 className='text-orange-600' />
        <DiCss3 className='text-blue-600' />
        <DiJavascript1 className='text-yellow-600' />
        <DiReact className='text-blue-600' />
        <DiNodejsSmall className='text-green-600' />
        <DiMongodb className='text-green-600' />

      </div>

      <div className='relative group'>
        <div className='w-full h-full absolute -inset-1 bg-gradient-to-r from-teal-100 to-teal-900 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-300'>
          
        </div>
        <div className='relative w-full p-4 bg-white bg-opacity-10 backdrop-blur-lg rounded-lg'>
          <img src={Skills} alt='Skills' className='rounded-lg md:max-w-[500px]' />
        </div>
      </div>

      <div className='p-6 '>
        <h2 className='text-3xl font-bold mb-4'>Skills</h2>
        <p className='mb-4'>Text with discription</p>
        <div className='md:flex flex-wrap gap-4 text-4xl justify-center hidden'>
          <DiHtml5 className='text-orange-600' />
          <DiCss3 className='text-blue-600' />
          <DiJavascript1 className='text-yellow-600' />
          <DiReact className='text-blue-600' />
          <DiNodejsSmall className='text-green-600' />
          <DiMongodb className='text-green-600' />
        </div>
      </div>

      <div className='p-6 mr-12'>
        <h2 className='text-grey-200 text-3xl font-bold mb-4'>FrontEnd Experience</h2>
        <p className='text-gray-600 mb-4'>Text with discription 2</p>
        <div className='md:flex flex-wrap gap-4 text-4xl justify-center hidden'>
          <DiHtml5 className='text-orange-600' />
          <DiCss3 className='text-blue-600' />
          <DiJavascript1 className='text-yellow-600' />
          <DiReact className='text-blue-600' />
          <DiNodejsSmall className='text-green-600' />
        </div>
      </div>

      <div className='relative group'>
        <div className='w-full h-full absolute -inset-1 bg-gradient-to-r from-teal-100 to-teal-900 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-300'>
          
        </div>
        <div className='relative w-full p-4 bg-white bg-opacity-10 backdrop-blur-lg rounded-lg'>
          <img src={FrontEnd} alt='FrontEnd' className='rounded-lg md:max-w-[500px]' />
        </div>
      </div>

      <div className='relative group'>
        <div className='w-full h-full absolute -inset-1 bg-gradient-to-r from-teal-100 to-teal-900 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-300'>
          
        </div>
        <div className='relative w-full p-4 bg-white bg-opacity-10 backdrop-blur-lg rounded-lg'>
          <img src={FullStack} alt='FullStack' className='rounded-lg md:max-w-[500px]' />
        </div>
      </div>

      <div className='p-6 ml-12'>
        <h2 className='text-grey-200 text-3xl font-bold mb-4'>FullStack Experience</h2>
        <p className='text-gray-600 mb-4'>Text with discription 3</p>
        <div className='md:flex flex-wrap gap-4 text-4xl justify-center hidden'>
          <DiHtml5 className='text-orange-600' />
          <DiCss3 className='text-blue-600' />
          <DiJavascript1 className='text-yellow-600' />
          <DiReact className='text-blue-600' />
          <DiNodejsSmall className='text-green-600' />
          <DiMongodb className='text-green-600' />
        </div>
      </div>

    </div>

  )
}

export default About

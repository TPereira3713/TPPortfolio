import React from 'react';
import profilepic from '../assets/profilepic5.jpg';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import { TypeAnimation } from 'react-type-animation';
import CV from '../assets/CV - Tiago Pereira.pdf';

const Hero = () => {
  return (
    <div className='my-7 md:my-0 max-w-[1300px] md:h-[90vh] mx-auto grid md:grid-cols-4 place-items-center' id='work'>
      <div className='max-w-[400px] flex flex-row md:flex-col'>
        <p className='md:text-5xl sm:text-3xl text-xl tracking-tight'>
          HEY, I AM <br/>
          <span className='font-bold italic'>TIAGO PEREIRA</span> <br/>
          <TypeAnimation sequence={["Developer", 1000, "WebDesigner", 1000, "Consultant", 1000, "Analyst", 1000]} speed={50} repeat={Infinity} />
        </p>

        <a href={CV} download="CV - Tiago Pereira.pdf" title='Download CV' className='mt-6 text-3xl font-bold p-2 bg-gradient-to-r from-[orange] to-[purple] rounded-xl max-w-[280px] text-center'>
            CV
        </a>
      </div>

      <div className='md:col-span-2 md:ml-28'>
        <img src={profilepic} alt='profile pic' className='w-[300px] md:w-[500px] h-auto mx-auto'/>
      </div>

      <div className='text-5xl flex flex-row md:flex-col gap-10 md:w-full place-items-end'>
        <a href='https://github.com/TPereira3713'><AiFillGithub/></a>
        <a href='https://www.linkedin.com/in/tiago-pereira-0652b9212/' className='text-blue-800'><AiFillLinkedin/></a>
      </div>
    </div>
  );
}

export default Hero;


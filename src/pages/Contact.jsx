import React from 'react';
import { AiFillLinkedin } from 'react-icons/ai';

const Contact = () => {
  return (
    <div className='glass px-6 border-2 max-w-[1000px] mx-auto grid md:grid-cols-2 place-items-center' id='contact'>
      <ul className='my-auto pr-6'>
        <li className='flex flex-center items-center'>
          <div className="flex justify-center items-center h-32 w-32">
            <a href='https://www.linkedin.com/in/tiago-pereira-0652b9212/' className='text-blue-700 text-8xl'>
              <AiFillLinkedin />
            </a>
          </div>
          <div className='m-5'>
            <h3 className='text-lg font-bold text-white'>Contact</h3>
            <p className='text-white'>Mobile: +351 918074592</p>
            <p className='text-white'>Email: tgpereira@outlook.pt</p>
          </div>
        </li>
      </ul>
      <form method='POST' className='max-w-6xl p-5 md:p-12' id='form'>
        <input type='text' id='name' placeholder='Your Name...' name='name' className='mb-2 w-full rounded-md border border-black py-2 pl-2 pr-4'/>
        <input type='email' id='email' placeholder='Your Email...' name='email' className='mb-2 w-full rounded-md border border-black py-2 pl-2 pr-4'/>
        <textarea name='textarea' id='textarea' cols='30' rows='4' placeholder='Your Message...' className='mb-2 w-full rounded-md border border-black py-2 pl-2 pr-4'/>
        <button type='submit' className='w-full py-3 rounded-md text-green-700 bg-gradient-to-r from-[yellow] to-[orange] font-semibold text-xl'>Send Message</button>
      </form>
    </div>
  );
}

export default Contact;


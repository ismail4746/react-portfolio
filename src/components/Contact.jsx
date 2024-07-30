import React from 'react';
import { CONTACT } from '../constants/index';

const Contact = () => {
  return (
    <div className='border-b border-black-900 py-32'>
      <h2 className='text-amber-400 my-4 text-center text-4xl'>Get in Touch</h2>
      <div className="text-amber-400 text-center tracking-tighter">
        <p className='my-2'>Raiwand Road Lahore, Pakistan</p>
        <p className='my-2'>0300-4647160</p>
        <a href="#" className='text-amber-400 border-b'>muhammadismail4746@gmail.com</a>
      </div>
    </div>
  );
};

export default Contact;

// Contact.js
import React from 'react';
import { MdLocationOn  } from 'react-icons/md';
import { IoMdMail  } from 'react-icons/io';
import { FaWebAwesome } from 'react-icons/fa6';
import { FaPhone } from 'react-icons/fa6';
import { AiFillInstagram } from 'react-icons/ai';
import { FaTwitter } from 'react-icons/fa';
import {SiLinkedin } from 'react-icons/si';

const Contact = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center min-h-screen bg-cover bg-center md:mt-6 "  >
      <div className="bg-[#592d1e] w-[90%] mt-20 rounded-xl flex md:hidden shadow-2xl text-white flex-col gap-4 justify-center px-8 h-[250px] relative z-20" >
          <h2 className="text-2xl font-semibold">Contact Us</h2>
          <p className="flex items-center text-sm">
            <span className="mr-2"><MdLocationOn size={16} /></span> K-8 Niti Nagar, Sanjay Nagar <br /> Ghaziabad, Uttar Pradesh, India
          </p>
          <p className="flex items-center text-sm">
            <span className="mr-2"><IoMdMail size={16} /></span> lemanda1978@gmail.com
          </p>
          <p className="flex items-center text-sm">
            <span className="mr-2"><FaWebAwesome size={16} /></span> lemanda.in
          </p>
          <p className="flex items-center text-sm">
            <span className="mr-2"><FaPhone size={16} /></span> +91 {" "} 8920309557
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-white hover:text-gray-300">
              <i className="fab fa-instagram"><AiFillInstagram size={24} /></i>
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              <i className="fab fa-twitter"><FaTwitter size={22} /></i>
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              <i className="fab fa-linkedin"><SiLinkedin size={20} /></i>
            </a>
          </div>
        </div>
      <div className="bg-white w-[95%] md:w-[45%] flex flex-col md:flex-row items-center  relative min-h-[500px] md:min-h-[600px] -top-1 " style={{ boxShadow: '0 -4px 10px rgba(0, 0, 0, 0.2)',boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)' }}>
        {/* Contact Information Section */}
        <div className="bg-[#592d1e] hidden md:flex shadow-2xl text-white flex-col gap-6 justify-center px-8 h-[500px] absolute left-[-120px]" >
          <h2 className="text-4xl font-semibold my-4">Contact Us</h2>
          <p className="flex items-center">
            <span className="mr-2"><MdLocationOn size={20} /></span> K-8 Niti Nagar, Sanjay Nagar <br /> Ghaziabad, Uttar Pradesh, India
          </p>
          <p className="flex items-center">
            <span className="mr-2"><IoMdMail size={20} /></span> lemanda1978@gmail.com
          </p>
          <p className="flex items-center">
            <span className="mr-2"><FaWebAwesome size={20} /></span> lemanda.in
          </p>
          <p className="flex items-center">
            <span className="mr-2"><FaPhone size={20} /></span> +91 {" "} 8920309557
          </p>
          <div className="flex gap-10 my-10">
            <a href="#" className="text-white hover:text-gray-300">
              <i className="fab fa-instagram"><AiFillInstagram size={34} /></i>
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              <i className="fab fa-twitter"><FaTwitter size={34} /></i>
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              <i className="fab fa-linkedin"><SiLinkedin size={30} /></i>
            </a>
          </div>
        </div>

        {/* Form Section */}
        <div className='w-1/3 hidden md:block'></div>
        <div className='w-[90%] md:w-2/3'>
        <div className="bg-white md:pr-10">
          <h2 className="text-2xl md:text-4xl text-center md:text-start font-bold text-gray-800 my-2 md:my-6">Get in Touch</h2>
          <p className="text-[#592d1e] text-center md:text-start text-base md:text-xl mb-4">Feel free to drop us a line below!</p>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your name"
              className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#592d1e]"
            />
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#592d1e]"
            />
            <textarea
              placeholder="Type your message here..."
              className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#592d1e] h-32"
            ></textarea>
            <button
              type="submit"
              className="px-4 py-3 bg-[#592d1e] text-white rounded-full hover:bg-[#492417] transition duration-300 shadow-lg w-full"
            >
              SEND
            </button>
          </form>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

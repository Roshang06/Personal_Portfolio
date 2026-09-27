"use client";
import { FaLinkedin, FaInstagram, FaRegEnvelope } from 'react-icons/fa6';

export default function ContactPage() {

  return (
    <div className="min-h-screen pt-20 md:pt-0 md:ml-20 px-6 md:px-12 py-20 flex items-center">
      <div className="max-w-4xl mx-auto w-full">
        <div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-400 mb-12">
            Have a project in mind? Let's work together! You can reach me through any of the platforms below.
          </p>
        </div>

        <div className="flex justify-around">
        <a href="https://www.linkedin.com/in/roshan-ganesh-innovation/"><FaLinkedin size={40} /></a> 
        <a href="https://www.instagram.com/roshanganesh56" ><FaInstagram size={40} /></a> 
        <a href="mailto:roshanganesh06@gmail.com" ><FaRegEnvelope size={40} /></a> 
        </div>

      </div>
    </div>
  );
}
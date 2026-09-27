"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function UWPhotonicsPage() {
  const [modalImage, setModalImage] = useState(null);

  const images = {
    setup: {
      src: '/experimental_setup.jpeg',
      alt: 'Photonics lab setup',
    },
    fabrication: {
      src: '/fpga.jpeg',
      alt: 'FPGA',
    },
  };

  return (
    <main className="min-h-screen bg-black text-white md:pl-20 pt-20 md:pt-0">
      <div className="max-w-3xl mx-auto px-6 py-12 md:py-20">

        {/* Title */}
        <div className="mb-10">
          <p className="text-sm uppercase tracking-widest text-gray-500 mb-2">
            Research
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-white">
            UW Photonics Lab
          </h1>
          <p className="mt-4 text-gray-400 text-sm md:text-base">
            Undergraduate research — machine learning and hardware acceleration
          </p>
        </div>

        {/* Image 1 */}
        <div className="mb-8">
          <button
            onClick={() => setModalImage(images.setup)}
            className="block rounded-xl overflow-hidden border border-gray-800 bg-gray-900/80 backdrop-blur-xl mx-auto cursor-zoom-in hover:opacity-90 transition-opacity"
          >
            <Image
              src={images.setup.src}
              alt={images.setup.alt}
              width={600}
              height={600}
              className="w-full h-auto"
            />
          </button>
        </div>

        {/* Paragraph 1 */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-white mb-3">
            Overview
          </h2>
          <p className="text-gray-400 leading-relaxed text-sm md:text-base">
            Many optical links in data centers use lasers which are great
            for data throughput, but suffer from high power consumption.
            The use of microLEDs as a substitution is an emerging research frontier
            because of energy savings in short distance optical interconnects,
            but they suffer from non-linearities and signal distortion. Our research
            focuses on the use of a machine learning pipeline to train encoder/decoder
            models for the equalization of signals sent through an LED communication channel.
          </p>
        </div>

        {/* Image 2 */}
        <div className="mb-8">
          <button
            onClick={() => setModalImage(images.fabrication)}
            className="block rounded-xl overflow-hidden border border-gray-800 bg-gray-900/80 backdrop-blur-xl mx-auto cursor-zoom-in hover:opacity-90 transition-opacity"
          >
            <Image
              src={images.fabrication.src}
              alt={images.fabrication.alt}
              width={600}
              height={600}
              className="w-full h-auto"
            />
          </button>
        </div>

        {/* Paragraph 2 */}
        <div className="mb-12">
          <h2 className="text-xl font-semibold text-white mb-3">
            My Contribution
          </h2>
          <p className="text-gray-400 leading-relaxed text-sm md:text-base">
            I used pytorch/python to perform quantization aware training (QAT)
            for encoder/decoder models, exploring different methods and types of 
            quantization to optimize power consumption and data throughput.
            I designed SystemVerilog HDL to simulate these networks for harware acceleration,
            which we implemented on the RFSOC 4x2 FPGA as an IP core. 
            Big thanks to Dylan Jones and Professor Lih Y. Lin for their guidance and mentorship during this research project. 
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="https://sites.google.com/uw.edu/photonics-lab"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center px-6 py-3 rounded-xl bg-gray-800/50 border border-gray-700 text-white hover:bg-gray-700/60 transition-colors text-sm font-medium"
          >
            Lab Website
          </Link>
          <Link
            href="https://github.com/Roshang06/prob_tcn_for_LED_Roshan"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center px-6 py-3 rounded-xl bg-gradient-to-br from-gray-600 to-gray-800 text-white hover:opacity-90 transition-opacity text-sm font-medium"
          >
            Github
          </Link>
        </div>

      </div>

      {/* Fullscreen Modal */}
      {modalImage && (
        <div
          onClick={() => setModalImage(null)}
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 cursor-zoom-out"
        >
          <button
            onClick={() => setModalImage(null)}
            className="absolute top-6 right-6 text-white text-3xl leading-none hover:text-gray-400 transition-colors"
            aria-label="Close"
          >
            &times;
          </button>
          <img
            src={modalImage.src}
            alt={modalImage.alt}
            className="max-w-full max-h-full object-contain rounded-lg"
          />
        </div>
      )}
    </main>
  );
}
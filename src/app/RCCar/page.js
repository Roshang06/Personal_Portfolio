"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function UWPhotonicsPage() {
  const [modalImage, setModalImage] = useState(null);

  const images = {
    cad: {
      src: '/rccar.png',
      alt: 'cad design',
    },
    build: {
      src: '/rccar_motor_view.jpeg',
      alt: 'partially built photograph',
    },
  };

  return (
    <main className="min-h-screen bg-black text-white md:pl-20 pt-20 md:pt-0">
      <div className="max-w-3xl mx-auto px-6 py-12 md:py-20">

        {/* Title */}
        <div className="mb-10">
          <p className="text-sm uppercase tracking-widest text-gray-500 mb-2">
            Personal Project
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-white">
            Remote Control Car
          </h1>
          <p className="mt-4 text-gray-400 text-sm md:text-base">
            Personal Project involving CAD modeling, motor control, and linux systems (raspberry pi)
          </p>
        </div>

        {/* Image 1 */}
        <div className="mb-8">
          <button
            onClick={() => setModalImage(images.cad)}
            className="block rounded-xl overflow-hidden border border-gray-800 bg-gray-900/80 backdrop-blur-xl mx-auto cursor-zoom-in hover:opacity-90 transition-opacity"
          >
            <Image
              src={images.cad.src}
              alt={images.cad.alt}
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
            Designed and built a remote control car using a modular, assembled design.
            Used Onshape to model the car before fabrication, and used GPIO pins
            with a raspberry pi to control motors using the pigpio python package.
            Used a simple server/client architecture to send data packets to the pi to
            control the car remotely.
          </p>
        </div>

        {/* Image 2 */}
        <div className="mb-8">
          <button
            onClick={() => setModalImage(images.build)}
            className="block rounded-xl overflow-hidden border border-gray-800 bg-gray-900/80 backdrop-blur-xl mx-auto cursor-zoom-in hover:opacity-90 transition-opacity"
          >
            <Image
              src={images.build.src}
              alt={images.build.alt}
              width={600}
              height={600}
              className="w-full h-auto"
            />
          </button>
        </div>

        {/* Paragraph 2 */}
        <div className="mb-12">
          <p className="text-gray-400 leading-relaxed text-sm md:text-base">
            I used two brushless DC motors for the back wheels, 
            a compliant mechanism for steering using a servo, and metal bearings
            for four wheels. The chasis is made from 3d printed PLA and assembled 
            using heat set inserts and screws. All components are powered using a single
            12 V Li-ion battery.
            Please Reach out to me if you have questions 
            about the project or the specific parts that I used if you want to recreate it!
            </p>
        </div>

        {/* Links */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="https://cad.onshape.com/documents/623744e0a40e4d23a34f392a/w/9060012aedf18c98b4809af4/e/1bb00d9469202f2b5905caed?renderMode=0&uiState=69fed2b49f02df7ccdddaea7"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center px-6 py-3 rounded-xl bg-gray-800/50 border border-gray-700 text-white hover:bg-gray-700/60 transition-colors text-sm font-medium"
          >
            CAD
          </Link>
          <Link
            href="https://github.com/Roshang06/RaspPi-RC-Car-Project"
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
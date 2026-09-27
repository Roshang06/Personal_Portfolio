"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function UWPhotonicsPage() {
  const [modalImage, setModalImage] = useState(null);

  const images = {
    ekg: {
      src: '/full_conceptsketch_f.png',
      alt: 'full conceptsketch',
    },
    stethescope: {
      src: '/stethoscope_conceptsketches_f.png',
      alt: 'stethoscope concept sketches',
    },
  };

  return (
    <main className="min-h-screen bg-black text-white md:pl-20 pt-20 md:pt-0">
      <div className="max-w-3xl mx-auto px-6 py-12 md:py-20">

        {/* Title */}
        <div className="mb-10">
          <p className="text-sm uppercase tracking-widest text-gray-500 mb-2">
            UW RSO
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-white">
            SPARCS Project
          </h1>
          <p className="mt-4 text-gray-400 text-sm md:text-base">
            PCB and product design
          </p>
        </div>

        {/* Image 1 */}
        <div className="mb-8">
          <button
            onClick={() => setModalImage(images.ekg)}
            className="block rounded-xl overflow-hidden border border-gray-800 bg-gray-900/80 backdrop-blur-xl mx-auto cursor-zoom-in hover:opacity-90 transition-opacity"
          >
            <Image
              src={images.ekg.src}
              alt={images.ekg.alt}
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
            This project is funded by BWB at UW, and an entry for the Dempsey
            Startup Competition. We aim to create a wearable vest that lets practitioners easily
            complete an electrocardiogram (EKG) while also recording heart and lung sounds through
            multiple digital stethescopes located on the vest. Our software will synthesize the collected data 
            and let doctors analyze both bioelectric signals and audio signals simultaneously, letting them better
            pick up on murmers and Arrhythmias. This product not only creates
            convenience for the patient because of the wearable nature, but introduces a new
            way for doctors to analyze heart activity in a patient.
          </p>
        </div>

        {/* Image 2 */}
        <div className="mb-8">
          <button
            onClick={() => setModalImage(images.stethescope)}
            className="block rounded-xl overflow-hidden border border-gray-800 bg-gray-900/80 backdrop-blur-xl mx-auto cursor-zoom-in hover:opacity-90 transition-opacity"
          >
            <Image
              src={images.stethescope.src}
              alt={images.stethescope.alt}
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
            My role on the project entails product design for the EKG and digital stethescope,
            as well as design of the electronics, pcb, and firmware for an STM32 microcontroller.
            The project is ongoing so I encourage you to check out the open source components using the link(s) below!
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="https://github.com/Roshang06/SPARCS"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center px-6 py-3 rounded-xl bg-gray-800/50 border border-gray-700 text-white hover:bg-gray-700/60 transition-colors text-sm font-medium"
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
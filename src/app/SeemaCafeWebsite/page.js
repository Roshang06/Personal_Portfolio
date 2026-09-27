"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function UWPhotonicsPage() {
  const [modalImage, setModalImage] = useState(null);

  const images = {
    landing: {
      src: '/seema.png',
      alt: 'Landing Page',
    },
  };

  return (
    <main className="min-h-screen bg-black text-white md:pl-20 pt-20 md:pt-0">
      <div className="max-w-3xl mx-auto px-6 py-12 md:py-20">

        {/* Title */}
        <div className="mb-10">
          <p className="text-sm uppercase tracking-widest text-gray-500 mb-2">
            Business
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-white">
            Seema Cafe
          </h1>
          <p className="mt-4 text-gray-400 text-sm md:text-base">
            Freelance Software development and Client outreach
          </p>
        </div>

        {/* Image 1 */}
        <div className="mb-8">
          <button
            onClick={() => setModalImage(images.landing)}
            className="block rounded-xl overflow-hidden border border-gray-800 bg-gray-900/80 backdrop-blur-xl mx-auto cursor-zoom-in hover:opacity-90 transition-opacity"
          >
            <Image
              src={images.landing.src}
              alt={images.landing.alt}
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
            Created a Landing page for a local cafe on Lake Sammamish Road. Included copywriting,
            Menu creation, and Online ordering system for the cafe integrated with Clover POS.
            Website was made with NextJs/React using Javascript, and Sanity CMS 
            for the owner to manipulate site information. Learned how to reach out and obtain clients,
            define project requirements by meeting with and communicating with the owner,
            and deliver high quality software within a deadline.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="https://www.seemacafe.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center px-6 py-3 rounded-xl bg-gray-800/50 border border-gray-700 text-white hover:bg-gray-700/60 transition-colors text-sm font-medium"
          >
            Website
          </Link>
          <Link
            href="https://github.com/Roshang06/Seema-Official-Website"
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
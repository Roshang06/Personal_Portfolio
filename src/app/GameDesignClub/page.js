"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function UWPhotonicsPage() {
  const [modalImage, setModalImage] = useState(null);

  const images = {
    game: {
      src: '/g.png',
      alt: 'Photonics lab setup',
    },
  };

  return (
    <main className="min-h-screen bg-black text-white md:pl-20 pt-20 md:pt-0">
      <div className="max-w-3xl mx-auto px-6 py-12 md:py-20">

        {/* Title */}
        <div className="mb-10">
          <p className="text-sm uppercase tracking-widest text-gray-500 mb-2">
            Club
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-white">
            Skyline Game Design Club
          </h1>
          <p className="mt-4 text-gray-400 text-sm md:text-base">
            Build two complete games as a collaborative effort within the club.
          </p>
        </div>

        {/* Image 1 */}
        <div className="mb-8">
          <button
            onClick={() => setModalImage(images.game)}
            className="block rounded-xl overflow-hidden border border-gray-800 bg-gray-900/80 backdrop-blur-xl mx-auto cursor-zoom-in hover:opacity-90 transition-opacity"
          >
            <Image
              src={images.game.src}
              alt={images.game.alt}
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
            Founded and acted as President of Game Design club for two years, where we build multiple,
            small games using Unity/C#. Consisted of 20-40 total active members.
          </p>
        </div>

        {/* Paragraph 2 */}
        <div className="mb-12">
          <h2 className="text-xl font-semibold text-white mb-3">
            My Contribution
          </h2>
          <p className="text-gray-400 leading-relaxed text-sm md:text-base">
            Coordinated with the Skyline student body to create the club and
            raise interest through marketing and participation in the club
            fair. Ran weekly meetings to discuss game design principles,
            Unity tutorials, and basic C# programming. Acted as President
            until graduation in 2025. The club continues to meet weekly
            and express their creativity through game design!
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="https://github.com/SkylineGameDesignClub"
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
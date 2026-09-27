"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function UWPhotonicsPage() {
  const [modalImage, setModalImage] = useState(null);

  const images = {
    threeb1b: {
      src: '/3b1bcalc.png',
      alt: 'Deep learning Calculus',
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
            Deep Learning in C++ on Mnist
          </h1>
          <p className="mt-4 text-gray-400 text-sm md:text-base">
            Used C++ to create a class for training and evaluating a simple deep learning network.
          </p>
        </div>

        {/* Image 1 */}
        <div className="mb-8">
          <button
            onClick={() => setModalImage(images.threeb1b)}
            className="block rounded-xl overflow-hidden border border-gray-800 bg-gray-900/80 backdrop-blur-xl mx-auto cursor-zoom-in hover:opacity-90 transition-opacity"
          >
            <Image
              src={images.threeb1b.src}
              alt={images.threeb1b.alt}
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
            Learned how to use the Eigen Matrix library in C++, and learned
            how to use calculus to derive the equations for gradient descent
            in a simple nueral network from. Used the popular MNIST dataset for
            handwritten digits to train my network of 3 fully connected layers
            using Stochastic Gradient Descent (SDG) to achieve an accuracy of 97%
            in the final epoch. This project was meant to be a learning experience,
            both to practice C++ and to understand the math behind gradient descent.
            
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="https://github.com/Roshang06/Nueral_Network_prototype_class"
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
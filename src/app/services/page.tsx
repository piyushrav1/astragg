import React from 'react';

export default function ServicesPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center pt-24 pb-12 px-6">
      <div className="max-w-4xl text-center">
        <h1 className="text-5xl md:text-7xl font-bold font-heading mb-6 bg-clip-text text-transparent bg-gradient-to-r from-neutral-100 to-neutral-500">
          Our Services
        </h1>
        <p className="text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed">
          We offer full-stack web development, brand identity design, and scalable cloud solutions to elevate your digital presence.
        </p>
      </div>
    </main>
  );
}

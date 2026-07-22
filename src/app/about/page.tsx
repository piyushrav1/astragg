import React from 'react';

export default function AboutPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center pt-24 pb-12 px-6">
      <div className="max-w-4xl text-center">
        <h1 className="text-5xl md:text-7xl font-bold font-heading mb-6 bg-clip-text text-transparent bg-gradient-to-r from-neutral-100 to-neutral-500">
          About AstraGG
        </h1>
        <p className="text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed">
          We are a team of passionate creators, engineers, and designers dedicated to pushing the boundaries of what's possible on the web.
        </p>
      </div>
    </main>
  );
}

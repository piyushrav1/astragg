import React from 'react';

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen pt-32 pb-24 px-6 md:px-12 max-w-4xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-bold font-heading mb-8 text-white">
        Terms of Service
      </h1>
      <div className="prose prose-invert prose-neutral max-w-none space-y-6 text-neutral-300">
        <p>
          Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
        </p>
        
        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">1. Acceptance of Terms</h2>
        <p>
          By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. 
          In addition, when using these particular services, you shall be subject to any posted guidelines or rules applicable to such services.
        </p>

        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">2. Intellectual Property Rights</h2>
        <p>
          Other than the content you own, under these Terms, AstraGG and/or its licensors own all the intellectual property rights and materials contained in this Website.
          You are granted limited license only for purposes of viewing the material contained on this Website.
        </p>

        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">3. Restrictions</h2>
        <p>
          You are specifically restricted from all of the following:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Publishing any Website material in any other media without prior consent.</li>
          <li>Selling, sublicensing and/or otherwise commercializing any Website material.</li>
          <li>Publicly performing and/or showing any Website material.</li>
          <li>Using this Website in any way that is or may be damaging to this Website.</li>
          <li>Using this Website in any way that impacts user access to this Website.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">4. No Warranties</h2>
        <p>
          This Website is provided "as is," with all faults, and AstraGG express no representations or warranties, of any kind related to this Website or the materials contained on this Website.
        </p>
        
        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">5. Governing Law & Jurisdiction</h2>
        <p>
          These Terms will be governed by and interpreted in accordance with the laws of the State/Country, and you submit to the non-exclusive jurisdiction of the state and federal courts located in the State/Country for the resolution of any disputes.
        </p>
      </div>
    </main>
  );
}

import React from 'react';

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen pt-32 pb-24 px-6 md:px-12 max-w-4xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-bold font-heading mb-8 text-white">
        Privacy Policy
      </h1>
      <div className="prose prose-invert prose-neutral max-w-none space-y-6 text-neutral-300">
        <p>
          Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
        </p>
        
        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">1. Introduction</h2>
        <p>
          Welcome to AstraGG. We respect your privacy and are committed to protecting your personal data. 
          This privacy policy will inform you as to how we look after your personal data when you visit our website.
        </p>

        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">2. The Data We Collect</h2>
        <p>
          We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Identity Data</strong> includes first name, last name, username or similar identifier.</li>
          <li><strong>Contact Data</strong> includes email address and telephone numbers.</li>
          <li><strong>Technical Data</strong> includes internet protocol (IP) address, your login data, browser type and version.</li>
          <li><strong>Usage Data</strong> includes information about how you use our website, products and services.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">3. How We Use Your Data</h2>
        <p>
          We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
          <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
          <li>Where we need to comply with a legal or regulatory obligation.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">4. Contact Us</h2>
        <p>
          If you have any questions about this privacy policy or our privacy practices, please contact us at: <a href="mailto:hello@astragg.com" className="text-white hover:underline">hello@astragg.com</a>.
        </p>
      </div>
    </main>
  );
}

"use client";

import { useState } from "react";

export default function CertificatePage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [signature, setSignature] = useState("");
  const [certified, setCertified] = useState(false);
  const [showCertificate, setShowCertificate] = useState(false);

  const today = new Date().toLocaleDateString();

  function generateCertificate() {
    if (!name.trim()) {
      alert("Please enter the contractor name.");
      return;
    }

    if (!email.trim()) {
      alert("Please enter the contractor email.");
      return;
    }

    if (!signature.trim()) {
      alert("Please type the contractor digital signature.");
      return;
    }

    if (!certified) {
      alert("The contractor must certify completion before generating the certificate.");
      return;
    }

    setShowCertificate(true);
  }

  function printCertificate() {
    window.print();
  }

  return (
    <main className="min-h-screen bg-gray-100 text-gray-900 p-8">

      {!showCertificate && (
        <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-md p-8">
          <h1 className="text-3xl font-bold mb-4">
            Generate Completion Certificate
          </h1>

          <p className="mb-6">
            Enter the contractor information exactly how it should appear on the certificate.
          </p>

          <input
            type="text"
            placeholder="Contractor Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-gray-400 rounded-xl p-3 mb-4"
          />

          <input
            type="email"
            placeholder="Contractor Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-400 rounded-xl p-3 mb-4"
          />

          <input
            type="text"
            placeholder="Typed Digital Signature"
            value={signature}
            onChange={(e) => setSignature(e.target.value)}
            className="w-full border border-gray-400 rounded-xl p-3 mb-4"
          />

          <label className="flex gap-3 mb-6">
            <input
              type="checkbox"
              checked={certified}
              onChange={(e) => setCertified(e.target.checked)}
            />

            <span>
              I certify that I personally completed the Ozark Roadside Contractor Training Program and understand the required procedures.
            </span>
          </label>

          <button
            onClick={generateCertificate}
            className="bg-black text-white px-6 py-3 rounded-xl font-semibold"
          >
            Generate Certificate
          </button>
        </div>
      )}

      {showCertificate && (
        <div className="max-w-5xl mx-auto bg-white border-8 border-black p-12 text-center shadow-lg print:shadow-none">
          <h1 className="text-5xl font-bold mb-6">
            Certificate of Completion
          </h1>

          <p className="text-xl mb-6">
            This certifies that
          </p>

          <h2 className="text-4xl font-bold underline mb-4">
            {name}
          </h2>

          <p className="text-lg mb-6">
            {email}
          </p>

          <p className="text-xl mb-6">
            has completed the required
          </p>

          <h3 className="text-3xl font-semibold mb-8">
            Ozark Roadside Contractor Training Program
          </h3>

          <p className="text-lg mb-8">
            Including lockout procedures, tire change procedures, fuel delivery procedures,
            jump start procedures, customer communication standards, and claims prevention training.
          </p>

          <p className="text-lg mb-10">
            Completion Date: <strong>{today}</strong>
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16 text-left">
            <div>
              <p className="text-2xl font-semibold border-b-2 border-black pb-2">
                {signature}
              </p>
              <p className="mt-2">Contractor Digital Signature</p>
              <p className="text-sm mt-1">Signed Date: {today}</p>
            </div>

            <div>
              <p className="text-2xl font-semibold border-b-2 border-black pb-2">
                Ozark Roadside Training Portal
              </p>
              <p className="mt-2">Authorized Representative</p>
              <p className="text-sm mt-1">Automatically issued upon completion</p>
            </div>
          </div>

          <div className="mt-12 text-left bg-gray-100 rounded-xl p-4">
            <p className="font-semibold mb-2">
              Digital Certification Statement
            </p>

            <p className="text-sm">
              By typing their name as a digital signature, the contractor certifies that they personally completed this training,
              understand Ozark Roadside procedures, and agree to follow all documentation and claims prevention requirements.
            </p>
          </div>

          <button
            onClick={printCertificate}
            className="mt-12 bg-black text-white px-6 py-3 rounded-xl font-semibold print:hidden"
          >
            Print / Save as PDF
          </button>
        </div>
      )}

    </main>
  );
}
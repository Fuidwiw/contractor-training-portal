"use client";

import { useEffect, useState } from "react";

export default function CertificatePage() {
  const [allowed, setAllowed] = useState(false);
  const [checkingAccess, setCheckingAccess] = useState(true);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [signature, setSignature] = useState("");
  const [certified, setCertified] = useState(false);
  const [showCertificate, setShowCertificate] = useState(false);

  const [savingCertificate, setSavingCertificate] = useState(false);
  const [saveMessage, setSaveMessage] = useState("");
  const [savedFileName, setSavedFileName] = useState("");

  const today = new Date().toLocaleDateString();

  useEffect(() => {
    const passed = sessionStorage.getItem("trainingPassed");

    if (passed === "true") {
      setAllowed(true);
    }

    setCheckingAccess(false);
  }, []);

  async function generateCertificate() {
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

    setSavingCertificate(true);
    setSaveMessage("");
    setSavedFileName("");

    try {
      const response = await fetch("/api/save-certificate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          signature,
          completedDate: today,
		  quizReview: JSON.parse(sessionStorage.getItem("quizReview") || "null"),
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || "Certificate could not be saved.");
      }

      setSavedFileName(data.fileName);
      setSaveMessage("Certificate saved successfully.");
      setShowCertificate(true);
    } catch (error) {
      console.error(error);
      alert(
        "The certificate could not be saved to the server. Please contact Ozark Roadside before closing this page."
      );
      setSaveMessage("Certificate save failed.");
    } finally {
      setSavingCertificate(false);
    }
  }

  function printCertificate() {
    window.print();
  }

  if (checkingAccess) {
    return (
      <main className="min-h-screen bg-gray-100 p-8 text-gray-900">
        <div className="mx-auto max-w-2xl rounded-2xl bg-white p-8 shadow-md">
          <p>Checking training completion...</p>
        </div>
      </main>
    );
  }

  if (!allowed) {
    return (
      <main className="min-h-screen bg-gray-100 p-8 text-gray-900">
        <div className="mx-auto max-w-2xl rounded-2xl bg-white p-8 shadow-md">
          <h1 className="mb-4 text-3xl font-bold">Certificate Locked</h1>

          <p className="mb-6">
            You must pass the contractor training quiz before generating a
            completion certificate.
          </p>

          <a
            href="/quiz"
            className="inline-block rounded-xl bg-black px-6 py-3 font-semibold text-white"
          >
            Go to Quiz
          </a>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-100 p-8 text-gray-900">
      {!showCertificate && (
        <div className="mx-auto max-w-2xl rounded-2xl bg-white p-8 shadow-md">
          <h1 className="mb-4 text-3xl font-bold">
            Generate Completion Certificate
          </h1>

          <p className="mb-6">
            Enter the contractor information exactly how it should appear on the
            certificate.
          </p>

          <input
            type="text"
            placeholder="Contractor Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mb-4 w-full rounded-xl border border-gray-400 p-3"
          />

          <input
            type="email"
            placeholder="Contractor Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mb-4 w-full rounded-xl border border-gray-400 p-3"
          />

          <input
            type="text"
            placeholder="Typed Digital Signature"
            value={signature}
            onChange={(e) => setSignature(e.target.value)}
            className="mb-4 w-full rounded-xl border border-gray-400 p-3"
          />

          <label className="mb-6 flex gap-3">
            <input
              type="checkbox"
              checked={certified}
              onChange={(e) => setCertified(e.target.checked)}
            />

            <span>
              I certify that I personally completed the Ozark Roadside
              Contractor Training Program and understand the required procedures.
            </span>
          </label>

          <button
            type="button"
            onClick={generateCertificate}
            disabled={savingCertificate}
            className="rounded-xl bg-black px-6 py-3 font-semibold text-white disabled:bg-gray-500"
          >
            {savingCertificate ? "Saving Certificate..." : "Generate Certificate"}
          </button>

          {saveMessage && (
            <p className="mt-4 font-semibold text-gray-700">{saveMessage}</p>
          )}
        </div>
      )}

      {showCertificate && (
        <div className="mx-auto max-w-5xl border-8 border-black bg-white p-12 text-center shadow-lg print:shadow-none">
          <h1 className="mb-6 text-5xl font-bold">
            Certificate of Completion
          </h1>

          <p className="mb-6 text-xl">This certifies that</p>

          <h2 className="mb-4 text-4xl font-bold underline">{name}</h2>

          <p className="mb-6 text-lg">{email}</p>

          <p className="mb-6 text-xl">has completed the required</p>

          <h3 className="mb-8 text-3xl font-semibold">
            Ozark Roadside Contractor Training Program
          </h3>

          <p className="mb-8 text-lg">
            Including lockout procedures, tire change procedures, fuel delivery
            procedures, jump start procedures, customer communication standards,
            and claims prevention training.
          </p>

          <p className="mb-10 text-lg">
            Completion Date: <strong>{today}</strong>
          </p>

          <div className="mt-16 grid grid-cols-1 gap-10 text-left md:grid-cols-2">
            <div>
              <p className="border-b-2 border-black pb-2 text-2xl font-semibold">
                {signature}
              </p>
              <p className="mt-2">Contractor Digital Signature</p>
              <p className="mt-1 text-sm">Signed Date: {today}</p>
            </div>

            <div>
              <p className="border-b-2 border-black pb-2 text-2xl font-semibold">
                Ozark Roadside Training Portal
              </p>
              <p className="mt-2">Authorized Representative</p>
              <p className="mt-1 text-sm">
                Automatically issued upon completion
              </p>
            </div>
          </div>

          <div className="mt-12 rounded-xl bg-gray-100 p-4 text-left">
            <p className="mb-2 font-semibold">
              Digital Certification Statement
            </p>

            <p className="text-sm">
              By typing their name as a digital signature, the contractor
              certifies that they personally completed this training, understand
              Ozark Roadside procedures, and agree to follow all documentation
              and claims prevention requirements.
            </p>
          </div>

          {savedFileName && (
            <div className="mt-8 rounded-xl bg-green-50 p-4 text-left ring-1 ring-green-200 print:hidden">
              <p className="font-bold text-green-800">
                Certificate saved successfully.
              </p>
              <p className="mt-1 text-sm text-green-900">
                Saved file: {savedFileName}
              </p>
            </div>
          )}

          <button
            type="button"
            onClick={printCertificate}
            className="mt-12 rounded-xl bg-black px-6 py-3 font-semibold text-white print:hidden"
          >
            Print / Save as PDF
          </button>
        </div>
      )}
    </main>
  );
}
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function TrainingCompleteButton({ moduleId, moduleName }) {
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    const alreadyCompleted =
      sessionStorage.getItem(`training_${moduleId}_complete`) === "true";

    if (alreadyCompleted) {
      setCompleted(true);
    }
  }, [moduleId]);

  function markComplete() {
    sessionStorage.setItem(`training_${moduleId}_complete`, "true");
    setCompleted(true);
  }

  return (
    <section className="mt-8 rounded-2xl bg-green-50 p-6 shadow-sm ring-1 ring-green-200">
      <h2 className="text-2xl font-bold text-green-900">
        Mark Training Complete
      </h2>

      <p className="mt-3 text-green-950">
        After reviewing this entire module, click the button below to mark{" "}
        <span className="font-semibold">{moduleName}</span> as complete for this
        browser session.
      </p>

      {!completed ? (
        <button
          type="button"
          onClick={markComplete}
          className="mt-5 rounded-xl bg-green-700 px-5 py-3 font-semibold text-white hover:bg-green-800"
        >
          I Completed {moduleName}
        </button>
      ) : (
        <div className="mt-5 rounded-xl bg-white p-5 ring-1 ring-green-200">
          <p className="text-lg font-bold text-green-800">
            ✓ {moduleName} Completed
          </p>

          <p className="mt-2 text-green-950">
            This section is complete for the current browser session.
          </p>

          <Link
            href="/"
            className="mt-4 inline-block rounded-xl bg-gray-900 px-5 py-3 font-semibold text-white hover:bg-gray-700"
          >
            Return to Training Home
          </Link>
        </div>
      )}
    </section>
  );
}
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const requiredModules = [
  {
    id: "lockout",
    name: "Lockout Training",
    href: "/lockout",
  },
  {
    id: "tire-change",
    name: "Tire Change Training",
    href: "/tire-change",
  },
  {
    id: "fuel-delivery",
    name: "Fuel Delivery Training",
    href: "/fuel-delivery",
  },
  {
    id: "jump-start",
    name: "Jump Start Training",
    href: "/jump-start",
  },
  {
    id: "claims-prevention",
    name: "Claims Prevention Training",
    href: "/claims-prevention",
  },
];

export default function QuizAccessGate({ children }) {
  const [checked, setChecked] = useState(false);
  const [completedModules, setCompletedModules] = useState([]);

  useEffect(() => {
    const completed = requiredModules.filter((module) => {
      return sessionStorage.getItem(`training_${module.id}_complete`) === "true";
    });

    setCompletedModules(completed.map((module) => module.id));
    setChecked(true);
  }, []);

  if (!checked) {
    return (
      <main className="min-h-screen bg-gray-100 px-6 py-10 text-gray-900">
        <section className="mx-auto max-w-4xl rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
          <h1 className="text-3xl font-bold">Checking Training Progress...</h1>
          <p className="mt-3 text-gray-700">
            Please wait while your training completion status is checked.
          </p>
        </section>
      </main>
    );
  }

  const allComplete = requiredModules.every((module) =>
    completedModules.includes(module.id)
  );

  if (!allComplete) {
    return (
      <main className="min-h-screen bg-gray-100 px-6 py-10 text-gray-900">
        <section className="mx-auto max-w-4xl rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-gray-500">
            Quiz Locked
          </p>

          <h1 className="text-3xl font-bold">
            Complete all training modules before taking the quiz.
          </h1>

          <p className="mt-4 text-gray-700">
            This quiz is locked until all required training sections are marked
            complete in this same browser session. If the browser session is
            closed or reset, the contractor must complete the training again.
          </p>

          <div className="mt-6 space-y-3">
            {requiredModules.map((module) => {
              const complete = completedModules.includes(module.id);

              return (
                <div
                  key={module.id}
                  className="flex items-center justify-between rounded-xl bg-gray-50 p-4 ring-1 ring-gray-200"
                >
                  <div>
                    <p className="font-semibold">{module.name}</p>
                    <p
                      className={
                        complete
                          ? "text-sm font-semibold text-green-700"
                          : "text-sm font-semibold text-red-700"
                      }
                    >
                      {complete ? "Completed" : "Not completed"}
                    </p>
                  </div>

                  {!complete && (
                    <Link
                      href={module.href}
                      className="rounded-lg bg-gray-900 px-4 py-2 text-sm font-semibold text-white hover:bg-gray-700"
                    >
                      Open
                    </Link>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      </main>
    );
  }

  return children;
}
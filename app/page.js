"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const modules = [
  {
    id: "lockout",
    title: "Lockout Training",
    description:
      "Learn safe vehicle entry procedures, proper tool use, documentation, EV considerations, and claims-prevention practices.",
    href: "/lockout",
  },
  {
    id: "tire-change",
    title: "Tire Change Training",
    description:
      "Review scene safety, jack point selection, spare installation, lug damage documentation, and customer communication.",
    href: "/tire-change",
  },
  {
    id: "fuel-delivery",
    title: "Fuel Delivery Training",
    description:
      "Learn fuel type verification, spill prevention, capless fuel systems, hybrid considerations, and service documentation.",
    href: "/fuel-delivery",
  },
  {
    id: "jump-start",
    title: "Jump Start Training",
    description:
      "Review battery inspection, polarity verification, safe connection order, EV/hybrid jump points, and electrical claim prevention.",
    href: "/jump-start",
  },
  {
    id: "claims-prevention",
    title: "Claims Prevention",
    description:
      "Understand how to document vehicle condition, communicate professionally, prevent claims, and respond to customer concerns.",
    href: "/claims-prevention",
  },
  {
  id: "damage-waiver",
  title: "Damage Waiver Tutorial",
  description:
    "Learn how to log in, generate job info, complete the waiver, collect initials/signatures, upload the form, and avoid closing the browser too early.",
  href: "/damage-waiver",
},
];

export default function HomePage() {
  const [completedModules, setCompletedModules] = useState([]);

  useEffect(() => {
    const completed = modules
      .filter((module) => {
        return sessionStorage.getItem(`training_${module.id}_complete`) === "true";
      })
      .map((module) => module.id);

    setCompletedModules(completed);
  }, []);

  const allTrainingComplete = modules.every((module) =>
    completedModules.includes(module.id)
  );

  return (
    <main className="min-h-screen bg-gray-100 text-gray-900">
      <section className="bg-gray-900 text-white">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-gray-300">
            Ozark Roadside Contractor Training Portal
          </p>

          <h1 className="max-w-4xl text-4xl font-bold tracking-tight md:text-5xl">
            Professional roadside training built for safety, service quality,
            and claims prevention.
          </h1>

          <p className="mt-5 max-w-3xl text-lg text-gray-200">
            Complete each training module, review the claims-prevention
            standards, pass the contractor quiz, and generate your completion
            certificate.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/lockout"
              className="rounded-xl bg-white px-5 py-3 font-semibold text-gray-900 shadow-sm hover:bg-gray-200"
            >
              Start Training
            </Link>

            <Link
              href="/quiz"
              className={
                allTrainingComplete
                  ? "rounded-xl border border-white px-5 py-3 font-semibold text-white hover:bg-white hover:text-gray-900"
                  : "rounded-xl border border-gray-500 px-5 py-3 font-semibold text-gray-400"
              }
            >
              {allTrainingComplete ? "Take Quiz" : "Quiz Locked"}
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="rounded-2xl border-l-4 border-yellow-500 bg-yellow-50 p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-yellow-900">
            Training Requirement
          </h2>
          <p className="mt-3 text-yellow-950">
            Contractors should review all required modules before taking the
            quiz. The certificate page remains locked until the quiz is passed
            with a score of 80% or higher.
          </p>
        </div>

        <section className="mt-8">
          <div className="mb-6">
            <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">
              Training Modules
            </p>
            <h2 className="mt-2 text-3xl font-bold">
              Complete each required section
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {modules.map((module) => {
              const completed = completedModules.includes(module.id);

              return (
                <Link
                  key={module.href}
                  href={module.href}
                  className={
                    completed
                      ? "group rounded-2xl bg-green-50 p-6 shadow-sm ring-2 ring-green-300 transition hover:-translate-y-1 hover:shadow-md"
                      : "group rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200 transition hover:-translate-y-1 hover:shadow-md"
                  }
                >
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-2xl font-bold group-hover:text-gray-700">
                      {module.title}
                    </h3>

                    {completed && (
                      <span className="rounded-full bg-green-700 px-3 py-1 text-sm font-bold text-white">
                        ✓ Complete
                      </span>
                    )}
                  </div>

                  <p className="mt-3 text-gray-700">{module.description}</p>

                  <p className="mt-5 font-semibold text-gray-900">
                    {completed ? "Review module →" : "Open module →"}
                  </p>
                </Link>
              );
            })}
          </div>
        </section>

        <section className="mt-8 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
          <h2 className="text-2xl font-bold">Completion Process</h2>

          <div className="mt-5 grid gap-4 md:grid-cols-4">
            <div className="rounded-xl bg-gray-50 p-4 ring-1 ring-gray-200">
              <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">
                Step 1
              </p>
              <p className="mt-2 font-bold">Review Training</p>
            </div>

            <div className="rounded-xl bg-gray-50 p-4 ring-1 ring-gray-200">
              <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">
                Step 2
              </p>
              <p className="mt-2 font-bold">Take Quiz</p>
            </div>

            <div className="rounded-xl bg-gray-50 p-4 ring-1 ring-gray-200">
              <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">
                Step 3
              </p>
              <p className="mt-2 font-bold">Pass With 80%</p>
            </div>

            <div className="rounded-xl bg-gray-50 p-4 ring-1 ring-gray-200">
              <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">
                Step 4
              </p>
              <p className="mt-2 font-bold">Generate Certificate</p>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              href="/quiz"
              className={
                allTrainingComplete
                  ? "rounded-xl bg-gray-900 px-5 py-3 font-semibold text-white hover:bg-gray-700"
                  : "rounded-xl bg-gray-400 px-5 py-3 font-semibold text-white"
              }
            >
              {allTrainingComplete ? "Go to Quiz" : "Complete Training First"}
            </Link>

            <Link
              href="/certificate"
              className="rounded-xl border border-gray-300 px-5 py-3 font-semibold text-gray-900 hover:bg-gray-100"
            >
              Certificate Page
            </Link>
          </div>
        </section>
      </section>
    </main>
  );
}
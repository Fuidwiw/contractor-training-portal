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

const questions = [
  {
    id: "q1",
    module: "Lockout",
    question:
      "Before performing a vehicle lockout, what should the contractor do first?",
    options: [
      {
        value: "force-door",
        label: "Create a large door gap quickly so the job can be completed faster.",
      },
      {
        value: "inspect-document",
        label:
          "Inspect the vehicle, look for existing damage, and take pre-service photos.",
      },
      {
        value: "unlock-first",
        label: "Unlock the vehicle first, then inspect for damage afterward.",
      },
      {
        value: "customer-only",
        label: "Only ask the customer if the vehicle has damage.",
      },
    ],
    correctAnswer: "inspect-document",
  },
  {
    id: "q2",
    module: "Lockout",
    question: "During a lockout, what is the safest way to use an air wedge?",
    options: [
      {
        value: "overinflate",
        label: "Inflate it as much as possible to create a large opening.",
      },
      {
        value: "minimum-pressure",
        label:
          "Use only enough pressure to create working space and avoid bending the door frame.",
      },
      {
        value: "skip-protection",
        label:
          "Use it without protection because the rubber wedge cannot damage anything.",
      },
      {
        value: "force-trim",
        label: "Place it against loose trim to make the tool easier to insert.",
      },
    ],
    correctAnswer: "minimum-pressure",
  },
  {
    id: "q3",
    module: "Lockout",
    question:
      "If a vehicle has frameless windows, fragile trim, or existing door damage, what should the contractor do?",
    options: [
      {
        value: "continue-fast",
        label: "Continue quickly before the customer becomes impatient.",
      },
      {
        value: "ignore",
        label: "Ignore it unless the customer says something.",
      },
      {
        value: "warn-document",
        label:
          "Document the condition, notify the customer, and proceed only if it can be done safely.",
      },
      {
        value: "force-entry",
        label: "Use more wedge pressure so the long-reach tool fits better.",
      },
    ],
    correctAnswer: "warn-document",
  },
  {
    id: "q4",
    module: "Tire Change",
    question: "Before lifting a vehicle for a tire change, what must be verified?",
    options: [
      {
        value: "anywhere-stable",
        label: "That the jack fits somewhere under the vehicle.",
      },
      {
        value: "correct-jack-point",
        label:
          "The correct manufacturer-approved lift point and stable ground conditions.",
      },
      {
        value: "customer-says-ok",
        label: "That the customer says the vehicle has been lifted before.",
      },
      {
        value: "plastic-panel",
        label: "That the jack is touching a large plastic underbody panel.",
      },
    ],
    correctAnswer: "correct-jack-point",
  },
  {
    id: "q5",
    module: "Tire Change",
    question:
      "Why should lug nuts, lug studs, wheel locks, and the wheel area be documented before removal?",
    options: [
      {
        value: "speed",
        label: "It makes the tire change faster.",
      },
      {
        value: "claims-defense",
        label:
          "It helps show whether damage, missing lugs, swollen lugs, stripped studs, rust, or wheel issues existed before service.",
      },
      {
        value: "not-needed",
        label: "It is only needed if the customer complains first.",
      },
      {
        value: "after-only",
        label:
          "It is better to document those items only after the spare is installed.",
      },
    ],
    correctAnswer: "claims-defense",
  },
  {
    id: "q6",
    module: "Tire Change",
    question:
      "What should a contractor do if a lug nut will not thread smoothly by hand?",
    options: [
      {
        value: "impact-force",
        label: "Use an impact wrench to force it on.",
      },
      {
        value: "stop-inspect",
        label:
          "Stop, inspect for cross-threading or stud damage, document the issue, and notify the customer.",
      },
      {
        value: "skip-lug",
        label: "Leave that lug nut off and continue.",
      },
      {
        value: "tighten-hard",
        label: "Tighten it harder until it seats.",
      },
    ],
    correctAnswer: "stop-inspect",
  },
  {
    id: "q7",
    module: "Fuel Delivery",
    question:
      "What is the most important step before dispensing fuel into a customer vehicle?",
    options: [
      {
        value: "guess",
        label: "Guess the fuel type based on the vehicle size.",
      },
      {
        value: "verify-fuel",
        label:
          "Verify the correct fuel type using the customer, fuel door, fuel cap, label, or reliable vehicle information.",
      },
      {
        value: "use-regular",
        label: "Use regular gasoline because most vehicles take it.",
      },
      {
        value: "ask-after",
        label: "Ask the customer after the fuel has already been added.",
      },
    ],
    correctAnswer: "verify-fuel",
  },
  {
    id: "q8",
    module: "Fuel Delivery",
    question: "What should be done if a vehicle has a capless fuel system?",
    options: [
      {
        value: "force-spout",
        label: "Force the fuel spout into the opening.",
      },
      {
        value: "adapter",
        label:
          "Use the correct capless fuel adapter or funnel and avoid forcing the system.",
      },
      {
        value: "pour-outside",
        label: "Pour slowly near the opening and let fuel drain in.",
      },
      {
        value: "skip-document",
        label: "Skip documenting it because capless systems are common.",
      },
    ],
    correctAnswer: "adapter",
  },
  {
    id: "q9",
    module: "Jump Start",
    question: "What must be confirmed before connecting jump start equipment?",
    options: [
      {
        value: "polarity",
        label:
          "Positive and negative connection points, battery condition, and safe jump locations.",
      },
      {
        value: "customer-ready",
        label: "Only that the customer is ready to start the vehicle.",
      },
      {
        value: "red-black-only",
        label:
          "Only that the red cable is positive and black cable is negative.",
      },
      {
        value: "engine-size",
        label: "Only the engine size of the vehicle.",
      },
    ],
    correctAnswer: "polarity",
  },
  {
    id: "q10",
    module: "Jump Start",
    question:
      "Which battery condition means the contractor should NOT perform a jump start?",
    options: [
      {
        value: "dirty",
        label: "The battery case is dusty.",
      },
      {
        value: "unsafe-battery",
        label:
          "The battery is frozen, cracked, leaking, swollen, smoking, or visibly damaged.",
      },
      {
        value: "old-car",
        label: "The vehicle is older than 10 years.",
      },
      {
        value: "small-battery",
        label: "The battery is smaller than expected.",
      },
    ],
    correctAnswer: "unsafe-battery",
  },
  {
    id: "q11",
    module: "EV / Hybrid",
    question:
      "When servicing an EV or hybrid during a jump start, what should the contractor avoid?",
    options: [
      {
        value: "high-voltage",
        label:
          "Orange high-voltage cables, battery packs, inverters, charging components, and unknown electrical parts.",
      },
      {
        value: "12v-only",
        label: "Manufacturer-designated 12-volt jump points.",
      },
      {
        value: "photos",
        label: "Taking photos before service.",
      },
      {
        value: "dispatch",
        label: "Calling dispatch if the correct jump point is unclear.",
      },
    ],
    correctAnswer: "high-voltage",
  },
  {
    id: "q12",
    module: "Claims Prevention",
    question:
      "What is the correct response if a customer reports possible damage at the scene?",
    options: [
      {
        value: "admit",
        label: "Admit fault immediately so the customer calms down.",
      },
      {
        value: "promise-pay",
        label: "Promise that the company will pay for repairs.",
      },
      {
        value: "argue",
        label:
          "Argue if the contractor believes the damage was already there.",
      },
      {
        value: "document-report",
        label:
          "Stay professional, document the concern, take photos, and report it to management or dispatch.",
      },
    ],
    correctAnswer: "document-report",
  },
  {
    id: "q13",
    module: "Claims Prevention",
    question: "Which photo documentation practice is best for claims defense?",
    options: [
      {
        value: "after-only",
        label: "Take photos only after the job is complete.",
      },
      {
        value: "before-after",
        label:
          "Take clear pre-service and post-service photos of the exact work area and any existing damage.",
      },
      {
        value: "far-away",
        label:
          "Take one far-away photo of the vehicle from across the parking lot.",
      },
      {
        value: "none",
        label: "Only take photos if the customer seems difficult.",
      },
    ],
    correctAnswer: "before-after",
  },
  {
    id: "q14",
    module: "Claims Prevention",
    question:
      "If the correct procedure is unclear or the service may damage the vehicle, what should the contractor do?",
    options: [
      {
        value: "continue",
        label:
          "Continue because roadside jobs must be completed no matter what.",
      },
      {
        value: "customer-choice",
        label: "Let the customer choose where to place tools or equipment.",
      },
      {
        value: "stop-contact",
        label: "Stop and contact dispatch or management before continuing.",
      },
      {
        value: "guess",
        label: "Make the best guess and document only if something breaks.",
      },
    ],
    correctAnswer: "stop-contact",
  },
  {
    id: "q15",
    module: "Overall Procedure",
    question:
      "What does a successful roadside service require besides completing the requested task?",
    options: [
      {
        value: "speed-only",
        label: "Completing the job as fast as possible.",
      },
      {
        value: "safe-documented",
        label:
          "Safe work, professional communication, correct procedure, and documentation that can defend against a claim.",
      },
      {
        value: "no-photos",
        label: "Avoiding photos so the customer does not feel uncomfortable.",
      },
      {
        value: "customer-approval-only",
        label: "Only getting the customer to say everything looks okay.",
      },
    ],
    correctAnswer: "safe-documented",
  },
];

export default function QuizPage() {
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);
  const [checkedTraining, setCheckedTraining] = useState(false);
  const [completedModules, setCompletedModules] = useState([]);

  useEffect(() => {
    const completed = requiredModules.filter((module) => {
      return sessionStorage.getItem(`training_${module.id}_complete`) === "true";
    });

    setCompletedModules(completed.map((module) => module.id));
    setCheckedTraining(true);
  }, []);

  function handleAnswer(question, value) {
    setAnswers({
      ...answers,
      [question]: value,
    });
  }

  function gradeQuiz() {
    let score = 0;
    const missedQuestions = [];

    questions.forEach((question, index) => {
      const selectedAnswer = answers[question.id];

      if (selectedAnswer === question.correctAnswer) {
        score++;
      } else {
        const selectedOption = question.options.find(
          (option) => option.value === selectedAnswer
        );

        const correctOption = question.options.find(
          (option) => option.value === question.correctAnswer
        );

        missedQuestions.push({
          questionNumber: index + 1,
          module: question.module,
          question: question.question,
          selectedAnswer: selectedOption
            ? selectedOption.label
            : "No answer selected",
          correctAnswer: correctOption
            ? correctOption.label
            : "Correct answer missing",
        });
      }
    });

    const percentage = Math.round((score / questions.length) * 100);
    const passed = percentage >= 80;

    const quizReview = {
      score,
      totalQuestions: questions.length,
      percentage,
      passed,
      missedQuestions,
      completedAt: new Date().toLocaleString(),
    };

    sessionStorage.setItem("quizReview", JSON.stringify(quizReview));

    if (passed) {
      sessionStorage.setItem("trainingPassed", "true");
    } else {
      sessionStorage.removeItem("trainingPassed");
    }

    setResult({
      score,
      percentage,
      passed,
      missedQuestions,
    });
  }

  const allTrainingComplete = requiredModules.every((module) =>
    completedModules.includes(module.id)
  );

  if (!checkedTraining) {
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

  if (!allTrainingComplete) {
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
            complete in this same browser session. If the browser is closed, the
            session is reset, or the contractor returns later, they must complete
            the training modules again.
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

  return (
    <main className="min-h-screen bg-gray-100 text-gray-900">
      <section className="bg-gray-900 text-white">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-gray-300">
            Ozark Roadside Contractor Training Portal
          </p>

          <h1 className="text-4xl font-bold tracking-tight">
            Contractor Training Quiz
          </h1>

          <p className="mt-4 max-w-3xl text-lg text-gray-200">
            Contractors must complete all required training modules in this same
            browser session before taking the quiz. A score of 80% or higher is
            required to generate a completion certificate.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
          <h2 className="text-2xl font-bold">Quiz Instructions</h2>

          <p className="mt-3 text-gray-700">
            Select the best answer for each question. These questions are based
            on the training modules for lockouts, tire changes, fuel delivery,
            jump starts, EV/hybrid considerations, documentation, and claims
            prevention.
          </p>

          <div className="mt-4 rounded-xl bg-yellow-50 p-4 text-yellow-950 ring-1 ring-yellow-200">
            <p className="font-semibold">Passing score: 80% or higher</p>
            <p className="mt-1">
              This quiz has {questions.length} questions. Contractors must answer
              at least 12 correctly to pass.
            </p>
          </div>
        </div>

        <div className="mt-8 space-y-6">
          {questions.map((question, index) => (
            <section
              key={question.id}
              className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200"
            >
              <div className="mb-4 flex flex-wrap items-center gap-3">
                <h2 className="text-2xl font-bold">Question {index + 1}</h2>

                <span className="rounded-full bg-gray-100 px-3 py-1 text-sm font-semibold text-gray-700 ring-1 ring-gray-200">
                  {question.module}
                </span>
              </div>

              <p className="mb-5 font-semibold text-gray-900">
                {question.question}
              </p>

              <div className="space-y-3">
                {question.options.map((option) => (
                  <label
                    key={option.value}
                    className={
                      answers[question.id] === option.value
                        ? "block cursor-pointer rounded-xl bg-gray-900 p-4 text-white ring-1 ring-gray-900"
                        : "block cursor-pointer rounded-xl bg-gray-50 p-4 text-gray-900 ring-1 ring-gray-200 hover:bg-gray-100"
                    }
                  >
                    <input
                      type="radio"
                      name={question.id}
                      className="mr-3"
                      checked={answers[question.id] === option.value}
                      onChange={() => handleAnswer(question.id, option.value)}
                    />
                    {option.label}
                  </label>
                ))}
              </div>
            </section>
          ))}
        </div>

        <section className="mt-8 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
          <button
            type="button"
            onClick={gradeQuiz}
            className="rounded-xl bg-gray-900 px-6 py-3 font-semibold text-white hover:bg-gray-700"
          >
            Submit Quiz
          </button>

          {result && (
            <div className="mt-6 rounded-xl bg-gray-100 p-5 ring-1 ring-gray-200">
              <h2 className="text-2xl font-bold">Quiz Result</h2>

              <p className="mt-3">
                Score:{" "}
                <span className="font-semibold">
                  {result.score} out of {questions.length}
                </span>
              </p>

              <p>
                Percentage:{" "}
                <span className="font-semibold">{result.percentage}%</span>
              </p>

              {result.passed ? (
                <div className="mt-4 rounded-xl bg-green-50 p-4 ring-1 ring-green-200">
                  <p className="font-bold text-green-800">
                    PASSED — Contractor may generate a completion certificate.
                  </p>

                  <Link
                    href="/certificate"
                    className="mt-4 inline-block rounded-xl bg-gray-900 px-6 py-3 font-semibold text-white hover:bg-gray-700"
                  >
                    Generate Completion Certificate
                  </Link>
                </div>
              ) : (
                <div className="mt-4 rounded-xl bg-red-50 p-4 ring-1 ring-red-200">
                  <p className="font-bold text-red-800">
                    FAILED — Contractor must review the training and retake the
                    quiz.
                  </p>
                </div>
              )}
            </div>
          )}
        </section>
      </section>
    </main>
  );
}
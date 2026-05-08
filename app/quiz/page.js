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
  {
    id: "damage-waiver",
    name: "Damage Waiver Tutorial",
    href: "/damage-waiver",
  },
];

const questions = [
  {
    id: "q1",
    module: "Lockout",
    question:
      "You arrive for a lockout and notice scratches already on the driver door near the window trim. What should you do before inserting any tool?",
    options: [
      {
        value: "ignore-existing",
        label:
          "Ignore the scratches because the customer probably already knows they are there.",
      },
      {
        value: "document-notify",
        label:
          "Photograph the scratches, document them, and notify the customer before starting service.",
      },
      {
        value: "unlock-fast",
        label:
          "Unlock the vehicle first so the customer is not delayed, then take photos afterward.",
      },
      {
        value: "refuse-all",
        label:
          "Automatically refuse the service any time existing damage is visible.",
      },
    ],
    correctAnswer: "document-notify",
  },
  {
    id: "q2",
    module: "Lockout",
    question:
      "During a lockout, the air wedge is creating resistance and the top of the door is beginning to flex. What is the correct response?",
    options: [
      {
        value: "inflate-more",
        label:
          "Inflate the wedge more because more space makes the job easier.",
      },
      {
        value: "stop-reassess",
        label:
          "Stop, reduce pressure, reassess the entry point, and avoid bending the door frame.",
      },
      {
        value: "force-tool",
        label:
          "Force the long-reach tool through quickly before the door flexes more.",
      },
      {
        value: "ask-customer-hold",
        label:
          "Ask the customer to pull on the door while you work the tool inside.",
      },
    ],
    correctAnswer: "stop-reassess",
  },
  {
    id: "q3",
    module: "Lockout",
    question:
      "A vehicle has frameless windows and fragile-looking weather stripping. What is the best claims-conscious approach?",
    options: [
      {
        value: "use-extra-pressure",
        label:
          "Use extra wedge pressure because frameless windows need a larger opening.",
      },
      {
        value: "safe-entry-or-stop",
        label:
          "Document the condition, use the safest possible entry point, and stop/contact dispatch if safe entry is uncertain.",
      },
      {
        value: "skip-photos",
        label:
          "Skip photos so the customer does not think you are expecting damage.",
      },
      {
        value: "metal-wedge",
        label:
          "Use a metal wedge because it is thinner and easier to insert.",
      },
    ],
    correctAnswer: "safe-entry-or-stop",
  },
  {
    id: "q4",
    module: "Tire Change",
    question:
      "Before lifting a vehicle, you see the ground is soft gravel and the vehicle is slightly on a slope. What should you do?",
    options: [
      {
        value: "lift-anyway",
        label:
          "Lift the vehicle carefully because the job must be completed on scene.",
      },
      {
        value: "unsafe-location",
        label:
          "Do not lift until the vehicle can be positioned safely or another safe solution is arranged.",
      },
      {
        value: "use-plastic",
        label:
          "Place the jack on a plastic trim panel to spread the load.",
      },
      {
        value: "customer-watch",
        label:
          "Have the customer watch the jack while you remove the tire.",
      },
    ],
    correctAnswer: "unsafe-location",
  },
  {
    id: "q5",
    module: "Tire Change",
    question:
      "A lug nut is swollen and the socket does not fit properly. The customer tells you to do what ever needs to be done to change the tire. What is the correct procedure?",
    options: [
      {
        value: "hammer-socket",
        label:
          "Hammer the socket on and remove it as fast as possible.",
      },
      {
        value: "document-notify-lug",
        label:
          "Document the condition, notify the customer, and avoid forcing the lug nut if damage is likely.",
      },
      {
        value: "skip-lug",
        label:
          "Skip that lug nut and remove the others first.",
      },
      {
        value: "round-it-off",
        label:
          "Use an impact until the lug nut rounds off, then report that it was stuck.",
      },
    ],
    correctAnswer: "document-notify-lug",
  },
  {
    id: "q6",
    module: "Tire Change",
    question:
      "Why should lug nuts, studs, wheel locks, and the wheel area be photographed before removal?",
    options: [
      {
        value: "customer-proof",
        label:
          "To prove the customer was present at the scene.",
      },
      {
        value: "claims-defense",
        label:
          "To document prior damage, missing lugs, rust, swollen lug nuts, stripped studs, or wheel issues before service.",
      },
      {
        value: "social-media",
        label:
          "To have examples for future training or social media.",
      },
      {
        value: "after-only",
        label:
          "They should only be photographed after the spare is installed.",
      },
    ],
    correctAnswer: "claims-defense",
  },
  {
    id: "q7",
    module: "Tire Change",
    question:
      "A lug nut starts to thread crooked while installing the spare tire. What should you do?",
    options: [
      {
        value: "impact-force",
        label:
          "Use the impact wrench to seat it fully.",
      },
      {
        value: "stop-cross-thread",
        label:
          "Stop immediately, inspect for cross-threading or stud damage, document the issue, and notify the customer.",
      },
      {
        value: "leave-loose",
        label:
          "Leave it loose and tell the customer to drive slowly.",
      },
      {
        value: "tighten-last",
        label:
          "Tighten the other lug nuts first, then force the crooked one last.",
      },
    ],
    correctAnswer: "stop-cross-thread",
  },
  {
    id: "q8",
    module: "Fuel Delivery",
    question:
      "The customer says they are not sure whether the vehicle takes gasoline or diesel and tells you to just put a little in it. What should you do?",
    options: [
      {
        value: "guess",
        label:
          "Guess based on the size of the vehicle.",
      },
      {
        value: "verify-before-fuel",
        label:
          "Do not dispense fuel until the correct fuel type is verified from reliable information.",
      },
      {
        value: "regular-gas",
        label:
          "Use regular gasoline because it is the most common fuel type.",
      },
      {
        value: "small-amount",
        label:
          "Add only a small amount of fuel to see if the vehicle starts.",
      },
    ],
    correctAnswer: "verify-before-fuel",
  },
  {
    id: "q9",
    module: "Fuel Delivery",
    question:
      "While pouring fuel in the vehicle, fuel splashes near the filler area and onto the painted surface of the vehicle. What is the best response?",
    options: [
      {
        value: "ignore-drip",
        label:
          "Ignore it if the amount is small.",
      },
      {
        value: "wipe-document",
        label:
          "Stop or slow down, clean minor drips appropriately, avoid smearing fuel across paint, and document the issue if needed.",
      },
      {
        value: "pour-faster",
        label:
          "Pour faster so the container is empty sooner.",
      },
      {
        value: "customer-clean",
        label:
          "Ask the customer to clean it after you leave.",
      },
    ],
    correctAnswer: "wipe-document",
  },
  {
    id: "q10",
    module: "Fuel Delivery",
    question:
      "A vehicle has a capless fuel system and the customer states another technician previously damaged the filler neck by trying to force a fuel nozzle in it. What is the correct action?",
    options: [
      {
        value: "force-spout",
        label:
          "Force the fuel spout in until it opens.",
      },
      {
        value: "use-adapter",
        label:
          "Use the correct capless fuel adapter or funnel and do not force the fuel system.",
      },
      {
        value: "pour-outside",
        label:
          "Pour fuel near the opening and let it run inside slowly.",
      },
      {
        value: "skip-verify",
        label:
          "Skip fuel type verification because capless systems prevent wrong fuel.",
      },
    ],
    correctAnswer: "use-adapter",
  },
  {
    id: "q11",
    module: "Jump Start",
    question:
      "You arrive for a jump-start call in a crowded parking garage. The customer says they are in a hurry and want you to be quick about it. Before connecting any jump equipment, what should the technician do?",
    options: [
      {
        value: "color-only",
        label:
          "Cable color is enough to determine polarity.",
      },
      {
        value: "verify-everything",
        label:
          "Verify positive/negative connection points, battery condition, terminal condition, and safe jump locations before connecting.",
      },
      {
        value: "connect-first",
        label:
          "Connect first, then check for corrosion or damage.",
      },
      {
        value: "customer-start",
        label:
          "Have the customer start cranking while you attach the clamps.",
      },
    ],
    correctAnswer: "verify-everything",
  },
  {
    id: "q12",
    module: "Jump Start",
    question:
      "Which battery condition means the contractor should not attempt a jump start?",
    options: [
      {
        value: "dust",
        label:
          "The battery has dust on top of it.",
      },
      {
        value: "unsafe-battery",
        label:
          "The battery is frozen, cracked, leaking, swollen, smoking, or visibly damaged.",
      },
      {
        value: "older-car",
        label:
          "The vehicle is more than ten years old.",
      },
      {
        value: "dead-battery",
        label:
          "The battery is dead.",
      },
    ],
    correctAnswer: "unsafe-battery",
  },
  {
    id: "q13",
    module: "Jump Start",
    question:
      "After connecting a jump pack, you notice heat, smoke, sparks, or unusual electrical behavior. What should you do?",
    options: [
      {
        value: "continue",
        label:
          "Continue the jump attempt because some sparks are normal.",
      },
      {
        value: "stop-disconnect",
        label:
          "Stop immediately, turn off/disconnect equipment safely, document the issue, and do not continue until the situation is safe.",
      },
      {
        value: "start-fast",
        label:
          "Tell the customer to crank quickly before the battery gets worse.",
      },
      {
        value: "move-clamps-live",
        label:
          "Move the clamps while the jump pack is still powered on.",
      },
    ],
    correctAnswer: "stop-disconnect",
  },
  {
    id: "q14",
    module: "EV / Hybrid",
    question:
      "When jump starting or servicing an EV/hybrid, what must NEVER be used as a connection point?",
    options: [
      {
        value: "12v-points",
        label:
          "Manufacturer-designated 12-volt jump points.",
      },
      {
        value: "high-voltage",
        label:
          "Orange high-voltage cables, battery packs, inverters, charging components, or unknown electrical parts.",
      },
      {
        value: "owner-manual",
        label:
          "A manufacturer-provided jump point listed in the owner information.",
      },
      {
        value: "dispatch-guidance",
        label:
          "A jump location confirmed by dispatch or management.",
      },
    ],
    correctAnswer: "high-voltage",
  },
  {
    id: "q15",
    module: "Claims Prevention",
    question:
      "A customer claims damage occurred during service pointing at a spot on their vehicle, but you believe it was already there and properly documented it. What is the correct response?",
    options: [
      {
        value: "argue",
        label:
          "Argue with the customer and tell them it was already there.",
      },
      {
        value: "admit",
        label:
          "Admit fault so the customer does not get upset.",
      },
      {
        value: "document-report",
        label:
          "Stay professional, take photos, document what the customer reported, and notify management or dispatch.",
      },
      {
        value: "promise-pay",
        label:
          "Promise the company will pay for the repair.",
      },
    ],
    correctAnswer: "document-report",
  },
  {
    id: "q16",
    module: "Claims Prevention",
    question:
      "Which documentation practice provides the strongest claims defense when a customer files a damage claim against you?",
    options: [
      {
        value: "after-only",
        label:
          "Only take photos after the job is complete.",
      },
      {
        value: "before-after-specific",
        label:
          "Take clear before-and-after photos of the exact work area, including existing damage and tool contact areas.",
      },
      {
        value: "far-photo",
        label:
          "Take one photo of the whole vehicle from far away.",
      },
      {
        value: "customer-verbal",
        label:
          "Rely on the customer verbally saying the vehicle looks fine.",
      },
    ],
    correctAnswer: "before-after-specific",
  },
  {
    id: "q17",
    module: "Claims Prevention",
    question:
      "If the correct procedure is unclear or continuing may damage the vehicle, what should the contractor do?",
    options: [
      {
        value: "continue-anyway",
        label:
          "Continue because the job has already been started.",
      },
      {
        value: "customer-decides",
        label:
          "Let the customer decide how the contractor should proceed.",
      },
      {
        value: "stop-contact",
        label:
          "Stop and contact dispatch or management before continuing.",
      },
      {
        value: "guess-document",
        label:
          "Guess the best method and only document it if something goes wrong.",
      },
    ],
    correctAnswer: "stop-contact",
  },
  {
    id: "q18",
    module: "Overall Procedure",
    question:
      "Which statement best describes a successful roadside service?",
    options: [
      {
        value: "speed",
        label:
          "The job was completed as fast as possible.",
      },
      {
        value: "safe-documented",
        label:
          "The job was completed safely, professionally, using correct procedure, with documentation strong enough to defend against a claim.",
      },
      {
        value: "customer-happy",
        label:
          "The customer seemed happy, so documentation is not important.",
      },
      {
        value: "no-management",
        label:
          "The contractor avoided contacting dispatch or management no matter what.",
      },
    ],
    correctAnswer: "safe-documented",
  },
  {
    id: "q19",
    module: "Damage Waiver",
    question:
      "During the damage waiver process, what must happen after entering the job number?",
    options: [
      {
        value: "skip-generate",
        label:
          "Skip the generated information and complete everything manually.",
      },
      {
        value: "generate-job-info",
        label:
          "Click Generate Job Info so the waiver can pull the correct information from Towbook.",
      },
      {
        value: "close-browser",
        label:
          "Close the browser and reopen it after the job is finished.",
      },
      {
        value: "customer-sign-first",
        label:
          "Have the customer sign the final signature area before the service is completed.",
      },
    ],
    correctAnswer: "generate-job-info",
  },
  {
    id: "q20",
    module: "Damage Waiver",
    question:
      "After the customer reads and initials the waiver, what is the correct process?",
    options: [
      {
        value: "close-browser",
        label:
          "Close the browser and reopen the waiver after the job is complete.",
      },
      {
        value: "keep-open-upload-confirm",
        label:
          "Keep the browser open, complete the job, get the final signature if no damage occurred, click Upload Form, and wait for upload confirmation.",
      },
      {
        value: "upload-before-job",
        label:
          "Upload the form before completing the job so it is already in Towbook.",
      },
      {
        value: "skip-final-signature",
        label:
          "Skip the final signature as long as the customer already initialed the release.",
      },
    ],
    correctAnswer: "keep-open-upload-confirm",
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
            Complete all training sections before taking the quiz.
          </h1>

          <p className="mt-4 text-gray-700">
            This quiz is locked until all required training sections are marked
            complete in this same browser session. If the browser is closed, the
            session is reset, or the contractor returns later, they must complete
            the training sections again.
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
            Contractors must complete all required training sections in this same
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
            jump starts, EV/hybrid considerations, documentation, claims
            prevention, and damage waiver procedure.
          </p>

          <div className="mt-4 rounded-xl bg-yellow-50 p-4 text-yellow-950 ring-1 ring-yellow-200">
            <p className="font-semibold">Passing score: 80% or higher</p>
            <p className="mt-1">
              This quiz has {questions.length} questions. Contractors must answer
              at least 16 correctly to pass.
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
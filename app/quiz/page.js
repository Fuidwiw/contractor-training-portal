"use client";

import { useState } from "react";

export default function QuizPage() {
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);

  const correctAnswers = {
    q1: "photos",
    q2: "dispatch",
    q3: "jackpoint",
  };

  function handleAnswer(question, value) {
    setAnswers({
      ...answers,
      [question]: value,
    });
  }

  function gradeQuiz() {
    let score = 0;

    if (answers.q1 === correctAnswers.q1) score++;
    if (answers.q2 === correctAnswers.q2) score++;
    if (answers.q3 === correctAnswers.q3) score++;

    const percentage = Math.round((score / 3) * 100);

    setResult({
      score,
      percentage,
      passed: percentage === 100,
    });
  }

  return (
    <main className="min-h-screen bg-gray-100 text-gray-900">

      <div className="bg-black text-white p-6 shadow-lg">
        <h1 className="text-4xl font-bold">
          Contractor Training Quiz
        </h1>

        <p className="mt-2 text-gray-300">
          Contractors must pass this quiz before being approved to accept jobs.
        </p>
      </div>

      <div className="p-8">

        <div className="bg-white rounded-2xl shadow-md p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-4">
            Quiz Instructions
          </h2>

          <p className="mb-4">
            Select the best answer for each question. A score of 100% is required to pass.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-4">Question 1</h2>

          <p className="mb-4 font-semibold">
            What should a contractor do before touching the customer vehicle?
          </p>

          <div className="space-y-2">
            <label className="block">
              <input type="radio" name="q1" onChange={() => handleAnswer("q1", "start")} /> Start service immediately
            </label>

            <label className="block">
              <input type="radio" name="q1" onChange={() => handleAnswer("q1", "photos")} /> Take before-service photos and video
            </label>

            <label className="block">
              <input type="radio" name="q1" onChange={() => handleAnswer("q1", "claim")} /> Ask the customer to file a claim
            </label>

            <label className="block">
              <input type="radio" name="q1" onChange={() => handleAnswer("q1", "leave")} /> Leave if damage already exists
            </label>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-4">Question 2</h2>

          <p className="mb-4 font-semibold">
            What should a contractor say if a customer reports possible damage?
          </p>

          <div className="space-y-2">
            <label className="block">
              <input type="radio" name="q2" onChange={() => handleAnswer("q2", "admit")} /> “I probably did that.”
            </label>

            <label className="block">
              <input type="radio" name="q2" onChange={() => handleAnswer("q2", "pay")} /> “My boss will pay for it.”
            </label>

            <label className="block">
              <input type="radio" name="q2" onChange={() => handleAnswer("q2", "dispatch")} /> “I documented the vehicle and will report this to dispatch.”
            </label>

            <label className="block">
              <input type="radio" name="q2" onChange={() => handleAnswer("q2", "notmyproblem")} /> “That was already there, not my problem.”
            </label>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-4">Question 3</h2>

          <p className="mb-4 font-semibold">
            During a tire change, where should the jack be placed?
          </p>

          <div className="space-y-2">
            <label className="block">
              <input type="radio" name="q3" onChange={() => handleAnswer("q3", "trim")} /> Under plastic trim
            </label>

            <label className="block">
              <input type="radio" name="q3" onChange={() => handleAnswer("q3", "floor")} /> Under the floor pan
            </label>

            <label className="block">
              <input type="radio" name="q3" onChange={() => handleAnswer("q3", "jackpoint")} /> On the correct approved jack point
            </label>

            <label className="block">
              <input type="radio" name="q3" onChange={() => handleAnswer("q3", "anywhere")} /> Anywhere that feels stable
            </label>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6">
          <button
            onClick={gradeQuiz}
            className="bg-black text-white px-6 py-3 rounded-xl font-semibold"
          >
            Submit Quiz
          </button>

          {result && (
            <div className="mt-6 bg-gray-200 rounded-xl p-4">
              <h2 className="text-2xl font-bold mb-2">
                Quiz Result
              </h2>

              <p>
                Score: {result.score} out of 3
              </p>

              <p>
                Percentage: {result.percentage}%
              </p>

              {result.passed ? (
                <p className="font-bold mt-3">
                  PASSED — Contractor may continue approval process.
                </p>
              ) : (
                <p className="font-bold mt-3">
                  FAILED — Contractor must review training and retake quiz.
                </p>
              )}
            </div>
          )}
        </div>

      </div>
    </main>
  );
}
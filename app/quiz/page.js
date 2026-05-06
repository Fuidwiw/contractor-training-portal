export default function QuizPage() {
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
            This quiz is designed to confirm that contractors understand Ozark Roadside documentation, service procedures, and claims prevention requirements.
          </p>

          <p>
            Later, this page will automatically grade answers and save completion records.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-4">
            Question 1
          </h2>

          <p className="mb-4 font-semibold">
            What should a contractor do before touching the customer vehicle?
          </p>

          <ul className="space-y-2">
            <li><input type="radio" name="q1" /> Start service immediately</li>
            <li><input type="radio" name="q1" /> Take before-service photos and video</li>
            <li><input type="radio" name="q1" /> Ask the customer to file a claim</li>
            <li><input type="radio" name="q1" /> Leave if damage already exists</li>
          </ul>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-4">
            Question 2
          </h2>

          <p className="mb-4 font-semibold">
            What should a contractor say if a customer reports possible damage?
          </p>

          <ul className="space-y-2">
            <li><input type="radio" name="q2" /> “I probably did that.”</li>
            <li><input type="radio" name="q2" /> “My boss will pay for it.”</li>
            <li><input type="radio" name="q2" /> “I documented the vehicle and will report this to dispatch.”</li>
            <li><input type="radio" name="q2" /> “That was already there, not my problem.”</li>
          </ul>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-4">
            Question 3
          </h2>

          <p className="mb-4 font-semibold">
            During a tire change, where should the jack be placed?
          </p>

          <ul className="space-y-2">
            <li><input type="radio" name="q3" /> Under plastic trim</li>
            <li><input type="radio" name="q3" /> Under the floor pan</li>
            <li><input type="radio" name="q3" /> On the correct approved jack point</li>
            <li><input type="radio" name="q3" /> Anywhere that feels stable</li>
          </ul>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">
            Submit Quiz
          </h2>

          <p className="mb-4">
            This button is temporary. Later it will grade the quiz and save the contractor result.
          </p>

          <button className="bg-black text-white px-6 py-3 rounded-xl font-semibold">
            Submit Quiz
          </button>
        </div>

      </div>
    </main>
  );
}
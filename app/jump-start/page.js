export default function JumpStartTraining() {
  return (
    <main className="min-h-screen bg-gray-100 text-gray-900">

      <div className="bg-black text-white p-6 shadow-lg">
        <h1 className="text-4xl font-bold">
          Jump Start Training
        </h1>

        <p className="mt-2 text-gray-300">
          Safe jump start procedures, battery protection, and electronics damage prevention.
        </p>
      </div>

      <div className="p-8">

        <div className="bg-white rounded-2xl shadow-md p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-4">
            Training Video
          </h2>

          <div className="bg-gray-200 rounded-xl p-6 text-center">
            <p className="font-semibold">
              Jump start training video will go here.
            </p>

            <p className="text-sm mt-2 text-gray-600">
              Later, this will play from your NAS or private video storage.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-4">
            Required Jump Start Procedure
          </h2>

          <ol className="list-decimal ml-6 space-y-3">
            <li>Confirm the customer, vehicle, location, and no-start issue before service.</li>
            <li>Take before-service photos of the vehicle, battery area, battery terminals, and dashboard warning lights if visible.</li>
            <li>Record a short video before connecting any jump equipment.</li>
            <li>Inspect the battery for swelling, leaking, corrosion, loose terminals, or visible damage.</li>
            <li>Do not jump start a visibly damaged, leaking, frozen, or unsafe battery.</li>
            <li>Confirm positive and negative connection points before connecting cables or a jump pack.</li>
            <li>Connect positive to positive first.</li>
            <li>Connect negative to a proper ground point when required.</li>
            <li>Do not reverse polarity under any circumstances.</li>
            <li>Start the vehicle only after confirming all connections are secure and correct.</li>
            <li>Disconnect equipment carefully after the vehicle starts.</li>
            <li>Take after-service photos of the battery area and dashboard if warning lights remain.</li>
            <li>Report no-start conditions, warning lights, damaged batteries, sparks, smoke, or customer complaints immediately.</li>
          </ol>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-4">
            Damage Claims This Prevents
          </h2>

          <ul className="list-disc ml-6 space-y-2">
            <li>Reverse polarity claims</li>
            <li>Electrical module damage accusations</li>
            <li>Battery damage claims</li>
            <li>Pre-existing no-start complaints</li>
            <li>Dashboard warning light disputes</li>
            <li>Alternator or charging system accusations</li>
          </ul>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">
            Contractor Acknowledgment
          </h2>

          <p className="mb-4">
            Contractors must verify battery connections and document the vehicle before and after service to protect the customer, contractor, and Ozark Roadside.
          </p>

          <button className="bg-black text-white px-6 py-3 rounded-xl font-semibold">
            Mark Jump Start Training Complete
          </button>
        </div>

      </div>
    </main>
  );
}
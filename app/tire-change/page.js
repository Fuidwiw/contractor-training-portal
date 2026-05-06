export default function TireChangeTraining() {
  return (
    <main className="min-h-screen bg-gray-100 text-gray-900">

      <div className="bg-black text-white p-6 shadow-lg">
        <h1 className="text-4xl font-bold">
          Tire Change Training
        </h1>

        <p className="mt-2 text-gray-300">
          Safe tire change procedures, vehicle protection, and damage claim prevention.
        </p>
      </div>

      <div className="p-8">

        <div className="bg-white rounded-2xl shadow-md p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-4">
            Training Video
          </h2>

          <div className="bg-gray-200 rounded-xl p-6 text-center">
            <p className="font-semibold">
              Tire change training video will go here.
            </p>

            <p className="text-sm mt-2 text-gray-600">
              Later, this will play from your NAS or private video storage.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-4">
            Required Tire Change Procedure
          </h2>

          <ol className="list-decimal ml-6 space-y-3">
            <li>Confirm the customer, vehicle, location, and service request before starting.</li>
            <li>Take before-service photos of the damaged tire, wheel, lug nuts, rocker panels, jack point area, and surrounding body panels.</li>
            <li>Record a short walkaround video before touching the vehicle.</li>
            <li>Locate the correct jack point before lifting the vehicle.</li>
            <li>Never place the jack under plastic trim, floor pans, running boards, battery trays, or suspension parts unless approved by the vehicle manufacturer.</li>
            <li>Use a pinch weld adapter when required.</li>
            <li>Loosen lug nuts before lifting when safe to do so.</li>
            <li>Lift the vehicle slowly and watch for shifting, cracking, or jack movement.</li>
            <li>Install the spare tire securely and tighten lug nuts in a star pattern.</li>
            <li>Torque lug nuts properly when equipment is available.</li>
            <li>Take after-service photos of the wheel, lug nuts, jack point area, rocker panel, and removed tire.</li>
            <li>Report stripped studs, missing wheel locks, damaged wheels, or unsafe spare tires immediately.</li>
          </ol>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-4">
            Damage Claims This Prevents
          </h2>

          <ul className="list-disc ml-6 space-y-2">
            <li>Crushed rocker panels</li>
            <li>Damaged pinch welds</li>
            <li>Scratched wheels</li>
            <li>Broken lug studs</li>
            <li>Missing wheel lock claims</li>
            <li>Loose wheel complaints</li>
            <li>Jack slip damage</li>
          </ul>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">
            Contractor Acknowledgment
          </h2>

          <p className="mb-4">
            Contractors must document tire change work before and after service to protect the customer, contractor, and Ozark Roadside.
          </p>

          <button className="bg-black text-white px-6 py-3 rounded-xl font-semibold">
            Mark Tire Change Training Complete
          </button>
        </div>

      </div>
    </main>
  );
}
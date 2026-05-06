export default function LockoutTraining() {
  return (
    <main className="min-h-screen bg-gray-100 text-gray-900">

      <div className="bg-black text-white p-6 shadow-lg">
        <h1 className="text-4xl font-bold">
          Lockout Training
        </h1>

        <p className="mt-2 text-gray-300">
          Proper vehicle lockout procedures, damage prevention, and required documentation.
        </p>
      </div>

      <div className="p-8">

        <div className="bg-white rounded-2xl shadow-md p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-4">
            Training Video
          </h2>

          <div className="bg-gray-200 rounded-xl p-6 text-center">
            <p className="font-semibold">
              Lockout training video will go here.
            </p>

            <p className="text-sm mt-2 text-gray-600">
              Later, this will play from your NAS or private video storage.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-4">
            Required Lockout Procedure
          </h2>

          <ol className="list-decimal ml-6 space-y-3">
            <li>Confirm the customer, vehicle, and location before starting service.</li>
            <li>Take clear before-service photos of the driver door, passenger door, window trim, weather stripping, door handles, and interior if visible.</li>
            <li>Record a short walkaround video before touching the vehicle.</li>
            <li>Inspect for existing scratches, dents, bent trim, damaged weather stripping, broken handles, or prior lockout damage.</li>
            <li>Use wedges, shields, and long-reach tools carefully to avoid bending the door frame or damaging trim.</li>
            <li>Do not force the tool. Stop and call dispatch if the vehicle presents a high damage risk.</li>
            <li>After unlocking, take after-service photos of the same areas documented before service.</li>
            <li>Report any pre-existing damage, customer complaints, or unusual issues immediately.</li>
          </ol>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-4">
            Damage Claims This Prevents
          </h2>

          <ul className="list-disc ml-6 space-y-2">
            <li>Scratched window tint</li>
            <li>Damaged weather stripping</li>
            <li>Bent door frame</li>
            <li>Scratched paint near window trim</li>
            <li>Broken door handle claims</li>
            <li>Interior damage accusations</li>
          </ul>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">
            Contractor Acknowledgment
          </h2>

          <p className="mb-4">
            Contractors must understand that proper documentation protects the customer, the contractor, and Ozark Roadside.
          </p>

          <button className="bg-black text-white px-6 py-3 rounded-xl font-semibold">
            Mark Lockout Training Complete
          </button>
        </div>

      </div>
    </main>
  );
}
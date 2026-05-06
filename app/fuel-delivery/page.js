export default function FuelDeliveryTraining() {
  return (
    <main className="min-h-screen bg-gray-100 text-gray-900">

      <div className="bg-black text-white p-6 shadow-lg">
        <h1 className="text-4xl font-bold">
          Fuel Delivery Training
        </h1>

        <p className="mt-2 text-gray-300">
          Safe fuel delivery procedures, fuel verification, and contamination prevention.
        </p>
      </div>

      <div className="p-8">

        <div className="bg-white rounded-2xl shadow-md p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-4">
            Training Video
          </h2>

          <div className="bg-gray-200 rounded-xl p-6 text-center">
            <p className="font-semibold">
              Fuel delivery training video will go here.
            </p>

            <p className="text-sm mt-2 text-gray-600">
              Later, this will play from your NAS or private video storage.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-4">
            Required Fuel Delivery Procedure
          </h2>

          <ol className="list-decimal ml-6 space-y-3">
            <li>Confirm the customer, vehicle, location, and requested fuel type before service.</li>
            <li>Ask the customer to confirm whether the vehicle requires gasoline or diesel.</li>
            <li>Take before-service photos of the vehicle, fuel door, fuel cap, and surrounding body panel.</li>
            <li>Record a short video confirming the requested fuel type before dispensing fuel.</li>
            <li>Do not guess fuel type. Stop and call dispatch if there is any uncertainty.</li>
            <li>Use a clean fuel container clearly labeled for the correct fuel type.</li>
            <li>Avoid spills and wipe any minor fuel residue immediately.</li>
            <li>Take after-service photos of the fuel door area and fuel container used.</li>
            <li>Report spills, incorrect fuel concerns, customer disputes, or vehicle starting issues immediately.</li>
          </ol>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-4">
            Damage Claims This Prevents
          </h2>

          <ul className="list-disc ml-6 space-y-2">
            <li>Wrong fuel claims</li>
            <li>Fuel contamination claims</li>
            <li>Fuel spill damage</li>
            <li>Paint damage near fuel door</li>
            <li>Pre-existing no-start complaints</li>
            <li>Customer disputes about fuel type</li>
          </ul>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">
            Contractor Acknowledgment
          </h2>

          <p className="mb-4">
            Contractors must verify fuel type and document the service before and after delivery to protect the customer, contractor, and Ozark Roadside.
          </p>

          <button className="bg-black text-white px-6 py-3 rounded-xl font-semibold">
            Mark Fuel Delivery Training Complete
          </button>
        </div>

      </div>
    </main>
  );
}
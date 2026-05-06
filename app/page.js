export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 text-gray-900">
      
      {/* Header */}
      <div className="bg-black text-white p-6 shadow-lg">
        <h1 className="text-4xl font-bold">
          Ozark Roadside Contractor Training
        </h1>

        <p className="mt-2 text-gray-300">
          Contractor onboarding, safety procedures, and claims prevention training.
        </p>
      </div>

      {/* Main Content */}
      <div className="p-8">

        {/* Welcome Box */}
        <div className="bg-white rounded-2xl shadow-md p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-4">
            Welcome Contractors
          </h2>

          <p className="mb-4">
            All contractors are required to complete training before accepting jobs.
          </p>

          <p className="mb-4">
            This training portal includes:
          </p>

          <ul className="list-disc ml-6 space-y-2">
            <li>Lockout Procedures</li>
            <li>Tire Change Procedures</li>
            <li>Fuel Delivery Procedures</li>
            <li>Jump Start Procedures</li>
            <li>Claims Prevention Training</li>
            <li>Customer Communication Standards</li>
            <li>Photo & Video Documentation Requirements</li>
          </ul>
        </div>

        {/* Training Modules */}
        <div className="bg-white rounded-2xl shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">
            Training Modules
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

			<a href="/lockout" className="bg-gray-200 rounded-xl p-4 block hover:bg-gray-300">
				<h3 className="text-xl font-bold">Lockout Training</h3>
				<p>Proper lockout procedures and damage prevention.</p>
			</a>

            <div className="bg-gray-200 rounded-xl p-4">
              <h3 className="text-xl font-bold">Tire Change Training</h3>
              <p>Safe lifting points, wheel protection, and torque procedures.</p>
            </div>

            <div className="bg-gray-200 rounded-xl p-4">
              <h3 className="text-xl font-bold">Fuel Delivery Training</h3>
              <p>Fuel verification and contamination prevention.</p>
            </div>

            <div className="bg-gray-200 rounded-xl p-4">
              <h3 className="text-xl font-bold">Jump Start Training</h3>
              <p>Battery safety and modern vehicle procedures.</p>
            </div>

          </div>
        </div>

      </div>
    </main>
  );
}
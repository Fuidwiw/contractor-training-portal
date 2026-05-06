export default function ClaimsPreventionTraining() {
  return (
    <main className="min-h-screen bg-gray-100 text-gray-900">

      <div className="bg-black text-white p-6 shadow-lg">
        <h1 className="text-4xl font-bold">
          Claims Prevention Training
        </h1>

        <p className="mt-2 text-gray-300">
          Required documentation, communication, and evidence procedures for protecting contractors and Ozark Roadside.
        </p>
      </div>

      <div className="p-8">

        <div className="bg-white rounded-2xl shadow-md p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-4">
            Training Video
          </h2>

          <div className="bg-gray-200 rounded-xl p-6 text-center">
            <p className="font-semibold">
              Claims prevention training video will go here.
            </p>

            <p className="text-sm mt-2 text-gray-600">
              Later, this will play from your NAS or private video storage.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-4">
            Required Evidence Collection
          </h2>

          <ol className="list-decimal ml-6 space-y-3">
            <li>Take clear before-service photos before touching the vehicle.</li>
            <li>Record a short walkaround video before service begins.</li>
            <li>Document existing scratches, dents, broken trim, wheel damage, warning lights, or unsafe conditions.</li>
            <li>Take close-up photos of the exact work area before and after service.</li>
            <li>Take after-service photos from the same angles as the before photos.</li>
            <li>Immediately report any customer complaint, unusual issue, damage concern, or unsafe condition to dispatch.</li>
            <li>Never delete photos, videos, texts, call logs, or job notes related to a disputed service.</li>
          </ol>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-4">
            What Contractors Should Never Say
          </h2>

          <ul className="list-disc ml-6 space-y-2">
            <li>“I probably did that.”</li>
            <li>“That wasn’t there before.”</li>
            <li>“My boss will just pay for it.”</li>
            <li>“File a claim and they’ll cover it.”</li>
            <li>“I’m not responsible.”</li>
          </ul>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-4">
            Approved Response to Damage Complaints
          </h2>

          <p className="mb-4">
            If a customer reports possible damage, contractors must stay professional and avoid admitting fault.
          </p>

          <div className="bg-gray-200 rounded-xl p-4">
            <p className="font-semibold">
              “I understand your concern. I documented the vehicle condition before and after service. I will report this to dispatch so it can be reviewed through the proper process.”
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-4">
            Common Damage Claim Areas
          </h2>

          <ul className="list-disc ml-6 space-y-2">
            <li>Door frames, window trim, and weather stripping during lockouts</li>
            <li>Rocker panels, pinch welds, wheels, and lug studs during tire changes</li>
            <li>Battery terminals, electronics, and warning lights during jump starts</li>
            <li>Fuel door area, paint, spills, and wrong fuel disputes during fuel delivery</li>
            <li>Pre-existing damage blamed on the contractor after service</li>
          </ul>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">
            Contractor Acknowledgment
          </h2>

          <p className="mb-4">
            Contractors must understand that poor documentation can result in claim liability, removal from the contractor network, or reimbursement responsibility if negligence is proven.
          </p>

          <button className="bg-black text-white px-6 py-3 rounded-xl font-semibold">
            Mark Claims Prevention Training Complete
          </button>
        </div>

      </div>
    </main>
  );
}
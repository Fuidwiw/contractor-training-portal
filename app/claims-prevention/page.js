import TrainingCompleteButton from "../components/TrainingCompleteButton";
import SectionAcknowledgment from "../components/SectionAcknowledgment";

export default function ClaimsPreventionTrainingPage() {
  return (
    <main className="min-h-screen bg-gray-100 text-gray-900">
      <section className="bg-gray-900 text-white">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-gray-300">
            Ozark Roadside Contractor Training
          </p>

          <h1 className="text-4xl font-bold tracking-tight">
            Claims Prevention Training
          </h1>

          <p className="mt-4 max-w-3xl text-lg text-gray-200">
            This module trains contractors on how to prevent damage claims,
            document service properly, communicate professionally, and protect
            both the customer and the company during every roadside assistance
            call.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
            <h2 className="text-xl font-bold">Training Objective</h2>
            <p className="mt-3 text-gray-700">
              Contractors must understand how claims happen, how to prevent
              them, how to document vehicle condition, and how to respond
              professionally when a customer raises a concern.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
            <h2 className="text-xl font-bold">Claims Defense Focus</h2>
            <p className="mt-3 text-gray-700">
              Good documentation is one of the strongest defenses against false,
              mistaken, exaggerated, or unclear claims. Photos and notes should
              clearly show the condition of the vehicle before and after service.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
            <h2 className="text-xl font-bold">Professional Standard</h2>
            <p className="mt-3 text-gray-700">
              Contractors must work carefully, avoid shortcuts, communicate
              clearly, and stop service when a situation becomes unsafe,
              uncertain, or likely to cause damage.
            </p>
          </div>
        </div>

        <SectionAcknowledgment
          moduleId="claims-prevention"
          ackId="overview"
          label="I reviewed the Claims Prevention overview and understand the purpose of this module."
        />

        <div className="mt-8 rounded-2xl border-l-4 border-red-600 bg-red-50 p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-red-800">
            Critical Claims Warning
          </h2>
          <p className="mt-3 text-red-900">
            Never ignore existing damage, customer concerns, unsafe conditions,
            or unusual vehicle conditions. If something looks damaged before
            service begins, document it and notify the customer before
            continuing.
          </p>
        </div>

        <SectionAcknowledgment
          moduleId="claims-prevention"
          ackId="warning"
          label="I reviewed the critical claims warning and understand that existing damage, customer concerns, unsafe conditions, and unusual vehicle conditions must never be ignored."
        />

        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <section className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
            <h2 className="text-2xl font-bold">Common Claim Types</h2>

            <ul className="mt-4 space-y-3 text-gray-700">
              <li>• Scratches, dents, or body damage</li>
              <li>• Damaged door trim or weather stripping</li>
              <li>• Bent door frames after lockouts</li>
              <li>• Damaged pinch welds or rocker panels</li>
              <li>• Missing or damaged lug nuts</li>
              <li>• Stripped, broken, or cross-threaded wheel studs</li>
              <li>• Wrong fuel or fuel spill complaints</li>
              <li>• Electrical damage allegations after jump starts</li>
              <li>• Damaged battery terminals or cables</li>
              <li>• Customer claims that service caused a new problem</li>
            </ul>
          </section>

          <section className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
            <h2 className="text-2xl font-bold">Required Documentation</h2>

            <ul className="mt-4 space-y-3 text-gray-700">
              <li>• Clear pre-service photos</li>
              <li>• Clear post-service photos</li>
              <li>• Photos of existing damage before work begins</li>
              <li>• Notes about unusual vehicle conditions</li>
              <li>• Notes about customer concerns or warnings</li>
              <li>• Photos of work areas touched during service</li>
              <li>• Final service result documented</li>
              <li>• Any refusal, unsafe condition, or stopped service documented</li>
            </ul>
          </section>
        </div>

        <SectionAcknowledgment
          moduleId="claims-prevention"
          ackId="claim-types"
          label="I reviewed the common claim types and required documentation standards."
        />

        <section className="mt-8 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
          <h2 className="text-2xl font-bold">Documentation Procedure</h2>

          <div className="mt-6 space-y-6">
            <div>
              <h3 className="text-lg font-semibold">
                1. Photograph Before Touching the Vehicle
              </h3>
              <p className="mt-2 text-gray-700">
                Take photos before placing tools, jacks, wedges, fuel containers,
                jump equipment, or any other equipment on or near the vehicle.
                The photos should show the service area and any existing damage.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">
                2. Document the Exact Work Area
              </h3>
              <p className="mt-2 text-gray-700">
                For lockouts, photograph the door, window, trim, and weather
                stripping. For tire changes, photograph the wheel, lug nuts, lug
                studs, jack point, rocker panel, and damaged tire. For fuel
                delivery, photograph the fuel door, cap area, surrounding paint,
                and any stains. For jump starts, photograph the battery,
                terminals, cables, and jump points.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">
                3. Notify the Customer of Existing Damage
              </h3>
              <p className="mt-2 text-gray-700">
                If you see existing damage, tell the customer before starting.
                Keep the explanation simple and professional. Example: “I want
                to point out this existing scratch near the door before I begin,
                and I’m going to document it with a photo.”
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">
                4. Stop if the Job Becomes Unsafe or Risky
              </h3>
              <p className="mt-2 text-gray-700">
                If the service may damage the vehicle, if the vehicle condition
                is unsafe, or if the correct procedure is unclear, stop and
                contact dispatch or management before continuing.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">
                5. Photograph After Service
              </h3>
              <p className="mt-2 text-gray-700">
                Take post-service photos from similar angles as the pre-service
                photos. The goal is to show the condition of the vehicle after
                work was completed.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">6. Record the Final Result</h3>
              <p className="mt-2 text-gray-700">
                Document what happened at the end of the call. Examples include:
                vehicle unlocked, spare installed, fuel delivered, vehicle
                started, vehicle did not start, customer declined service, or
                service stopped for safety reasons.
              </p>
            </div>
          </div>
        </section>

        <SectionAcknowledgment
          moduleId="claims-prevention"
          ackId="documentation"
          label="I reviewed the documentation procedure and understand that photos must be taken before service, after service, and of the exact work area."
        />

        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <section className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
            <h2 className="text-2xl font-bold">Customer Communication</h2>

            <div className="mt-4 space-y-4 text-gray-700">
              <p>
                Speak calmly and professionally. Explain what you are going to do
                before beginning service, especially when tools will contact the
                vehicle.
              </p>

              <p>
                If there is a problem, do not argue or admit fault at the scene.
                Listen to the customer, document the concern, take photos, and
                notify management or dispatch.
              </p>

              <p>
                Never promise payment, repairs, refunds, or claim approval. A
                contractor may document and report the concern, but management
                must review any claim.
              </p>
            </div>
          </section>

          <section className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
            <h2 className="text-2xl font-bold">Damage Concern Checklist</h2>

            <ul className="mt-4 space-y-3 text-gray-700">
              <li>• Stay calm and professional</li>
              <li>• Listen to the customer’s concern</li>
              <li>• Do not argue</li>
              <li>• Do not admit fault</li>
              <li>• Do not promise repairs or payment</li>
              <li>• Take clear photos of the concern</li>
              <li>• Photograph the surrounding area</li>
              <li>• Write down what the customer reported</li>
              <li>• Contact management or dispatch</li>
            </ul>
          </section>
        </div>

        <SectionAcknowledgment
          moduleId="claims-prevention"
          ackId="communication"
          label="I reviewed the customer communication and damage concern checklist and understand that I must not argue, admit fault, or promise repairs/payment."
        />

        <section className="mt-8 rounded-2xl bg-yellow-50 p-6 shadow-sm ring-1 ring-yellow-200">
          <h2 className="text-2xl font-bold text-yellow-900">
            Claims-Prevention Examples
          </h2>

          <div className="mt-5 space-y-5 text-yellow-950">
            <div>
              <h3 className="font-semibold">
                Customer Claims Door Was Scratched During Lockout
              </h3>
              <p className="mt-1">
                Prevention: Photograph the door, window trim, weather stripping,
                and existing marks before inserting any wedge or tool. Take
                matching photos after service.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                Customer Claims Lug Stud Was Broken During Tire Change
              </h3>
              <p className="mt-1">
                Prevention: Inspect and photograph lug nuts, lug studs, rust,
                swollen lug nuts, missing lug nuts, wheel locks, and prior wheel
                damage before removing the wheel.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                Customer Claims Fuel Damaged Paint
              </h3>
              <p className="mt-1">
                Prevention: Photograph the fuel door and surrounding paint before
                delivery. Pour slowly, use the correct funnel or adapter, and
                document any existing fuel stains.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                Customer Claims Jump Start Caused Electrical Issues
              </h3>
              <p className="mt-1">
                Prevention: Photograph the battery, terminals, cables, corrosion,
                aftermarket wiring, and jump points before connecting equipment.
                Verify polarity before turning on the jump pack.
              </p>
            </div>
          </div>
        </section>

        <SectionAcknowledgment
          moduleId="claims-prevention"
          ackId="examples"
          label="I reviewed the claims-prevention examples and understand how documentation helps defend lockout, tire change, fuel delivery, and jump start claims."
        />

        <section className="mt-8 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
          <h2 className="text-2xl font-bold">Common Mistakes to Avoid</h2>

          <ul className="mt-4 space-y-3 text-gray-700">
            <li>• Taking photos only after the job is complete</li>
            <li>• Ignoring existing damage because the customer is in a hurry</li>
            <li>• Failing to photograph the exact area where tools were used</li>
            <li>• Continuing service when the correct procedure is unclear</li>
            <li>• Arguing with the customer about damage</li>
            <li>• Admitting fault before management reviews the situation</li>
            <li>• Promising payment, repairs, or reimbursement</li>
            <li>• Leaving without documenting customer complaints</li>
            <li>• Using vague notes instead of specific details</li>
          </ul>
        </section>

        <SectionAcknowledgment
          moduleId="claims-prevention"
          ackId="mistakes"
          label="I reviewed the common claims-prevention mistakes and understand what actions create avoidable claim risk."
        />

        <section className="mt-8 rounded-2xl bg-gray-900 p-6 text-white shadow-sm">
          <h2 className="text-2xl font-bold">Completion Standard</h2>

          <p className="mt-4 text-gray-200">
            A successful claim-prevention process means the contractor inspected
            the vehicle before service, documented existing conditions,
            communicated clearly, worked carefully, photographed the completed
            result, and reported any customer concern immediately.
          </p>
        </section>

        <SectionAcknowledgment
          moduleId="claims-prevention"
          ackId="completion"
          label="I reviewed the Claims Prevention completion standard and understand what is required before marking this section complete."
        />

        <TrainingCompleteButton
          moduleId="claims-prevention"
          moduleName="Claims Prevention Training"
          requiredAckIds={[
            "overview",
            "warning",
            "claim-types",
            "documentation",
            "communication",
            "examples",
            "mistakes",
            "completion",
          ]}
        />
      </section>
    </main>
  );
}
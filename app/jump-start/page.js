import TrainingCompleteButton from "../components/TrainingCompleteButton";
import SectionAcknowledgment from "../components/SectionAcknowledgment";

export default function JumpStartTrainingPage() {
  return (
    <main className="min-h-screen bg-gray-100 text-gray-900">
      <section className="bg-gray-900 text-white">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-gray-300">
            Ozark Roadside Contractor Training
          </p>

          <h1 className="text-4xl font-bold tracking-tight">
            Jump Start Training
          </h1>

          <p className="mt-4 max-w-3xl text-lg text-gray-200">
            This module trains contractors on safe, professional, and
            claims-conscious jump start service. The goal is to correctly assess
            the battery situation, connect equipment safely, prevent electrical
            damage, communicate clearly with the customer, and document the
            vehicle condition before and after service.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
            <h2 className="text-xl font-bold">Training Objective</h2>
            <p className="mt-3 text-gray-700">
              Contractors must know how to identify safe jump start conditions,
              connect equipment correctly, avoid reverse polarity, protect
              vehicle electronics, and recognize when a tow or battery
              replacement may be needed.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
            <h2 className="text-xl font-bold">Claims Defense Focus</h2>
            <p className="mt-3 text-gray-700">
              Jump start claims often involve alleged electrical damage, blown
              fuses, damaged battery terminals, warning lights, no-start
              complaints, reverse polarity, or pre-existing battery and cable
              problems.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
            <h2 className="text-xl font-bold">Professional Standard</h2>
            <p className="mt-3 text-gray-700">
              Never connect jump equipment until the battery location, polarity,
              terminal condition, and vehicle safety concerns have been checked.
              If anything looks unsafe or unclear, stop and verify before
              continuing.
            </p>
          </div>
        </div>

        <SectionAcknowledgment
          moduleId="jump-start"
          ackId="overview"
          label="I reviewed the Jump Start Training overview and understand the purpose of this module."
        />

        <div className="mt-8 rounded-2xl border-l-4 border-red-600 bg-red-50 p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-red-800">
            Critical Safety Warning
          </h2>
          <p className="mt-3 text-red-900">
            Batteries can produce explosive gases, leak acid, spark, overheat,
            or fail internally. Do not jump start a frozen, cracked, leaking,
            swollen, smoking, or visibly damaged battery. Do not connect cables
            if polarity is unclear.
          </p>
        </div>

        <SectionAcknowledgment
          moduleId="jump-start"
          ackId="safety"
          label="I reviewed the Jump Start safety warning and understand that unsafe batteries or unclear polarity mean I must not continue."
        />

        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <section className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
            <h2 className="text-2xl font-bold">Required Equipment</h2>

            <ul className="mt-4 space-y-3 text-gray-700">
              <li>• Professional jump pack or approved booster equipment</li>
              <li>• Jumper cables if used by company procedure</li>
              <li>• Safety glasses</li>
              <li>• Gloves</li>
              <li>• Safety vest</li>
              <li>• Flashlight or headlamp</li>
              <li>• Battery terminal brush if appropriate</li>
              <li>• Phone or camera for documentation photos</li>
            </ul>
          </section>

          <section className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
            <h2 className="text-2xl font-bold">Before You Begin</h2>

            <ul className="mt-4 space-y-3 text-gray-700">
              <li>• Park safely and turn on hazard lights.</li>
              <li>• Confirm the customer and vehicle information.</li>
              <li>• Ask what happened before the vehicle would not start.</li>
              <li>• Locate the battery or manufacturer jump points.</li>
              <li>• Inspect the battery, cables, terminals, and surrounding area.</li>
              <li>• Document corrosion, loose terminals, damaged cables, or prior battery issues.</li>
              <li>• Verify positive and negative connection points before attaching equipment.</li>
              <li>• Take pre-service photos before connecting jump equipment.</li>
            </ul>
          </section>
        </div>

        <SectionAcknowledgment
          moduleId="jump-start"
          ackId="equipment"
          label="I reviewed the required equipment and pre-service inspection steps, including battery condition, cables, terminals, and correct jump points."
        />

        <section className="mt-8 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
          <h2 className="text-2xl font-bold">
            Step-by-Step Jump Start Procedure
          </h2>

          <div className="mt-6 space-y-6">
            <div>
              <h3 className="text-lg font-semibold">1. Inspect the Battery Area</h3>
              <p className="mt-2 text-gray-700">
                Check for corrosion, loose terminals, damaged cables, cracked
                battery case, leaks, swelling, missing covers, aftermarket
                wiring, or signs of previous repair. Photograph anything unusual
                before service begins.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">2. Verify Polarity</h3>
              <p className="mt-2 text-gray-700">
                Identify the positive and negative connection points. Do not rely
                on cable color alone. Look for battery markings, jump post
                markings, or manufacturer-designated jump locations.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">3. Connect Positive First</h3>
              <p className="mt-2 text-gray-700">
                Connect the positive clamp to the positive battery terminal or
                designated positive jump post. Make sure the clamp is secure and
                not touching any other metal part.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">4. Connect Negative Safely</h3>
              <p className="mt-2 text-gray-700">
                Connect the negative clamp to the designated negative jump point
                or a safe ground point according to vehicle procedure. Keep
                clamps away from belts, fans, pulleys, and moving parts.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">5. Power the Jump Pack</h3>
              <p className="mt-2 text-gray-700">
                Turn on the jump pack only after both clamps are attached
                correctly. Watch for warning lights, alarms, sparks, heat, smoke,
                or unusual sounds. Stop immediately if anything appears unsafe.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">6. Start the Vehicle</h3>
              <p className="mt-2 text-gray-700">
                Ask the customer to attempt to start the vehicle. Do not crank
                excessively. If the vehicle does not start after reasonable
                attempts, there may be another mechanical or electrical issue.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">7. Disconnect in Reverse Order</h3>
              <p className="mt-2 text-gray-700">
                Turn off the jump pack before removing clamps. Remove the
                negative clamp first, then the positive clamp. Keep clamps from
                touching each other or vehicle metal during removal.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">8. Confirm Vehicle Status</h3>
              <p className="mt-2 text-gray-700">
                Confirm whether the vehicle started, stayed running, displayed
                warning lights, or failed to start. Advise the customer that a
                weak or failing battery may need testing or replacement.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">9. Take Post-Service Photos</h3>
              <p className="mt-2 text-gray-700">
                Photograph the battery area and connection points after service.
                Document the final result, including whether the vehicle started
                successfully.
              </p>
            </div>
          </div>
        </section>

        <SectionAcknowledgment
          moduleId="jump-start"
          ackId="procedure"
          label="I reviewed the step-by-step Jump Start procedure and understand correct polarity, connection order, start attempt limits, and disconnection order."
        />

        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <section className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
            <h2 className="text-2xl font-bold">Customer Communication</h2>

            <div className="mt-4 space-y-4 text-gray-700">
              <p>
                Explain that you will inspect the battery area and verify the
                correct connection points before attaching equipment.
              </p>

              <p>
                If the battery is corroded, loose, leaking, swollen, damaged, or
                has aftermarket wiring, point it out to the customer before
                continuing and document it.
              </p>

              <p>
                If the vehicle starts, remind the customer that the battery or
                charging system may still need testing. If it does not start,
                explain that the issue may not be a simple dead battery.
              </p>
            </div>
          </section>

          <section className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
            <h2 className="text-2xl font-bold">Documentation Checklist</h2>

            <ul className="mt-4 space-y-3 text-gray-700">
              <li>• Customer and vehicle information confirmed</li>
              <li>• Battery or jump point location identified</li>
              <li>• Pre-service battery area photos taken</li>
              <li>• Corrosion, loose terminals, damaged cables, or aftermarket wiring documented</li>
              <li>• Battery leaks, swelling, cracks, or unsafe conditions documented</li>
              <li>• Positive and negative connection points verified</li>
              <li>• Start attempt result documented</li>
              <li>• Warning lights or continued no-start condition documented</li>
              <li>• Post-service photos taken</li>
            </ul>
          </section>
        </div>

        <SectionAcknowledgment
          moduleId="jump-start"
          ackId="documentation"
          label="I reviewed the Jump Start customer communication and documentation checklist and understand that battery condition, connection points, and final results must be documented."
        />

        <section className="mt-8 rounded-2xl bg-yellow-50 p-6 shadow-sm ring-1 ring-yellow-200">
          <h2 className="text-2xl font-bold text-yellow-900">
            Claims-Prevention Examples
          </h2>

          <div className="mt-5 space-y-5 text-yellow-950">
            <div>
              <h3 className="font-semibold">Electrical Damage Claim</h3>
              <p className="mt-1">
                Cause: Incorrect connection, reverse polarity, or pre-existing
                electrical issue. Prevention: Verify polarity, use designated
                jump points, and document the battery condition before service.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">Battery Terminal Damage Claim</h3>
              <p className="mt-1">
                Cause: Clamps forced onto weak, corroded, or already damaged
                terminals. Prevention: Inspect and photograph terminals before
                connecting equipment.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">Vehicle Still Will Not Start Claim</h3>
              <p className="mt-1">
                Cause: Failed battery, starter issue, alternator issue, security
                system issue, or unrelated mechanical problem. Prevention:
                Document the start attempt result and explain that a jump start
                does not guarantee repair of other vehicle problems.
              </p>
            </div>
          </div>
        </section>

        <SectionAcknowledgment
          moduleId="jump-start"
          ackId="claims"
          label="I reviewed the Jump Start claims-prevention examples and understand how electrical, battery terminal, and no-start claims can happen."
        />

        <section className="mt-8 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
          <h2 className="text-2xl font-bold">EV and Hybrid Considerations</h2>

          <div className="mt-4 space-y-4 text-gray-700">
            <p>
              Many hybrids and electric vehicles still have a 12-volt battery or
              manufacturer-designated jump points. However, they may also have
              high-voltage components that must never be touched or used as a
              connection point.
            </p>

            <p>
              Do not connect jump equipment to orange high-voltage cables,
              battery packs, inverters, charging components, or unknown
              electrical parts. Use only the manufacturer-designated 12-volt jump
              points.
            </p>

            <p>
              If the correct 12-volt jump location is unclear, stop and contact
              dispatch or management before continuing.
            </p>
          </div>
        </section>

        <SectionAcknowledgment
          moduleId="jump-start"
          ackId="ev"
          label="I reviewed the EV and hybrid jump start considerations and understand that high-voltage components must never be used as jump points."
        />

        <section className="mt-8 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
          <h2 className="text-2xl font-bold">Common Mistakes to Avoid</h2>

          <ul className="mt-4 space-y-3 text-gray-700">
            <li>• Connecting equipment before verifying polarity</li>
            <li>• Relying only on cable color instead of markings</li>
            <li>• Ignoring corrosion, loose terminals, or damaged cables</li>
            <li>• Jump starting a leaking, swollen, cracked, or frozen battery</li>
            <li>• Letting clamps touch each other</li>
            <li>• Connecting near moving belts, fans, or pulleys</li>
            <li>• Excessive cranking when the vehicle will not start</li>
            <li>• Touching high-voltage EV or hybrid components</li>
            <li>• Leaving without documenting the final start result</li>
          </ul>
        </section>

        <SectionAcknowledgment
          moduleId="jump-start"
          ackId="mistakes"
          label="I reviewed the common Jump Start mistakes and understand the actions that can cause safety issues, electrical claims, or equipment damage."
        />

        <section className="mt-8 rounded-2xl bg-gray-900 p-6 text-white shadow-sm">
          <h2 className="text-2xl font-bold">Completion Standard</h2>

          <p className="mt-4 text-gray-200">
            A successful jump start means the battery area was inspected,
            polarity was verified, equipment was connected safely, the result
            was documented, and the customer was informed whether the vehicle
            may still need battery, charging system, or mechanical diagnosis.
          </p>
        </section>

        <SectionAcknowledgment
          moduleId="jump-start"
          ackId="completion"
          label="I reviewed the Jump Start completion standard and understand what is required before marking this section complete."
        />

        <TrainingCompleteButton
          moduleId="jump-start"
          moduleName="Jump Start Training"
          requiredAckIds={[
            "overview",
            "safety",
            "equipment",
            "procedure",
            "documentation",
            "claims",
            "ev",
            "mistakes",
            "completion",
          ]}
        />
      </section>
    </main>
  );
}
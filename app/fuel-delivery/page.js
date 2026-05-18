import TrainingCompleteButton from "../components/TrainingCompleteButton";
import SectionAcknowledgment from "../components/SectionAcknowledgment";

export default function FuelDeliveryTrainingPage() {
  return (
    <main className="min-h-screen bg-gray-100 text-gray-900">
      <section className="bg-gray-900 text-white">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-gray-300">
            Ozark Roadside Contractor Training
          </p>

          <h1 className="text-4xl font-bold tracking-tight">
            Fuel Delivery Training
          </h1>

          <p className="mt-4 max-w-3xl text-lg text-gray-200">
            This module trains contractors on safe, professional, and
            claims-conscious fuel delivery service. The goal is to deliver the
            correct fuel type, prevent spills, avoid vehicle damage, communicate
            clearly with the customer, and document the service properly.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
            <h2 className="text-xl font-bold">Training Objective</h2>
            <p className="mt-3 text-gray-700">
              Contractors must know how to confirm the correct vehicle, verify
              fuel type, deliver fuel safely, prevent spills, and document the
              condition of the vehicle before and after service.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
            <h2 className="text-xl font-bold">Claims Defense Focus</h2>
            <p className="mt-3 text-gray-700">
              Fuel delivery claims often involve alleged wrong fuel, fuel spills,
              paint damage, fuel door damage, capless fuel system issues, or a
              vehicle that still will not start after delivery.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
            <h2 className="text-xl font-bold">Professional Standard</h2>
            <p className="mt-3 text-gray-700">
              Never guess the fuel type. Confirm before dispensing. If the fuel
              type is unclear, stop and verify with the customer, fuel door,
              owner information, or dispatch before continuing.
            </p>
          </div>
        </div>

        <SectionAcknowledgment
          moduleId="fuel-delivery"
          ackId="overview"
          label="I reviewed the Fuel Delivery Training overview and understand the purpose of this module."
        />

        <div className="mt-8 rounded-2xl border-l-4 border-red-600 bg-red-50 p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-red-800">
            Critical Safety Warning
          </h2>
          <p className="mt-3 text-red-900">
            Fuel is flammable. Do not smoke, vape, use open flames, or allow
            ignition sources near the service area. Keep fuel away from hot
            exhaust, electrical sparks, and running engines. If a major spill
            occurs, stop service immediately and address the hazard.
          </p>
        </div>

        <SectionAcknowledgment
          moduleId="fuel-delivery"
          ackId="safety"
          label="I reviewed the Fuel Delivery safety warning and understand that fuel is flammable and ignition sources must be avoided."
        />

        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <section className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
            <h2 className="text-2xl font-bold">Required Equipment</h2>

            <ul className="mt-4 space-y-3 text-gray-700">
              <li>• Approved fuel container</li>
              <li>• Correct gasoline or diesel fuel</li>
              <li>• Fuel funnel</li>
              <li>• Capless fuel adapter when needed</li>
              <li>• Nitrile or fuel-resistant gloves</li>
              <li>• Safety vest</li>
              <li>• Absorbent pads or spill cleanup material</li>
              <li>• Flashlight or headlamp</li>
              <li>• Phone or camera for documentation photos</li>
            </ul>
          </section>

          <section className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
            <h2 className="text-2xl font-bold">Before You Begin</h2>

            <ul className="mt-4 space-y-3 text-gray-700">
              <li>• Park safely and turn on hazard lights.</li>
              <li>• Confirm the customer and vehicle information.</li>
              <li>• Confirm the vehicle fuel type before dispensing.</li>
              <li>• Check the fuel door and fuel cap area for existing damage.</li>
              <li>• Look for diesel-only, unleaded-only, premium-only, or warning labels.</li>
              <li>• Confirm whether the vehicle has a capless fuel system.</li>
              <li>• Take pre-service photos of the fuel door and surrounding paint.</li>
              <li>• Do not begin if the fuel type is uncertain.</li>
            </ul>
          </section>
        </div>

        <SectionAcknowledgment
          moduleId="fuel-delivery"
          ackId="equipment"
          label="I reviewed the required equipment and pre-service checks, including fuel type verification, capless fuel systems, and fuel door documentation."
        />

        <section className="mt-8 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
          <h2 className="text-2xl font-bold">
            Step-by-Step Fuel Delivery Procedure
          </h2>

          <div className="mt-6 space-y-6">
            <div>
              <h3 className="text-lg font-semibold">1. Confirm the Fuel Type</h3>
              <p className="mt-2 text-gray-700">
                Ask the customer what fuel the vehicle requires and verify using
                the fuel door, fuel cap, vehicle label, or available vehicle
                information. Never rely only on memory or assumptions.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">
                2. Inspect and Photograph the Fuel Area
              </h3>
              <p className="mt-2 text-gray-700">
                Photograph the fuel door, fuel cap, surrounding paint, quarter
                panel, and any existing scratches, dents, broken hinges, missing
                caps, or fuel stains before service begins.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">3. Prepare the Fuel Container</h3>
              <p className="mt-2 text-gray-700">
                Use only an approved fuel container. Keep the container stable
                and upright. Make sure the spout, funnel, or adapter is clean and
                properly attached before pouring.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">4. Use the Correct Adapter</h3>
              <p className="mt-2 text-gray-700">
                Many newer vehicles use capless fuel systems. Use the proper
                capless fuel adapter or funnel when required. Do not force a
                fuel spout into a capless system.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">5. Pour Slowly and Carefully</h3>
              <p className="mt-2 text-gray-700">
                Pour slowly to prevent splashback, overflow, or spills. Keep
                fuel off paint, trim, tires, brakes, exhaust parts, and the
                ground whenever possible.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">6. Clean Minor Drips Immediately</h3>
              <p className="mt-2 text-gray-700">
                If a small drip occurs, wipe it immediately with appropriate
                absorbent material. Do not smear fuel across painted surfaces.
                Document any spill or pre-existing fuel stain.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">7. Secure the Fuel Door and Cap</h3>
              <p className="mt-2 text-gray-700">
                Reinstall the fuel cap if equipped and close the fuel door
                carefully. Do not slam or force a damaged fuel door.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">8. Confirm Start Attempt</h3>
              <p className="mt-2 text-gray-700">
                Ask the customer to attempt to start the vehicle. If it does not
                start after fuel delivery, explain that there may be another
                mechanical issue and document the result.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">9. Take Post-Service Photos</h3>
              <p className="mt-2 text-gray-700">
                Photograph the fuel area after service, including the fuel door,
                surrounding paint, and ground area if needed. This helps show
                that the job was completed cleanly.
              </p>
            </div>
          </div>
        </section>

        <SectionAcknowledgment
          moduleId="fuel-delivery"
          ackId="procedure"
          label="I reviewed the step-by-step Fuel Delivery procedure and understand that fuel type must be verified before dispensing."
        />

        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <section className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
            <h2 className="text-2xl font-bold">Customer Communication</h2>

            <div className="mt-4 space-y-4 text-gray-700">
              <p>
                Confirm the fuel type with the customer before dispensing fuel.
                If the customer is unsure, explain that the fuel type must be
                verified before service can continue.
              </p>

              <p>
                Tell the customer how much fuel is being delivered and explain
                that fuel delivery may not resolve a no-start condition if the
                vehicle has another issue.
              </p>

              <p>
                If there is prior fuel door damage, missing cap, broken hinge,
                capless fuel adapter issue, or old fuel staining, point it out
                and document it before service.
              </p>
            </div>
          </section>

          <section className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
            <h2 className="text-2xl font-bold">Documentation Checklist</h2>

            <ul className="mt-4 space-y-3 text-gray-700">
              <li>• Customer and vehicle information confirmed</li>
              <li>• Fuel type verified before dispensing</li>
              <li>• Fuel door and fuel cap area photographed</li>
              <li>• Existing fuel door, cap, hinge, or paint damage documented</li>
              <li>• Capless fuel system noted if present</li>
              <li>• Amount and type of fuel delivered noted</li>
              <li>• Any spill, drip, or fuel stain documented</li>
              <li>• Start attempt result documented</li>
              <li>• Post-service photos taken</li>
            </ul>
          </section>
        </div>

        <SectionAcknowledgment
          moduleId="fuel-delivery"
          ackId="documentation"
          label="I reviewed the Fuel Delivery communication and documentation checklist and understand that fuel type, fuel area condition, spills, and start attempt results must be documented."
        />

        <section className="mt-8 rounded-2xl bg-yellow-50 p-6 shadow-sm ring-1 ring-yellow-200">
          <h2 className="text-2xl font-bold text-yellow-900">
            Claims-Prevention Examples
          </h2>

          <div className="mt-5 space-y-5 text-yellow-950">
            <div>
              <h3 className="font-semibold">Wrong Fuel Claim</h3>
              <p className="mt-1">
                Cause: Contractor assumed the fuel type without verifying.
                Prevention: Confirm the fuel type with the customer and vehicle
                markings before dispensing.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">Fuel Spill or Paint Damage Claim</h3>
              <p className="mt-1">
                Cause: Fuel poured too quickly, wrong funnel used, or splashback
                occurred. Prevention: Pour slowly, use the correct adapter, and
                clean minor drips immediately.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">Fuel Door Damage Claim</h3>
              <p className="mt-1">
                Cause: Fuel door or cap was already damaged, or the contractor
                forced it open or closed. Prevention: Inspect, photograph, and
                document prior damage before service.
              </p>
            </div>
          </div>
        </section>

        <SectionAcknowledgment
          moduleId="fuel-delivery"
          ackId="claims"
          label="I reviewed the Fuel Delivery claims-prevention examples and understand how wrong fuel, spill, paint, and fuel door claims can happen."
        />

        <section className="mt-8 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
          <h2 className="text-2xl font-bold">EV and Hybrid Considerations</h2>

          <div className="mt-4 space-y-4 text-gray-700">
            <p>
              Some hybrid vehicles still use gasoline, while full electric
              vehicles do not require fuel delivery. Always confirm the vehicle
              type before accepting or performing a fuel delivery.
            </p>

            <p>
              Plug-in hybrids may have both a fuel door and a charging port. Do
              not confuse the charging port with the fuel door. Never pour fuel
              into any opening unless it is clearly the fuel filler.
            </p>

            <p>
              If the vehicle is electric-only, contact dispatch or management
              because the correct service may be EV charging, towing, or another
              assistance option.
            </p>
          </div>
        </section>

        <SectionAcknowledgment
          moduleId="fuel-delivery"
          ackId="ev"
          label="I reviewed the EV and hybrid fuel delivery considerations and understand that charging ports must never be confused with fuel fillers."
        />

        <section className="mt-8 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
          <h2 className="text-2xl font-bold">Common Mistakes to Avoid</h2>

          <ul className="mt-4 space-y-3 text-gray-700">
            <li>• Guessing the fuel type</li>
            <li>• Failing to photograph the fuel door before service</li>
            <li>• Pouring too quickly and causing splashback</li>
            <li>• Not using a capless fuel adapter when required</li>
            <li>• Forcing a fuel door, cap, or spout</li>
            <li>• Ignoring existing paint damage or fuel stains</li>
            <li>• Leaving without documenting a no-start condition</li>
            <li>• Confusing a charging port with a fuel filler on hybrids</li>
            <li>• Allowing fuel near ignition sources</li>
          </ul>
        </section>

        <SectionAcknowledgment
          moduleId="fuel-delivery"
          ackId="mistakes"
          label="I reviewed the common Fuel Delivery mistakes and understand the actions that commonly lead to damage claims or safety issues."
        />

        <section className="mt-8 rounded-2xl bg-gray-900 p-6 text-white shadow-sm">
          <h2 className="text-2xl font-bold">Completion Standard</h2>

          <p className="mt-4 text-gray-200">
            A successful fuel delivery means the correct fuel was verified,
            delivered safely, spills were prevented, the vehicle condition was
            documented, and the customer was informed if the vehicle still did
            not start after receiving fuel.
          </p>
        </section>

        <SectionAcknowledgment
          moduleId="fuel-delivery"
          ackId="completion"
          label="I reviewed the Fuel Delivery completion standard and understand what is required before marking this section complete."
        />

        <TrainingCompleteButton
          moduleId="fuel-delivery"
          moduleName="Fuel Delivery Training"
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
import TrainingCompleteButton from "../components/TrainingCompleteButton";
export default function TireChangeTrainingPage() {
  return (
    <main className="min-h-screen bg-gray-100 text-gray-900">
      <section className="bg-gray-900 text-white">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-gray-300">
            Ozark Roadside Contractor Training
          </p>

          <h1 className="text-4xl font-bold tracking-tight">
            Tire Change Training
          </h1>

          <p className="mt-4 max-w-3xl text-lg text-gray-200">
            This module trains contractors on safe, professional, and
            claims-conscious tire change service. The goal is to protect the
            customer, protect the vehicle, use the correct lifting points, and
            complete the service without causing damage or creating a safety
            issue.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
            <h2 className="text-xl font-bold">Training Objective</h2>
            <p className="mt-3 text-gray-700">
              Contractors must know how to inspect the scene, identify proper
              jacking locations, remove and install a wheel safely, and document
              the vehicle before and after service.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
            <h2 className="text-xl font-bold">Claims Defense Focus</h2>
            <p className="mt-3 text-gray-700">
              Tire change claims often involve alleged body damage, damaged
              pinch welds, missing lug nuts, stripped studs, wheel damage, or
              vehicles falling from improper lifting.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
            <h2 className="text-xl font-bold">Professional Standard</h2>
            <p className="mt-3 text-gray-700">
              Never lift a vehicle until the location is safe, the vehicle is
              stable, the correct lift point is identified, and the customer has
              been informed of any visible concerns.
            </p>
          </div>
        </div>
<div className="mt-8 rounded-2xl border-l-4 border-red-600 bg-red-50 p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-red-800">
            Critical Safety Warning
          </h2>
          <p className="mt-3 text-red-900">
            Never perform a tire change in an unsafe location. If the vehicle is
            in active traffic, on a blind curve, on a narrow shoulder, on soft
            ground, on a steep incline, or in any location where you cannot work
            safely, contact dispatch or request law enforcement, traffic control,
            or a tow.
          </p>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <section className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
            <h2 className="text-2xl font-bold">Required Equipment</h2>

            <ul className="mt-4 space-y-3 text-gray-700">
              <li>• Floor jack or approved service jack</li>
              <li>• Jack pad or pinch weld adapter when needed</li>
              <li>• Lug wrench or impact wrench</li>
              <li>• Torque wrench when available</li>
              <li>• Wheel chocks</li>
              <li>• Flashlight or headlamp</li>
              <li>• Gloves and safety vest</li>
              <li>• Tire pressure gauge</li>
              <li>• Phone or camera for documentation photos</li>
            </ul>
          </section>

          <section className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
            <h2 className="text-2xl font-bold">Before You Begin</h2>

            <ul className="mt-4 space-y-3 text-gray-700">
              <li>• Park your service vehicle safely with hazard lights on.</li>
              <li>• Confirm the customer and vehicle information.</li>
              <li>• Inspect the vehicle for existing damage.</li>
              <li>• Confirm the spare tire, jack tools, and wheel lock key are present.</li>
              <li>• Verify the spare appears usable and inflated.</li>
			  <li>• Inspect and document prior lug nut, lug stud, wheel, and wheel lock damage.</li>
			  <li>• Look for swollen lug nuts, missing lug nuts, stripped studs, broken studs, rounded lug nuts, cross-threading, rust, or previous improper installation.</li>
              <li>• Notify the customer before continuing if any lug-related issue is found.</li>
			  <li>• Identify the correct manufacturer lift point.</li>
              <li>• Take clear pre-service photos before lifting.</li>
            </ul>
          </section>
        </div>

        <section className="mt-8 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
          <h2 className="text-2xl font-bold">Step-by-Step Tire Change Procedure</h2>

          <div className="mt-6 space-y-6">
            <div>
              <h3 className="text-lg font-semibold">1. Set Up a Safe Work Area</h3>
              <p className="mt-2 text-gray-700">
                Position your service vehicle to increase visibility without
                creating another hazard. Wear a safety vest, use hazard lights,
                and keep yourself away from moving traffic whenever possible.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">2. Inspect and Photograph the Vehicle</h3>
              <p className="mt-2 text-gray-700">
                Photograph the damaged tire, wheel, rocker panel, lower body,
                pinch weld area, bumper area, and any existing damage. This is
                especially important before placing a jack under the vehicle.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">3. Confirm the Spare and Tools</h3>
              <p className="mt-2 text-gray-700">
                Locate the spare tire, jack tools, wheel lock key, and any
                required adapters. Do not proceed if the spare is flat, severely
                damaged, wrong size, or unsafe to install.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">4. Loosen Lug Nuts Before Lifting</h3>
              <p className="mt-2 text-gray-700">
                Break the lug nuts loose while the tire is still touching the
                ground. Do not fully remove them yet. Use steady pressure and
                avoid damaging lug nuts, studs, or wheel surfaces.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">5. Lift from the Correct Jack Point</h3>
              <p className="mt-2 text-gray-700">
                Place the jack only at the manufacturer-approved lift point. Use
                a jack pad or adapter when needed. Watch carefully as the vehicle
                rises to make sure the jack does not slip, bend trim, crush a
                pinch weld, or contact plastic panels.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">6. Remove the Damaged Wheel</h3>
              <p className="mt-2 text-gray-700">
                Remove the lug nuts and keep them together in a safe place.
                Remove the wheel carefully without dragging it across the studs,
                brake components, fender, or customer’s wheel finish.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">7. Install the Spare Tire</h3>
              <p className="mt-2 text-gray-700">
                Mount the spare tire evenly on the hub. Hand-start all lug nuts
                before tightening. Never force a lug nut with an impact if it
                does not thread smoothly by hand.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">8. Tighten in a Star Pattern</h3>
              <p className="mt-2 text-gray-700">
                Snug the lug nuts in a star pattern while the vehicle is raised.
                Lower the vehicle until the tire contacts the ground, then
                tighten again in a star pattern. Use a torque wrench when
                available.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">9. Final Safety Check</h3>
              <p className="mt-2 text-gray-700">
                Confirm all lug nuts are installed and tight, the spare has air,
                the vehicle is lowered completely, tools are removed, and the
                damaged tire and equipment are returned to the customer’s
                vehicle.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">10. Take Post-Service Photos</h3>
              <p className="mt-2 text-gray-700">
                Photograph the installed spare, wheel area, jack point, lower
                body, and completed vehicle condition. This helps defend against
                false or mistaken claims.
              </p>
            </div>
          </div>
        </section>

        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <section className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
            <h2 className="text-2xl font-bold">Customer Communication</h2>

            <div className="mt-4 space-y-4 text-gray-700">
              <p>
                Explain what you are doing before lifting the vehicle. Tell the
                customer if the spare is low, damaged, temporary-use only, or not
                safe for highway speeds.
              </p>

              <p>
                Remind the customer that compact spare tires usually have speed
                and distance limits. Advise them to have the damaged tire
                repaired or replaced as soon as possible.
              </p>

              <p>
                If there is existing damage near the jack point, missing lug
                nuts, swollen lug nuts, broken studs, a missing wheel lock key,
                or unsafe conditions, document it and notify the customer before
                proceeding.
              </p>
            </div>
          </section>

          <section className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
            <h2 className="text-2xl font-bold">Documentation Checklist</h2>

            <ul className="mt-4 space-y-3 text-gray-700">
              <li>• Customer and vehicle information confirmed</li>
              <li>• Scene safety assessed</li>
              <li>• Damaged tire photographed</li>
              <li>• Jack point photographed before lifting</li>
              <li>• Existing damage documented</li>
              <li>• Spare tire condition checked</li>
			  <li>• Prior lug nut, lug stud, wheel, or wheel lock damage documented</li>
			  <li>• Missing, swollen, rounded, stripped, broken, rusted, or cross-threaded lug issues photographed</li>
			  <li>• Customer notified of any lug-related concern before service continued</li>
              <li>• Lug nut or wheel lock issues documented</li>
              <li>• Installed spare photographed</li>
              <li>• Final condition photographed after service</li>
            </ul>
          </section>
        </div>

        <section className="mt-8 rounded-2xl bg-yellow-50 p-6 shadow-sm ring-1 ring-yellow-200">
          <h2 className="text-2xl font-bold text-yellow-900">
            Claims-Prevention Examples
          </h2>

          <div className="mt-5 space-y-5 text-yellow-950">
            <div>
              <h3 className="font-semibold">Pinch Weld Damage Claim</h3>
              <p className="mt-1">
                Cause: Jack placed in the wrong location or without the correct
                adapter. Prevention: Identify the manufacturer lift point and use
                a jack pad or adapter when needed.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">Missing Lug Nut Claim</h3>
              <p className="mt-1">
                Cause: Lug nuts not kept together or not counted before final
                inspection. Prevention: Place lug nuts in a controlled location
                and confirm all are reinstalled before leaving.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">Wheel or Stud Damage Claim</h3>
              <p className="mt-1">
                Cause: Cross-threading, over-tightening, or forcing lug nuts.
                Prevention: Hand-start all lug nuts and tighten carefully in a
                star pattern.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-8 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
          <h2 className="text-2xl font-bold">EV and Newer Vehicle Considerations</h2>

          <div className="mt-4 space-y-4 text-gray-700">
            <p>
              Electric vehicles may have heavy battery packs, special lift
              points, underbody panels, sensors, and manufacturer-specific
              jacking requirements. Incorrect lifting can cause serious vehicle
              damage.
            </p>

            <p>
              Never place a jack under a battery pack, plastic underbody shield,
              high-voltage component, cooling line, or unknown underbody
              structure. If the correct lift point is unclear, stop and contact
              dispatch or management before proceeding.
            </p>

            <p>
              Some newer vehicles do not include spare tires. They may include
              inflator kits, sealant kits, run-flat tires, or require towing
              instead of a tire change.
            </p>
          </div>
        </section>

        <section className="mt-8 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
          <h2 className="text-2xl font-bold">Common Mistakes to Avoid</h2>

          <ul className="mt-4 space-y-3 text-gray-700">
            <li>• Working too close to active traffic</li>
            <li>• Lifting on soft, sloped, or unstable ground</li>
            <li>• Jacking from the wrong location</li>
            <li>• Failing to photograph the jack point before lifting</li>
            <li>• Using an impact without hand-starting lug nuts</li>
            <li>• Losing or forgetting lug nuts</li>
            <li>• Installing an unsafe or flat spare tire</li>
            <li>• Forgetting to return the damaged tire or tools</li>
            <li>• Leaving without warning the customer about spare tire limits</li>
          </ul>
        </section>

        <section className="mt-8 rounded-2xl bg-gray-900 p-6 text-white shadow-sm">
          <h2 className="text-2xl font-bold">Completion Standard</h2>

          <p className="mt-4 text-gray-200">
            A successful tire change means the vehicle was serviced safely, the
            correct jack point was used, the spare was installed properly, the
            customer was informed of spare tire limits, and the job was
            documented well enough to defend against a claim.
          </p>
		  		  	<TrainingCompleteButton moduleId="tire-change" moduleName="Tire Change Training" />
        </section>
      </section>
    </main>
  );
}
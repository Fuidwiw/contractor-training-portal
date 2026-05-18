import TrainingCompleteButton from "../components/TrainingCompleteButton";
import SectionAcknowledgment from "../components/SectionAcknowledgment";
export default function LockoutTrainingPage() {
  return (
    <main className="min-h-screen bg-gray-100 text-gray-900">
      <section className="bg-gray-900 text-white">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-gray-300">
            Ozark Roadside Contractor Training
          </p>

          <h1 className="text-4xl font-bold tracking-tight">
            Vehicle Lockout Training
          </h1>

          <p className="mt-4 max-w-3xl text-lg text-gray-200">
            This module trains contractors on safe, professional, and
            claims-conscious vehicle lockout service. The goal is to unlock the
            vehicle without damage, protect the customer’s property, document the
            job properly, and reduce preventable claims.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
            <h2 className="text-xl font-bold">Training Objective</h2>
            <p className="mt-3 text-gray-700">
              Contractors must understand how to perform lockout services using
              proper tools, controlled technique, customer communication, and
              careful documentation.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
            <h2 className="text-xl font-bold">Claims Defense Focus</h2>
            <p className="mt-3 text-gray-700">
              Every lockout should be handled as if the job may later be
              reviewed. Clear photos, notes, and professional communication help
              protect both the contractor and the company.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
            <h2 className="text-xl font-bold">Professional Standard</h2>
            <p className="mt-3 text-gray-700">
              Never rush, force, pry aggressively, or improvise with improper
              tools. A clean, careful service is more important than speed.
            </p>
          </div>
        </div>
		
		<SectionAcknowledgment
			moduleId="lockout"
			ackId="overview"
			label="I reviewed the Lockout Training overview and understand the purpose of this module."
		/>				  

<div className="mt-8 rounded-2xl border-l-4 border-red-600 bg-red-50 p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-red-800">
            Critical Safety Warning
          </h2>
          <p className="mt-3 text-red-900">
            Before unlocking any vehicle, check for children, pets, medical
            emergencies, running vehicles, extreme temperatures, traffic hazards,
            and unsafe surroundings. If there is an emergency or someone is in
            danger, contact emergency services immediately.
          </p>
        </div>

		<SectionAcknowledgment
		  moduleId="lockout"
		  ackId="safety"
		  label="I reviewed the Lockout safety warnings and understand that I must stop if safe entry is uncertain."
		/>

        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <section className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
            <h2 className="text-2xl font-bold">Required Equipment</h2>

            <ul className="mt-4 space-y-3 text-gray-700">
              <li>• Long-reach lockout tool</li>
              <li>• Inflatable air wedge</li>
              <li>• Plastic wedge or non-marring wedge</li>
              <li>• Protective sleeve or door guard</li>
              <li>• Flashlight or headlamp</li>
              <li>• Gloves</li>
              <li>• Phone or camera for documentation photos</li>
              <li>• Basic customer verification process</li>
            </ul>
          </section>

          <section className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
            <h2 className="text-2xl font-bold">Before You Begin</h2>

            <ul className="mt-4 space-y-3 text-gray-700">
              <li>• Confirm the customer’s name and vehicle location.</li>
              <li>• Confirm the year, make, model, and color of the vehicle.</li>
              <li>• Ask the customer where the keys are located.</li>
              <li>• Check for visible damage before touching the vehicle.</li>
              <li>• Take clear pre-service photos.</li>
              <li>• Explain that you will use professional lockout tools.</li>
              <li>• Do not begin if ownership or authorization is questionable.</li>
            </ul>
          </section>
        </div>

        <section className="mt-8 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
          <h2 className="text-2xl font-bold">Step-by-Step Lockout Procedure</h2>

          <div className="mt-6 space-y-6">
            <div>
              <h3 className="text-lg font-semibold">1. Inspect the Vehicle</h3>
              <p className="mt-2 text-gray-700">
                Walk around the vehicle and inspect the doors, windows, weather
                stripping, mirror area, paint, trim, and interior lock position.
                Look for existing scratches, dents, loose trim, cracked glass,
                prior damage, or signs that someone else already attempted entry.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">2. Take Pre-Service Photos</h3>
              <p className="mt-2 text-gray-700">
                Photograph the service side of the vehicle, door frame, window,
                trim, weather stripping, and any existing damage. These photos
                are important if a customer later claims the damage happened
                during the lockout.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">3. Choose the Safest Entry Point</h3>
              <p className="mt-2 text-gray-700">
                Use the door and access point that allows the least pressure on
                the vehicle. Avoid damaged doors, loose trim, frameless windows,
                heavily tinted windows, or areas where the weather stripping is
                already weak.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">4. Insert the Wedge Carefully</h3>
              <p className="mt-2 text-gray-700">
                Use a plastic or protected wedge first. Insert the air wedge
                slowly and only inflate it enough to create working space. Do
                not overinflate. Excess pressure can bend the door frame, damage
                the weather stripping, or create wind noise complaints.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">5. Use the Long-Reach Tool</h3>
              <p className="mt-2 text-gray-700">
                Insert the long-reach tool with a protective sleeve when
                possible. Move slowly and avoid scraping glass, dashboard
                surfaces, trim, leather, buttons, wiring, or electronic controls.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">6. Unlock Without Forcing</h3>
              <p className="mt-2 text-gray-700">
                Use controlled movement to press the unlock button, pull the
                handle, or operate the lock mechanism. Never yank, twist, pry,
                or force the tool. If access is not working, stop and reassess.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">7. Inspect After Entry</h3>
              <p className="mt-2 text-gray-700">
                After the vehicle is unlocked, inspect the door, glass, trim,
                weather stripping, and interior contact points. Confirm the
                vehicle opens and closes normally.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">8. Take Post-Service Photos</h3>
              <p className="mt-2 text-gray-700">
                Take photos of the same areas photographed before service. This
                creates a clear before-and-after record showing the condition of
                the vehicle at completion.
              </p>
            </div>
          </div>
        </section>

		<SectionAcknowledgment
		  moduleId="lockout"
		  ackId="procedure"
		  label="I reviewed the step-by-step Lockout procedure and understand that tools must be used carefully to avoid vehicle damage."
		/>

        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <section className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
            <h2 className="text-2xl font-bold">Customer Communication</h2>

            <div className="mt-4 space-y-4 text-gray-700">
              <p>
                Explain the process before starting. Let the customer know you
                will use wedges and a long-reach tool to unlock the vehicle as
                carefully as possible.
              </p>

              <p>
                If the vehicle has fragile trim, frameless windows, existing
                damage, aftermarket tint, or a difficult lock location, tell the
                customer before continuing.
              </p>

              <p>
                Stay calm and professional. Never argue with the customer. If a
                concern arises, document it clearly and contact dispatch or
                management when needed.
              </p>
            </div>
          </section>

          <section className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
            <h2 className="text-2xl font-bold">Documentation Checklist</h2>

            <ul className="mt-4 space-y-3 text-gray-700">
              <li>• Customer name confirmed</li>
              <li>• Vehicle year, make, model, and color confirmed</li>
              <li>• Pre-existing damage photographed</li>
              <li>• Pre-service photos taken</li>
              <li>• Lockout method noted</li>
              <li>• Any unusual issues documented</li>
              <li>• Post-service photos taken</li>
              <li>• Customer notified when vehicle was unlocked</li>
            </ul>
          </section>
        </div>

		<SectionAcknowledgment
		  moduleId="lockout"
		  ackId="documentation"
		  label="I reviewed the Lockout documentation checklist and understand that pre-service and post-service photos are required for claims defense."
		/>

        <section className="mt-8 rounded-2xl bg-yellow-50 p-6 shadow-sm ring-1 ring-yellow-200">
          <h2 className="text-2xl font-bold text-yellow-900">
            Claims-Prevention Examples
          </h2>

          <div className="mt-5 space-y-5 text-yellow-950">
            <div>
              <h3 className="font-semibold">Door Frame Damage Claim</h3>
              <p className="mt-1">
                Cause: Air wedge overinflated or placed incorrectly. Prevention:
                Use minimum pressure, protect the contact point, and stop if the
                door begins to flex.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">Weather Stripping Complaint</h3>
              <p className="mt-1">
                Cause: Tool dragged across rubber seals or wedge forced into a
                weak area. Prevention: Use protective sleeves and avoid scraping
                or pulling on seals.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">Interior Scratch Claim</h3>
              <p className="mt-1">
                Cause: Long-reach tool contacted trim, dashboard, buttons, or
                leather. Prevention: Move slowly and keep the tool away from
                finished surfaces whenever possible.
              </p>
            </div>
          </div>
        </section>

		<SectionAcknowledgment
		  moduleId="lockout"
		  ackId="claims"
		  label="I reviewed the Lockout claims-prevention examples and understand how lockout damage claims can happen."
		/>

        <section className="mt-8 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
          <h2 className="text-2xl font-bold">EV and Newer Vehicle Considerations</h2>

          <div className="mt-4 space-y-4 text-gray-700">
            <p>
              Electric vehicles and newer vehicles may have flush handles,
              frameless windows, sensitive glass, electronic latches, automatic
              locking systems, and interior screens or controls near the access
              path.
            </p>

            <p>
              Do not place pressure on fragile trim, cameras, sensors, charging
              doors, or glass edges. Avoid contacting screens, steering wheel
              controls, seat controls, or electronic shifters with the long-reach
              tool.
            </p>

            <p>
              If the vehicle design makes safe entry uncertain, stop and contact
              dispatch or management before continuing.
            </p>
          </div>
        </section>

        <section className="mt-8 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
          <h2 className="text-2xl font-bold">Common Mistakes to Avoid</h2>

          <ul className="mt-4 space-y-3 text-gray-700">
            <li>• Starting service without inspecting the vehicle first</li>
            <li>• Failing to take pre-service and post-service photos</li>
            <li>• Overinflating the air wedge</li>
            <li>• Using metal tools without protection</li>
            <li>• Rushing because the customer is impatient</li>
            <li>• Forcing the long-reach tool into a poor angle</li>
            <li>• Ignoring existing damage</li>
            <li>• Touching interior screens, buttons, leather, or trim</li>
            <li>• Leaving without documenting unusual conditions</li>
          </ul>
        </section>

        <section className="mt-8 rounded-2xl bg-gray-900 p-6 text-white shadow-sm">
          <h2 className="text-2xl font-bold">Completion Standard</h2>

          <p className="mt-4 text-gray-200">
            A successful lockout service is not just unlocking the vehicle. It
            means the vehicle was opened safely, the customer was treated
            professionally, damage was avoided, and the job was documented well
            enough to defend against a false or mistaken claim.
          </p>
		  
		 <SectionAcknowledgment
			 moduleId="lockout"
			 ackId="completion"
			 label="I reviewed the Lockout completion standard and understand what is required before marking this section complete."
		/>
			<TrainingCompleteButton
			  moduleId="lockout"
			  moduleName="Lockout Training"
			  requiredAckIds={[
				"overview",
				"safety",
				"procedure",
				"documentation",
				"claims",
				"completion",
			  ]}
			/>
        </section>
      </section>
    </main>
  );
}
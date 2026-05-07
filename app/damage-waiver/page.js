import Image from "next/image";
import TrainingCompleteButton from "../components/TrainingCompleteButton";

export default function DamageWaiverPage() {
  return (
    <main className="min-h-screen bg-gray-100 text-gray-900">
      <section className="bg-gray-900 text-white">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-gray-300">
            Ozark Roadside Contractor Training
          </p>

          <h1 className="text-4xl font-bold tracking-tight">
            Damage Waiver Tutorial
          </h1>

          <p className="mt-4 max-w-4xl text-lg text-gray-200">
            This section explains exactly how to use the Ozark Roadside damage
            waiver system from login through final upload. This section is
            required before quiz access, but it is not part of the quiz
            questions.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="rounded-2xl border-l-4 border-yellow-500 bg-yellow-50 p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-yellow-900">
            Required Before Quiz Access
          </h2>

          <p className="mt-3 text-yellow-950">
            Contractors must review this waiver tutorial and mark it complete
            before they can access the quiz. This page is not tested on the
            quiz, but it is still a required training section.
          </p>
        </div>

        <section className="mt-8 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
          <h2 className="text-2xl font-bold">Why the Damage Waiver Matters</h2>

          <div className="mt-4 space-y-4 text-gray-700">
            <p>
              The damage waiver is a critical part of Ozark Roadside’s
              documentation and claims-defense process. It helps show that the
              customer was informed, that the service was authorized, and that
              the proper acknowledgment was completed before and after the job.
            </p>

            <p>
              The waiver does <strong>not</strong> give permission to be
              careless. Contractors must still use proper procedures, protect
              the vehicle, document prior damage, and avoid preventable damage.
            </p>

            <p>
              The contractor must complete the waiver properly, keep the form
              open during the job, and wait for the upload to finish before
              closing the browser.
            </p>
          </div>
        </section>

        <section className="mt-8 rounded-2xl bg-blue-50 p-6 shadow-sm ring-1 ring-blue-200">
          <h2 className="text-2xl font-bold text-blue-900">
            Full Process Overview
          </h2>

          <ol className="mt-4 space-y-3 text-blue-950">
            <li>1. Log in using your Towbook username.</li>
            <li>2. Enter the job number and click Generate Job Info.</li>
            <li>3. Verify the pulled information.</li>
            <li>4. Fill in the vehicle mileage manually.</li>
            <li>5. Select the proper job type.</li>
            <li>6. Have the customer read the release and initial it.</li>
            <li>7. Do not close the browser.</li>
            <li>8. Complete the service.</li>
            <li>
              9. If no damage occurred, have the customer sign at the bottom.
            </li>
            <li>10. Click Upload Form.</li>
            <li>
              11. Wait until the system confirms the upload is complete before
              closing the browser.
            </li>
          </ol>
        </section>

        <section className="mt-8 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-gray-500">
                Step 1
              </p>

              <h2 className="text-2xl font-bold">
                Log In With Your Towbook Username
              </h2>

              <div className="mt-4 space-y-4 text-gray-700">
                <p>
                  Start by logging into the waiver system using your{" "}
                  <strong>Towbook username</strong>.
                </p>

                <p>
                  Access is based on your Towbook user account. If your username
                  is not recognized as an active Towbook user, you may not be
                  able to continue.
                </p>

                <p>
                  Make sure you enter the correct Towbook username before moving
                  to the next step.
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl bg-gray-50 shadow-sm ring-1 ring-gray-200">
              <Image
                src="/damage-waiver/login-screen.png"
                alt="Damage waiver login screen"
                width={1200}
                height={800}
                className="h-auto w-full"
              />
            </div>
          </div>
        </section>

        <section className="mt-8 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
            <div className="overflow-hidden rounded-2xl bg-gray-50 shadow-sm ring-1 ring-gray-200 lg:order-2">
              <Image
                src="/damage-waiver/blank-form.png"
                alt="Blank damage waiver form"
                width={1200}
                height={900}
                className="h-auto w-full"
              />
            </div>

            <div className="lg:order-1">
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-gray-500">
                Step 2
              </p>

              <h2 className="text-2xl font-bold">
                Start the Form and Enter the Job Number
              </h2>

              <div className="mt-4 space-y-4 text-gray-700">
                <p>
                  Once logged in, you will see the damage waiver form. The first
                  thing you need to do is enter the correct{" "}
                  <strong>job number</strong>.
                </p>

                <p>
                  The job number is what the system uses to connect the waiver
                  to the correct Towbook call.
                </p>

                <p>
                  Make sure the job number is correct before generating the job
                  info.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-8 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-gray-500">
                Step 3
              </p>

              <h2 className="text-2xl font-bold">
                Click Generate Job Info to Pull Information From Towbook
              </h2>

              <div className="mt-4 space-y-4 text-gray-700">
                <p>
                  After entering the job number, click{" "}
                  <strong>Generate Job Info</strong>.
                </p>

                <p>
                  This pulls the job information over from Towbook for you.
                  That helps tie the waiver to the correct call record.
                </p>

                <p>
                  Once the information loads, review it and make sure it matches
                  the job you are actually working.
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl bg-gray-50 shadow-sm ring-1 ring-gray-200">
              <Image
                src="/damage-waiver/generate-job-info.png"
                alt="Generate Job Info section on damage waiver"
                width={1200}
                height={900}
                className="h-auto w-full"
              />
            </div>
          </div>
        </section>

        <section className="mt-8 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
            <div className="overflow-hidden rounded-2xl bg-gray-50 shadow-sm ring-1 ring-gray-200 lg:order-2">
              <Image
                src="/damage-waiver/job-select.png"
                alt="Job type selection area on damage waiver"
                width={1200}
                height={900}
                className="h-auto w-full"
              />
            </div>

            <div className="lg:order-1">
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-gray-500">
                Step 4
              </p>

              <h2 className="text-2xl font-bold">
                Fill In the Mileage and Select the Proper Job Type
              </h2>

              <div className="mt-4 space-y-4 text-gray-700">
                <p>
                  After the job information is pulled in, you must{" "}
                  <strong>manually fill in the vehicle mileage</strong> from the
                  vehicle.
                </p>

                <p>
                  Do not guess. Read the mileage directly from the vehicle and
                  enter it accurately.
                </p>

                <p>
                  Then select the <strong>proper job type</strong> for the
                  service you are actually performing, such as lockout, tire
                  service, fuel delivery, jump start, or out of scope service.
                </p>

                <p>
                  Choosing the correct job type is important because the waiver
                  needs to match the actual service performed.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-8 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-gray-500">
                Step 5
              </p>

              <h2 className="text-2xl font-bold">
                Have the Customer Read the Release and Initial It
              </h2>

              <div className="mt-4 space-y-4 text-gray-700">
                <p>
                  Once the correct job type is selected, the general release
                  section appears. The customer must be given the opportunity to
                  <strong> read the release</strong>.
                </p>

                <p>
                  Do not rush them through it. Make sure they understand what
                  they are acknowledging.
                </p>

                <p>
                  After they read it, have the customer place their{" "}
                  <strong>initials</strong> in the appropriate area.
                </p>

                <p className="font-semibold text-red-700">
                  Do not close the browser after this. Leave the waiver open
                  while you complete the job.
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl bg-gray-50 shadow-sm ring-1 ring-gray-200">
              <Image
                src="/damage-waiver/job-type-general-release.png"
                alt="General release section of damage waiver"
                width={1200}
                height={900}
                className="h-auto w-full"
              />
            </div>
          </div>
        </section>

        <section className="mt-8 rounded-2xl border-l-4 border-red-500 bg-red-50 p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-red-800">
            Critical Warning — Do Not Close the Browser
          </h2>

          <div className="mt-4 space-y-4 text-red-950">
            <p>
              After the customer initials the waiver, leave the browser open.
            </p>

            <p>
              You must complete the roadside job first, then return to the same
              waiver page for the final signature and upload process.
            </p>

            <p className="font-semibold">
              If you close the browser too early, you may lose the waiver
              progress and create documentation problems.
            </p>
          </div>
        </section>

        <section className="mt-8 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
            <div className="overflow-hidden rounded-2xl bg-gray-50 shadow-sm ring-1 ring-gray-200 lg:order-2">
              <Image
                src="/damage-waiver/signer-verification.png"
                alt="Signer verification and customer signature section"
                width={1200}
                height={900}
                className="h-auto w-full"
              />
            </div>

            <div className="lg:order-1">
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-gray-500">
                Step 6
              </p>

              <h2 className="text-2xl font-bold">
                Complete the Job, Then Get the Final Customer Signature
              </h2>

              <div className="mt-4 space-y-4 text-gray-700">
                <p>
                  After the service is finished, return to the bottom portion of
                  the waiver and complete the final acknowledgment/signature
                  area.
                </p>

                <p>
                  If you did <strong>no damage</strong>, have the customer sign
                  the bottom portion of the form.
                </p>

                <p>
                  Make sure the signer verification is completed properly and
                  that the signer is the customer or authorized owner/operator
                  when required.
                </p>

                <p>
                  If there is a problem, a refusal, or a possible damage issue,
                  document it properly and follow company procedure.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-8 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-gray-500">
                Step 7
              </p>

              <h2 className="text-2xl font-bold">
                Click Upload Form and Wait for Confirmation
              </h2>

              <div className="mt-4 space-y-4 text-gray-700">
                <p>
                  Once the waiver is fully completed, click{" "}
                  <strong>Upload Form</strong>.
                </p>

                <p>
                  This uploads the completed waiver to Towbook for you.
                </p>

                <p className="font-semibold text-red-700">
                  You must wait for the system to tell you that the upload is
                  complete before closing the browser or leaving the page.
                </p>

                <p>
                  Do not assume it uploaded just because you clicked the button.
                  Wait for the completion message.
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl bg-gray-50 shadow-sm ring-1 ring-gray-200">
              <Image
                src="/damage-waiver/upload-form-button.png"
                alt="Upload form button on damage waiver"
                width={1200}
                height={900}
                className="h-auto w-full"
              />
            </div>
          </div>
        </section>

        <section className="mt-8 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
          <h2 className="text-2xl font-bold">Common Mistakes to Avoid</h2>

          <ul className="mt-4 space-y-3 text-gray-700">
            <li>• Logging in with the wrong Towbook username.</li>
            <li>• Entering the wrong job number.</li>
            <li>• Forgetting to click Generate Job Info.</li>
            <li>• Not filling in the vehicle mileage.</li>
            <li>• Selecting the wrong job type.</li>
            <li>• Letting the customer skip reading the release.</li>
            <li>• Forgetting to get the customer initials.</li>
            <li>• Closing the browser before the job is completed.</li>
            <li>• Forgetting the final customer signature when appropriate.</li>
            <li>• Clicking Upload Form and leaving before the upload finishes.</li>
          </ul>
        </section>

        <section className="mt-8 rounded-2xl bg-green-50 p-6 shadow-sm ring-1 ring-green-200">
          <h2 className="text-2xl font-bold text-green-900">
            Completion Standard
          </h2>

          <p className="mt-4 text-green-950">
            A contractor has completed this section when they understand the
            full damage waiver process:
          </p>

          <ul className="mt-4 space-y-2 text-green-950">
            <li>• Log in with Towbook username</li>
            <li>• Enter job number</li>
            <li>• Click Generate Job Info</li>
            <li>• Fill in mileage</li>
            <li>• Select proper job type</li>
            <li>• Have the customer read and initial the release</li>
            <li>• Keep the browser open during the job</li>
            <li>• Complete the service</li>
            <li>• Get the final signature if no damage occurred</li>
            <li>• Click Upload Form</li>
            <li>• Wait for upload confirmation before closing the page</li>
          </ul>
        </section>

        <TrainingCompleteButton
          moduleId="damage-waiver"
          moduleName="Damage Waiver Tutorial"
        />
      </section>
    </main>
  );
}
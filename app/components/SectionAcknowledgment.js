"use client";

import { useEffect, useState } from "react";

export default function SectionAcknowledgment({ moduleId, ackId, label }) {
  const storageKey = `training_${moduleId}_ack_${ackId}`;
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const saved = sessionStorage.getItem(storageKey) === "true";
    setChecked(saved);
  }, [storageKey]);

  function handleChange(event) {
    const isChecked = event.target.checked;

    setChecked(isChecked);

    if (isChecked) {
      sessionStorage.setItem(storageKey, "true");
    } else {
      sessionStorage.removeItem(storageKey);
    }

    window.dispatchEvent(
      new CustomEvent("trainingAcknowledgmentChanged", {
        detail: {
          moduleId,
          ackId,
          checked: isChecked,
        },
      })
    );
  }

  return (
    <div className="mt-5 rounded-xl bg-green-50 p-4 ring-1 ring-green-200">
      <label className="flex cursor-pointer gap-3 text-green-950">
        <input
          type="checkbox"
          checked={checked}
          onChange={handleChange}
          className="mt-1 h-5 w-5"
        />

        <span className="font-semibold">{label}</span>
      </label>
    </div>
  );
}
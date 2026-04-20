"use client";

import { useMemo, useState } from "react";

type StepField = {
  name: string;
  label: string;
  type: "text" | "date" | "select" | "textarea";
  options?: string[];
  placeholder?: string;
  full?: boolean;
};

type FormStep = {
  title: string;
  description: string;
  fields: StepField[];
};

type LeadFormProps = {
  title: string;
  description: string;
  ctaLabel: string;
  steps?: FormStep[];
};

const defaultSteps: FormStep[] = [
  {
    title: "Step 1",
    description: "Start with the event type and date so we can evaluate fit first.",
    fields: [
      {
        name: "eventType",
        label: "Event type",
        type: "select",
        options: ["Wedding", "Corporate", "Social Event", "Design Studio"]
      },
      { name: "eventDate", label: "Event date", type: "date" }
    ]
  },
  {
    title: "Step 2",
    description: "Add the scale and location to shape the planning path.",
    fields: [
      { name: "guestCount", label: "Guest count", type: "text", placeholder: "Approx. 250" },
      { name: "location", label: "Location", type: "text", placeholder: "Hubli / destination / venue city" }
    ]
  },
  {
    title: "Step 3",
    description: "Budget alignment keeps the conversation honest and efficient.",
    fields: [
      {
        name: "budgetRange",
        label: "Budget range",
        type: "select",
        options: ["Under Rs. 1L", "Rs. 1L - 3L", "Rs. 3L - 8L", "Rs. 8L+"]
      }
    ]
  },
  {
    title: "Step 4",
    description: "Use this space for functions, design intent, and anything we should know before the first call.",
    fields: [{ name: "requirements", label: "Requirements", type: "textarea", full: true, placeholder: "Tell us about functions, style, constraints, or decision timeline." }]
  }
];

export function LeadForm({ title, description, ctaLabel, steps = defaultSteps }: LeadFormProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const progress = useMemo(() => ((currentStep + 1) / steps.length) * 100, [currentStep, steps.length]);
  const activeStep = steps[currentStep];
  const isLast = currentStep === steps.length - 1;

  return (
    <div className="form-shell">
      <div className="eyebrow">Lead Qualification</div>
      <h3 className="card-title">{title}</h3>
      <p className="card-copy">{description}</p>
      <div className="form-progress" aria-hidden="true">
        <span style={{ width: `${progress}%` }} />
      </div>

      {submitted ? (
        <div>
          <div className="service-qualifier">Inquiry captured</div>
          <p className="card-copy">
            This prototype flow is ready for form backend wiring. Replace the submit handler with your CRM, WhatsApp, email, or automation endpoint.
          </p>
        </div>
      ) : (
        <form
          onSubmit={(event) => {
            event.preventDefault();
            if (isLast) {
              setSubmitted(true);
              return;
            }
            setCurrentStep((step) => Math.min(step + 1, steps.length - 1));
          }}
        >
          <div className="service-qualifier" style={{ marginBottom: 14 }}>
            {activeStep.title}
          </div>
          <p className="card-copy" style={{ marginTop: 0 }}>
            {activeStep.description}
          </p>
          <div className="field-grid">
            {activeStep.fields.map((field) => {
              const className = field.full ? "field-full" : "field";
              return (
                <div className={className} key={field.name}>
                  <label htmlFor={field.name}>{field.label}</label>
                  {field.type === "select" ? (
                    <select id={field.name} name={field.name} required>
                      <option value="">Select</option>
                      {field.options?.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  ) : field.type === "textarea" ? (
                    <textarea id={field.name} name={field.name} placeholder={field.placeholder} required={field.name !== "requirements"} />
                  ) : (
                    <input id={field.name} name={field.name} type={field.type} placeholder={field.placeholder} required />
                  )}
                </div>
              );
            })}
          </div>
          <div className="button-row" style={{ marginTop: 22 }}>
            {currentStep > 0 ? (
              <button className="button-secondary" type="button" onClick={() => setCurrentStep((step) => Math.max(step - 1, 0))}>
                Previous
              </button>
            ) : null}
            <button className="button" type="submit">
              {isLast ? ctaLabel : "Continue"}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

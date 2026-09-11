"use client";

import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { services, timeOptions } from "@/lib/dummt";
import {
  AppointmentFormValues,
  appointmentSchema,
} from "@/validation/appointment-form.validation";
import Select from "../ui/SelectBox";
import DatePicker from "../ui/DatePicker";

const AppointmentForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<AppointmentFormValues>({
    resolver: zodResolver(appointmentSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "+1 ",
      service: "",
      date: undefined,
      time: "",
      message: "",
    },
    mode: "onSubmit",
  });

  const submit = (values: AppointmentFormValues) => {
    console.log("Appointment:", values);

    setSubmitted(true);
  };

  const requestAnotherTime = () => {
    setSubmitted(false);

    form.reset({
      name: "",
      email: "",
      phone: "+1 ",
      service: "",
      date: undefined,
      time: "",
      message: "",
    });
  };

  if (submitted) {
    return (
      <div className="form-card">
        <div className="success-state">
          <CheckCircle2 size={48} />

          <h3>We&apos;ve got it from here.</h3>

          <p>
            Thank you. Our team will be in touch shortly to confirm your
            appointment.
          </p>

          <button
            className="appointment-success-button"
            onClick={requestAnotherTime}
            type="button"
          >
            Request another time
            <ArrowRight size={14} />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="form-card">
      <form onSubmit={form.handleSubmit(submit)} noValidate>
        {/* Name + Email */}
        <div className="form-row">
          <label>
            <span>
              Full name <span className="text-red-500">*</span>
            </span>

            <input {...form.register("name")} placeholder="Your name" />

            {form.formState.errors.name && (
              <span className="validation-error">
                {form.formState.errors.name.message}
              </span>
            )}
          </label>

          <label>
            <span>
              Email address <span className="text-red-500">*</span>
            </span>

            <input
              {...form.register("email")}
              type="email"
              placeholder="you@example.com"
            />

            {form.formState.errors.email && (
              <span className="validation-error">
                {form.formState.errors.email.message}
              </span>
            )}
          </label>
        </div>

        {/* Phone + Service */}
        <div className="form-row">
          <label>
            <span>
              Phone number <span className="text-red-500">*</span>
            </span>

            <input
              {...form.register("phone")}
              type="tel"
              placeholder="+1 (212) 555-0148"
            />

            {form.formState.errors.phone && (
              <span className="validation-error">
                {form.formState.errors.phone.message}
              </span>
            )}
          </label>

          <label>
            <span>
              Service <span className="text-red-500">*</span>
            </span>

            <select {...form.register("service")} defaultValue="">
              <option value="" disabled>
                Select a service
              </option>

              {services.map((s) => (
                <option key={s.title} value={s.title}>
                  {s.title}
                </option>
              ))}
            </select>

            {form.formState.errors.service && (
              <span className="validation-error">
                {form.formState.errors.service.message}
              </span>
            )}
          </label>
        </div>

        {/* Date + Time */}
        <div className="form-row">
          <label>
            <span>
              Preferred date <span className="text-red-500">*</span>
            </span>

            <input
              type="date"
              onChange={(e) => {
                const value = e.target.value;

                if (!value) {
                  form.setValue("date", undefined as never);
                  return;
                }

                form.setValue("date", new Date(`${value}T00:00:00`), {
                  shouldValidate: true,
                });
              }}
            />

            {form.formState.errors.date && (
              <span className="validation-error">
                {form.formState.errors.date.message}
              </span>
            )}
          </label>

          <label>
            <span>
              Preferred time <span className="text-red-500">*</span>
            </span>

            <select {...form.register("time")} defaultValue="">
              <option value="" disabled>
                Select a time
              </option>

              {timeOptions.map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </select>

            {form.formState.errors.time && (
              <span className="validation-error">
                {form.formState.errors.time.message}
              </span>
            )}
          </label>
        </div>

        {/* Message */}
        <label>
          <span>
            Anything we should know? <span className="text-red-500">*</span>
          </span>

          <textarea
            {...form.register("message")}
            rows={4}
            placeholder="Tell us how we can help..."
            className="resize-none"
          />

          {form.formState.errors.message && (
            <span className="validation-error">
              {form.formState.errors.message.message}
            </span>
          )}
        </label>

        <button className="button dark submit-button" type="submit">
          Request appointment
          <ArrowRight size={16} />
        </button>

        <p className="form-footnote">
          By submitting, you agree to our privacy policy. We&apos;ll never share
          your details.
        </p>
      </form>
    </div>
  );
};

export default AppointmentForm;

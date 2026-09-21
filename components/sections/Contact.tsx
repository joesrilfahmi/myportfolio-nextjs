"use client";

import { Mail, Send, LoaderCircle } from "lucide-react";
import { contactContent, personalInfo } from "@/lib/data";
import { neu } from "@/lib/neu";
import { cn } from "@/lib/cn";
import { useContactForm } from "@/hooks/useContactForm";
import { Button } from "../ui/Button";
import { InputField, TextAreaField } from "../ui/Field";
import { IconBadge } from "../ui/IconBadge";
import { Reveal } from "../ui/Reveal";
import { Section } from "../ui/Section";
import { SectionHeading } from "../ui/SectionHeading";
import { Toast } from "../ui/Toast";

const textFields = [
  {
    id: "name",
    label: "Name",
    type: "text",
    placeholder: "Your name",
    autoComplete: "name",
    minLength: 2,
    maxLength: 100,
  },
  {
    id: "email",
    label: "Email",
    type: "email",
    placeholder: "you@example.com",
    autoComplete: "email",
    maxLength: 254,
  },
] as const;

export function Contact() {
  const { values, handleChange, submit, status, alertMessage } =
    useContactForm();
  const isSending = status === "sending";

  return (
    <>
      <Section id="contact">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          <div className="md:self-center">
            <SectionHeading
              title={contactContent.title}
              description={contactContent.description}
              className="mb-8 md:mb-8"
            />
          </div>

          <Reveal delay={0.1}>
            <form
              noValidate
              onSubmit={(event) => {
                event.preventDefault();
                void submit(event.currentTarget);
              }}
              className={cn(neu(), "rounded-container p-6 sm:p-8")}
            >
              <div className="flex flex-col gap-5">
                {/* Honeypot: hidden from people, tempting to bots. */}
                <div
                  aria-hidden="true"
                  className="absolute -left-[9999px] h-px w-px overflow-hidden"
                >
                  <label htmlFor="website">Website</label>
                  <input
                    id="website"
                    name="website"
                    tabIndex={-1}
                    autoComplete="new-password"
                    value=""
                    readOnly
                  />
                </div>

                {textFields.map((field) => (
                  <InputField
                    key={field.id}
                    {...field}
                    required
                    value={values[field.id]}
                    onChange={handleChange}
                  />
                ))}

                <TextAreaField
                  id="message"
                  label="Message"
                  required
                  minLength={10}
                  maxLength={5000}
                  rows={4}
                  placeholder="What are you looking to build?"
                  value={values.message}
                  onChange={handleChange}
                />

                <Button
                  type="submit"
                  variant="primary"
                  disabled={isSending}
                  className="mt-2"
                  icon={
                    isSending ? (
                      <LoaderCircle
                        size={15}
                        strokeWidth={2}
                        className="animate-spin"
                      />
                    ) : (
                      <Send size={15} strokeWidth={2} />
                    )
                  }
                >
                  {isSending ? "Sending..." : "Send Message"}
                </Button>
              </div>
            </form>
          </Reveal>
        </div>
      </Section>

      <Toast
        status={status === "success" || status === "error" ? status : null}
        message={alertMessage}
      />
    </>
  );
}

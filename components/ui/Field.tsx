import type {
  InputHTMLAttributes,
  ReactNode,
  TextareaHTMLAttributes,
} from "react";
import { Card } from "./Card";

/** Shared look for the control inside the recessed well. */
const controlClass =
  "w-full rounded-2xl bg-transparent px-4 py-3 text-sm text-foreground placeholder:text-muted/70 focus:outline-none";

interface FieldShellProps {
  id: string;
  label: string;
  children: ReactNode;
}

/**
 * Label + recessed well. The well shows an orange outline while its
 * control is focused, so focus stays visible even though the native
 * outline is removed from the control itself.
 */
function FieldShell({ id, label, children }: FieldShellProps) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2 block text-sm font-medium text-foreground"
      >
        {label}
      </label>
      <Card
        tone="inset"
        depth="md"
        radius="xl"
        className="focus-within:outline focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-accent-ink"
      >
        {children}
      </Card>
    </div>
  );
}

type InputFieldProps = { id: string; label: string } & InputHTMLAttributes<HTMLInputElement>;

export function InputField({ id, label, ...props }: InputFieldProps) {
  return (
    <FieldShell id={id} label={label}>
      <input id={id} name={id} className={controlClass} {...props} />
    </FieldShell>
  );
}

type TextAreaFieldProps = { id: string; label: string } & TextareaHTMLAttributes<HTMLTextAreaElement>;

export function TextAreaField({ id, label, ...props }: TextAreaFieldProps) {
  return (
    <FieldShell id={id} label={label}>
      <textarea
        id={id}
        name={id}
        className={`${controlClass} resize-none`}
        {...props}
      />
    </FieldShell>
  );
}

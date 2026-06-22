// src/components/ui/Input.tsx
import type { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
};

export function Input({ label, error, id, ...props }: InputProps) {
  return (
    <div className="form-group">
      <label htmlFor={id}>{label}</label>

      <input id={id} className={error ? "input input-error" : "input"} {...props} />

      {error && <p className="error-text">{error}</p>}
    </div>
  );
}
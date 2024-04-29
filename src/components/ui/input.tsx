"use client";
import { FormError } from "@/components/ui";
import { useRef, useState } from "react";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string | string[];
}

export default function Input({ label, error, ...props }: Props) {
  const ref = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState<string>((props.value as string) || "");
  let cs = props.className && props.className.length > 0 ? props.className : "";
  if (error) {
    cs += " is-invalid";
  }
  if (value && value.length > 0) {
    cs += " has-value";
  }

  return (
    <div className="form-group">
      <input
        className={cs}
        {...props}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <label className="is-invalid" htmlFor={props.id}>
        {label}
      </label>
      {error && <FormError error={error} />}
    </div>
  );
}

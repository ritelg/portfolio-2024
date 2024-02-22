import { FormError } from "@/components/ui";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string | string[];
}

export default function Input({ label, error, ...props }: Props) {
  let cs = props.className && props.className.length > 0 ? props.className : "";
  if (error) {
    cs += " is-invalid";
  }
  return (
    <div className="form-group">
      <label className="is-invalid" htmlFor={props.id}>{label}</label>
      <input placeholder={props.placeholder ?? label} className={cs} {...props} />
      {error && <FormError error={error} /> }
    </div>
  )
}

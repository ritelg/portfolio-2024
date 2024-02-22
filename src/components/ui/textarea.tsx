import { FormError } from "@/components/ui";

interface Props extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string | string[];
}

export default function Textarea({ label, error, ...props }: Props) {
  let cs = props.className && props.className.length > 0 ? props.className : "";
  if (error) {
    cs += " is-invalid";
  }
  return (
    <div className="form-group">
      <label className="is-invalid" htmlFor={props.id}>{label}</label>
      <textarea className={cs} {...props} >{props.children ?? label}</textarea>
      {error && <FormError error={error} /> }
    </div>
  )
}

import { FormError } from "@/components/ui";
import clsx from "clsx";

interface Props extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string | string[];
}

export default function Textarea({ label, error, className, ...props }: Props) {
  const  cs = clsx(className,  error && "is-invalid")
  return (
    <div className="form-group">
      <label className="is-invalid" htmlFor={props.id}>{label}</label>
      <textarea defaultValue={label} className={cs} {...props}/>
      {error && <FormError error={error} /> }
    </div>
  )
}

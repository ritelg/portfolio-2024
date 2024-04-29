import clsx from "clsx";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> { }

export default function Button({ children, ...props }: Props) {
  const cs = clsx(props.className, "btn")
  return (
    <button className={cs}>{children}</button>
  );
}

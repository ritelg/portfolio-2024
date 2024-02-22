interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> { }

export default function Button({ children, ...props }: Props) {
  return (
    <button className={`btn ${props?.className}`}>{children}</button>
  );
}


interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> { }

export default function LinkButton({ children, ...props }: Props) {
  const cs = props.className && props.className.length > 0 
    ? props.className 
    : "";
  return (
    <a className={`btn ${cs}`} {...props}>{children}</a>
  );
}

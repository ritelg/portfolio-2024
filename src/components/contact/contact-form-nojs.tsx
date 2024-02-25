interface Props extends React.FormHTMLAttributes<HTMLFormElement> { }

export default function ContactFormNoJs({ ...props }: Props) {
  return (
    <form {...props}>
      <h2>Form sans JAVASCRIPT</h2>
    </form>

  )
}

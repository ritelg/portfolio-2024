type Props = {
  error: string | string[];
};

export default function FormError({ error }: Props) {
  if (Array.isArray(error)) {
    return (
      <ul className="invalid-feedback">
        {error.map((e, i) => (
          <li key={`err-${i}`}>{e}</li>
        ))}
      </ul>
    );
  }
  return <span className="invalid-feedback">{error}</span>;
}

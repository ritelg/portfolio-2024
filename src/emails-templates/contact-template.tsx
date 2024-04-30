import {
  Body,
  Button,
  Container,
  Heading,
  Html,
  Img,
  Link,
  Tailwind,
  Text,
} from "@react-email/components";

type Props = {
  from: string;
  subject: string;
  message: string;
};

export default function ContactTemplate({
  from = "ritelg@yahoo",
  subject,
  message,
}: Props) {
  return (
    <Tailwind
      config={{
        theme: {
          extend: {
            colors: {
              brand: "#007291",
              alt: "#03a5d1",
            },
          },
        },
      }}
    >
      <Html>
        <Body className="bg-slate-200 m-10">
          <Container className="bg-white p-10 rounded-lg shadow-lg text-center">
            <Img
              src={`https://rg-creation.fr/images/logo-fonce.svg`}
              alt="Linear logo"
              className="mx-auto w-24"
            />
            <Heading as="h1" className="text-2xl text-slate-800 mt-5">
              Vous avez reçu un nouveau message
            </Heading>
            <Link href={`mailto:${from}`} className="text-2xl text-slate-700">
              {from}
            </Link>
            <Text className="py-5 text-base leading-relaxed text-slate-700">
              {message}
            </Text>
            <Button
              href={`mailto:${from}`}
              className="bg-slate-800 rounded text-slate-100 text-base px-5 py-3 block text-center no-underline"
            >
              Répondre
            </Button>
          </Container>
        </Body>
      </Html>
    </Tailwind>
  );
}

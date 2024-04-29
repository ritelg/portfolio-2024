import { getPortfolioBySlug } from "@/actions/portfolio";
import { Header } from "@/components/common";
import { LinkButton } from "@/components/ui";
import { env } from "@/libs/env";
import { Metadata, ResolvingMetadata } from "next";
import Image from "next/image";

type Props = {
  params: { slug: string };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  let data = await getPortfolioBySlug(params.slug).catch((err) =>
    console.log(err)
  );
  console.log(data);

  return {
    title: data.title,
    description: data.smallcontent,
    keywords: [
      "Création de sites internet",
      "Création de flyers",
      "Développeur web",
      "Designer",
    ],
    authors: [{ name: "Gaetan Ritel" }],
    publisher: "Gaetan Ritel",
    creator: "Gaetan Ritel",
    openGraph: {
      title: data.title,
      description: data.smallcontent,
      url: `${env.NEXTAUTH_URL}/portfolio/${params.slug}`,
      type: "website",
      locale: "fr_FR",
      images: [
        {
          url: `${env.NEXTAUTH_URL}${data.image}`,
          width: data.image_width,
          height: data.image_height,
          alt: data.title,
        },
      ],
    },
    twitter: {
      site: "@gaetanritel",
      card: "summary_large_image",
    },
  };
}

export default async function PortfolioDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  let data = await getPortfolioBySlug(params.slug).catch((err) =>
    console.log(err)
  );
  if (!data) return;

  console.log(data);
  return (
    <Header className="portfolio-show">
      <Image
        src={data.image}
        style={{ width: "auto" }}
        layout="responsive"
        alt={data.title}
        width={data.image_width}
        height={data.image_height}
      />
      <div className="content">
        <h1>{data.title}</h1>
        {data.url?.length > 0 && (
          <LinkButton href={data.url}>Voir le site</LinkButton>
        )}
        <p>{data?.smallcontent}</p>
      </div>
    </Header>
  );
}

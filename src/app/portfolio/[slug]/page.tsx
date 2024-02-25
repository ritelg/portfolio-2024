import {Header} from "@/components/common"
import {LinkButton} from "@/components/ui"
import {env} from "@/libs/env"
import Image from "next/image"

export default async function PortfolioDetailPage(
  {params}: {params: {slug: string}}
) {
  let data = await fetch(`${env.NEXTAUTH_URL}/api/portfolio/${params.slug}`).then(res => res.json())
  data = data.portfolioItem

console.log(data)
  return (
    <Header className="portfolio-show">
      <Image src={data.image} layout="responsive" alt={data.title} width={data.image_width} height={data.image_height} />
      <div className="content">
        <h1>{data.title}</h1>
        {data.url?.length > 0 && <LinkButton href={data.url}>Voir le site</LinkButton>}
        <p>{data?.smallcontent}</p>
      </div>
    </Header>
  )
}

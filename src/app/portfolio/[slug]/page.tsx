import {env} from "@/libs/env"

export default async function PortfolioDetailPage(
  {params}: {params: {slug: string}}
) {
  const data = await fetch(`${env.NEXTAUTH_URL}/api/portfolio/${params.slug}`).then(res => res.json())
  console.log(data)
  return (
    <div>
      <h1>PortfolioDetailPage</h1>
    </div>
  )
}

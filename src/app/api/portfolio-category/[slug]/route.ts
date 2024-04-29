import {portfolioCategory} from "@/data";
import {getAllData, getDatasByCategory} from "@/utils/api-files";

export async function GET(
  req: Request,
  {params}: {params: {slug: string}}
) {
  if (!portfolioCategory.find((c: {title: string, slug: string}) => c.slug === params.slug)) {
    return Response.json({error: "Not found"}, {status: 404});
  }

  if (params.slug === "tout") {
    return Response.json({'portfolio': getAllData('projects'), 'category': portfolioCategory});
  }

  return Response.json({'portfolio': getDatasByCategory('projects', params.slug), 'category': portfolioCategory});
}

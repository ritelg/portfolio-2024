import {prisma} from "@/libs/prisma";
import {findBySlug} from "@/query/portfolio-query";

export async function GET(
  req: Request,
  {params}: {params: {slug: string}}
) {
  let portfolioItem = await findBySlug(params.slug)

  return Response.json({'portfolioItem': portfolioItem});
}

import {getDataBySlug} from "@/utils/api-files";

export async function GET(
  req: Request,
  {params}: {params: {slug: string}}
) {
  return Response.json({'portfolioItem': getDataBySlug('projects', params.slug)});
}

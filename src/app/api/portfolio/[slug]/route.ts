import {prisma} from "@/libs/prisma";

export async function GET(
  req: Request,
  {params}: {params: {slug: string}}
) {
  let portfolioItem = await prisma.portfolio.findFirst({
    where: {slug: params.slug},
    select: {
      slug: true,
      title: true,
      content: true,
      image: true,
      url: true,
    }
  });

  return Response.json({'portfolioItem': portfolioItem});
}

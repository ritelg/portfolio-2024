import {prisma} from "@/libs/prisma";
import {all, allCategory, findByCategory} from "@/query/portfolio-query";

export async function GET(
  req: Request,
  {params}: {params: {slug: string}}
) {
  let category = await allCategory();
  category = [{slug: 'tout', title: 'Tout'}, ...category];

  if (!category.find((c: string) => c.slug === params.slug)) {
    return Response.json({error: "Not found"}, {status: 404});
  }

  if (params.slug === "tout") {
    const portfolio = await all()
    return Response.json({'portfolio': portfolio, 'category': category});
  }

  const portfolio = await findByCategory(params.slug);
  return Response.json({'portfolio': portfolio?.Portfolio, 'category': category});
}

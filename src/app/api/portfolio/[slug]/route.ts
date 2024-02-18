import {prisma} from "@/libs/prisma";

export async function GET(
  req: Request,
  {params}: {params: {slug: string}}
) {
  let category = await prisma.portfolioCategory.findMany({
    select: {
      slug: true,
      title: true
    }
  });

  category = [{slug: 'tout', title: 'Tout'}, ...category];

  if (!category.find((c) => c.slug === params.slug)) {
    return Response.json({error: "Not found"}, {status: 404});
  }

  if (params.slug === "tout") {
    const portfolio = await prisma.portfolio.findMany({
      select: {
        title: true,
        content: true,
        url: true,
        image: true,
        pos_home: true,
        pos_category: true
      },
      orderBy: {
        pos_home: "asc"
      }
    });
    return Response.json({'portfolio': portfolio, 'category': category});
  }

  const portfolio = await prisma.portfolioCategory.findFirst({
    where: {
      slug: params.slug
    },
    select: {
      Portfolio: {
        select: {
          title: true,
          content: true,
          url: true,
          image: true,
          pos_home: true,
          pos_category: true
        },
        orderBy: {
          pos_category: "asc"
        }
      },
    },
  });
  return Response.json({'portfolio': portfolio?.Portfolio, 'category': category});
}

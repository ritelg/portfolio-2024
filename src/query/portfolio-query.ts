import {prisma} from "@/libs/prisma";
import {Prisma} from "@prisma/client";

export async function findBySlug(slug: string) {
  return await prisma.portfolio.findFirst({
    where: {slug: slug},
    select: {
      slug: true,
      title: true,
      content: true,
      smallcontent: true,
      image: true,
      url: true,
      image_width: true,
      image_height: true,
    }
  });
}

export async function findByCategory(category: string) {
  return await prisma.portfolioCategory.findFirst({
    where: {
      slug: category
    },
    select: {
      Portfolio: {
        select: {
          title: true,
          smallcontent: true,
          content: true,
          url: true,
          image: true,
          pos_home: true,
          pos_category: true,
          slug: true,
          image_width: true,
          image_height: true,
        },
        orderBy: {
          pos_category: "asc"
        },
      },
    },
  });
}

export async function all() {
  return await prisma.portfolio.findMany({
    select: {
      slug: true,
      title: true,
      content: true,
      smallcontent: true,
      image: true,
      image_width: true,
      image_height: true,
      url: true,
    },
    orderBy: {
      pos_home: "asc"
    }
  });
}

export async function allCategory() {
  return await prisma.portfolioCategory.findMany({
    select: {
      slug: true,
      title: true
    }
  });
}

export type PortfolioFindBySlug = Prisma.PromiseReturnType<typeof findBySlug>
export type PortfolioFindByCategory = Prisma.PromiseReturnType<typeof findByCategory>
export type PortfolioAll = Prisma.PromiseReturnType<typeof all>
export type PortfolioAllCategory = Prisma.PromiseReturnType<typeof allCategory>

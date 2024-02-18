import {prisma} from "@/libs/prisma"
import {skills, skillsCategories, portfolioCategory, portfolio} from "@/utils/data"

export async function seed() {
  skillsCategories.forEach(async (category) => {
    await prisma.skillCategory.create({data: {title: category.title}})
  })

  skills.forEach(async (skill) => {
    const category = await prisma.skillCategory.findFirst({where: {title: skill.category}})
    await prisma.skills.create({data: {title: skill.title, skillCategoryId: category?.id}})
  })

  portfolioCategory.forEach(async (c) => {
    await prisma.portfolioCategory.create({data: {title: c.title, slug: c.slug}})
  })
  console.log(portfolio)
  portfolio.forEach(async (p) => {
    const category = await prisma.portfolioCategory.findFirst({where: {title: p.category}})
    await prisma.portfolio.create({
      data: {
        title: p.title,
        content: p.content,
        portfolioCategoryId: category?.id,
        url: p.url,
        pos_home: p.pos_home,
        pos_category: p.pos_category,
        image: p.image,
        slug: p.slug
      }
    })
  })
}

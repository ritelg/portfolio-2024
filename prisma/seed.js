import {faker} from "@faker-js/faker"
import {skills, skillsCategories, portfolio, portfolioCategory} from "./data.js"
import {PrismaClient} from "@prisma/client"
const prisma = new PrismaClient()

export async function seed() {
  for (const c of skillsCategories) {
    await prisma.skillCategory.create({data: {title: c.title}})
  }

  for (const pc of portfolioCategory) {
    await prisma.portfolioCategory.create({data: {title: pc.title, slug: pc.slug}})
  }

  skills.forEach(async (skill) => {
    const category = await prisma.skillCategory.findFirst({where: {title: skill.category}})
    await prisma.skills.create({data: {title: skill.title, skillCategoryId: category.id}})
  })

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

seed().then(async () => {
  await prisma.$disconnect()
}).catch(async (e) => {
  console.error(e)
  await prisma.$disconnect()
  process.exit(1)
})

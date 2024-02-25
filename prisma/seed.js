import {faker} from "@faker-js/faker"
import {skills, skillsCategories, portfolio, portfolioCategory} from "./data.js"
import {PrismaClient} from "@prisma/client"
import sizeOf from 'image-size'
const prisma = new PrismaClient()

export async function seed() {
  console.log('imageSize', sizeOf('./public/images/portfolio/the-fiasco-logos-large.jpg'))
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
    const {width, height} = sizeOf(`./public${p.image}`)
    await prisma.portfolio.create({
      data: {
        title: p.title,
        content: p.content,
        portfolioCategoryId: category?.id,
        url: p.url,
        smallcontent: p?.smallContent,
        pos_home: p.pos_home,
        pos_category: p.pos_category,
        image: p.image,
        image_width: width,
        image_height: height,
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

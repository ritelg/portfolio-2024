import {prisma} from "@/libs/prisma"
import {skills, skillsCategories} from "@/utils/data"

export async function seed() {
  skillsCategories.forEach(async (category) => {
    await prisma.skillCategory.create({data: {title: category.title}})
  })

  skills.forEach(async (skill) => {
    const category = await prisma.skillCategory.findFirst({where: {title: skill.category}})
    await prisma.skills.create({data: {title: skill.title, skillCategoryId: category?.id}})
  })
}

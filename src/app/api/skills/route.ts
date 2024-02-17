import {prisma} from "@/libs/prisma"

export async function GET() {
  const skills = await prisma.skillCategory.findMany({
    select: {
      title: true,
      Skills: {
        select: {title: true}
      }
    }
  })

  const skillsMap = new Map();
  skills.forEach((category) => {
    const skills = category.Skills.map((skill) => skill.title);
    skillsMap.set(category.title, skills);
  })


  return Response.json({skills: Object.fromEntries(skillsMap)});
}

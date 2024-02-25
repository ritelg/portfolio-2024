import {prisma} from "@/libs/prisma"
import {all} from "@/query/skills-query";

export async function GET() {
  const skills = await all();

  const skillsMap = new Map();
  skills.forEach((category: any) => {
    const skills = category.Skills.map((skill) => skill.title);
    skillsMap.set(category.title, skills);
  })


  return Response.json({skills: Object.fromEntries(skillsMap)});
}

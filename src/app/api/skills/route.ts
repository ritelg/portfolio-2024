import {skills, skillsCategories} from "@/data";

export async function GET() {
  const skillsMap = new Map();
  skillsCategories.forEach((category: any) => {
    const skillsRes = skills.filter((skill: {title: string, category: string}) => skill.category === category.title).map((skill: {title: string, category: string}) => skill.title);
    skillsMap.set(category.title, skillsRes);
  })


  return Response.json({skills: Object.fromEntries(skillsMap)});
}

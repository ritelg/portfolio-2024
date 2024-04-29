"use server";

import { portfolioCategory, skills, skillsCategories } from "@/data";
import {
  getAllData,
  getDataBySlug,
  getDatasByCategory,
} from "@/utils/api-files";

export async function getAllPortfolio() {
  return {
    portfolio: getAllData("projects"),
    category: portfolioCategory,
  };
}

export async function getPortfolioByCategory(category: string) {
  if (category === "tout") {
    return {
      portfolio: getAllData("projects"),
      category: portfolioCategory,
    };
  }
  return {
    portfolio: getDatasByCategory("projects", category),
    category: portfolioCategory,
  };
}

export async function getAllSkills() {
  const skillsMap = new Map();
  skillsCategories.forEach((category: any) => {
    const skillsRes = skills
      .filter(
        (skill: { title: string; category: string }) =>
          skill.category === category.title
      )
      .map((skill: { title: string; category: string }) => skill.title);
    skillsMap.set(category.title, skillsRes);
  });
  return {
    skills: Object.fromEntries(skillsMap),
  };
}

export async function getPortfolioBySlug(slug: string) {
  return getDataBySlug("projects", slug);
}

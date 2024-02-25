import {prisma} from "@/libs/prisma";
import {Prisma} from "@prisma/client";

export async function all() {
  return await prisma.skillCategory.findMany({
    select: {
      title: true,
      Skills: {
        select: {title: true}
      }
    }
  })
}

export type CategoryAll = Prisma.PromiseReturnType<typeof all>

//@ts-nocheck
import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import sizeOf from 'image-size'
import {Portfolio} from '@prisma/client';

const ext = 'html';

export function getFiles(type: string) {
  return fs.readdirSync(path.join(process.cwd(), `_${type}`));
}

export function getDataBySlug(type: string, slug: string): Portfolio {
  const file = fs.readFileSync(path.join(process.cwd(), `_${type}`, `${slug}.${ext}`), 'utf-8');
  const {data, content} = matter(file);
  const sizes = getSizes(data.image);
  return {...data, content, image_width: sizes.width, image_height: sizes.height, slug: slug};
  // return {...data, content};
}

export function getAllData(type: string): Portfolio[] {
  const files = getFiles(type);
  return files.map((file) => {
    const slug = file.replace(new RegExp(`.${ext}$`), '');
    return getDataBySlug(type, slug);
  }).sort((a, b) => a.pos_home - b.pos_home);
}

export function getDatasByCategory(type: string, category: string) {
  const datas = getAllData(type);
  return datas.filter(data => data?.category === category).sort((a, b) => a.pos_category - b.pos_category);
}

export function getSizes(image: string): {width: number, height: number} {
  return sizeOf(`./public${image}`);
}

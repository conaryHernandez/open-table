import fs from 'fs';
import sql from 'better-sqlite3';
import slugify from 'slugify';
import xss from 'xss';

const db = sql('meals.db');

export async function getAllMeals() {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return db.prepare('SELECT * FROM meals').all();
}

export async function getMealBySlug(slug) {
  return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug);
}

export async function saveMeal(meal) {
  const slug = slugify(meal.title, { lower: true });

  const extention = meal.image?.name?.split('.').pop();
  const filename = `${slug}.${extention}`;
  const filepath = `public/images/${filename}`;

  const stream = fs.createWriteStream(filepath);
  const bufferedImage = await meal.image.arrayBuffer();

  stream.write(Buffer.from(bufferedImage), (error) => {
    if (error) {
      throw new Error('Saving image failed');
    }
  });

  const result = db
    .prepare(
      `
    INSERT INTO meals (
      title,
      slug,
      summary,
      instructions,
      image,
      creator,
      creator_email
    ) VALUES (
      @title,
      @slug,
      @summary,
      @instructions,
      @image,
      @creator,
      @creator_email
    )
  `
    )
    .run({
      ...meal,
      slug,
      image: `/images/${filename}`,
      title: xss(meal.title),
      summary: xss(meal.summary),
      instructions: xss(meal.instructions),
    });

  return result.lastInsertRowid;
}

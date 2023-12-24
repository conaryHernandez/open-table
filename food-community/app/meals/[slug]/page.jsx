import Image from 'next/image';
import { notFound } from 'next/navigation';
import classes from './page.module.css';
import { getMealBySlug } from '../../../lib/meals';

export default async function MealDetails({ params }) {
  const meal = await getMealBySlug(params.slug);

  if (!meal) {
    notFound();
  }

  if (meal.instructions) {
    meal.instructions = meal.instructions.replace(/\n/g, '<br />');
  }

  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image fill src={meal.image} alt='A table full of delicious food!' />
        </div>
        <div className={classes.headerText}>
          <h1>{meal.title}</h1>
          <p className={classes.creator}>
            By <a href={`mailto:${'email'}`}>{meal.creator_email}</a>
          </p>
          <p className={classes.summary}>{meal.summary}</p>
        </div>
      </header>
      <main>
        <p
          className={classes.instructions}
          dangerouslySetInnerHTML={{
            __html: meal.instructions || 'No instructions provided',
          }}
        />
      </main>
    </>
  );
}

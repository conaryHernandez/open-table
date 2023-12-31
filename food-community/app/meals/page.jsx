import { Suspense } from 'react';
import Link from 'next/link';

import classes from './page.module.css';
import MealsGrid from '../../components/MealsGrid';
import { getAllMeals } from '../../lib/meals';

export const metadata = {
  title: 'All meals',
  description: 'Delicious meals, shared by a food-loving community.',
};

async function Meals() {
  const meals = await getAllMeals();

  return (
    <>
      <MealsGrid meals={meals} />
    </>
  );
}

export default async function MealsPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious Meals
          <span className={classes.highlight}>by you!</span>
        </h1>

        <p>
          Choose your favorite meal from our broad selection of available meals
          and enjoy a delicious lunch or dinner at home.
        </p>

        <p className={classes.cta}>
          <Link href='meals/share'>Share your own meal!</Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense
          fallback={<p className={classes.loading}>Fetching Meals...</p>}
        >
          <Meals />
        </Suspense>
      </main>
    </>
  );
}

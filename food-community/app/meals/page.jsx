import Link from 'next/link';

import classes from './page.module.css';
import MealsGrid from '../../components/MealsGrid';

export default function Meals() {
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
        <MealsGrid meals={[]} />
      </main>
    </>
  );
}

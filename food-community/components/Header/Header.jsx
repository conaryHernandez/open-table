import Link from 'next/link';
import Image from 'next/image';
import classes from './Header.module.css';

import logoImg from '@/assets/logo.png';

export default function Header() {
  return (
    <header className={classes.header}>
      <Link className={classes.logo} href='/'>
        <Image src={logoImg} alt='A plate with food on it' priority />
      </Link>
      <nav className={classes.nav}>
        <ul>
          <li>
            <Link href='/meals'>Meals</Link>
          </li>
          <li>
            <Link href='/about'>Foodies Community</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

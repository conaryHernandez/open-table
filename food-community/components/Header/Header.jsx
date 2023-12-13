import Link from 'next/link';
import Image from 'next/image';

import classes from './Header.module.css';

import logoImg from '@/assets/logo.png';
import NavLink from '../NavLink';

export default function Header() {
  return (
    <header className={classes.header}>
      <Link className={classes.logo} href='/'>
        <Image src={logoImg} alt='A plate with food on it' priority />
      </Link>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink
              href='/meals'
              className={path.startsWith('/meals') ? classes.active : ''}
            >
              Meals
            </NavLink>
          </li>
          <li>
            <NavLink href='/community'>Foodies Community</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

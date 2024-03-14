import { NavLink } from 'react-router-dom';
import styles from './Header.module.scss';

const menuItens = [
  { label: 'Home', path: '/' },
  { label: 'Contato', path: '/contato' },
];

const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.menubar}>
        {menuItens.map((item) => (
          <NavLink
            key={item.label}
            to={item.path}
            className={({ isActive }) =>
              [isActive ? styles.active : '', styles.menuItem].join(' ')
            }
          >
            {item.label}
          </NavLink>
        ))}
      </div>
    </header>
  );
};

export default Header;

import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.scss';
import classNames from 'classnames';
// eslint-disable-next-line import/no-extraneous-dependencies

const NavData = [
  { title: 'home', path: '/' },
  { title: 'catalog', path: '/catalog' },
  { title: 'choices', path: '/choices' },
];

interface Props {
  className?: string;
  onHideMenu?: () => void;
}

export const Navigation: React.FC<Props> = ({ className, onHideMenu }) => {
  return (
    <ul className={`${styles.navigation__list} ${className}`}>
      {NavData.map(({ title, path }) => (
        <li className={styles.navigation__item} key={title}>
          <NavLink
            className={({ isActive }) =>
              classNames(styles.navigation__link, {
                [styles['navigation__link--active']]: isActive,
              })
            }
            to={path}
            onClick={onHideMenu}
          >
            {title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

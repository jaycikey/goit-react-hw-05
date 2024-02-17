import { NavLink } from 'react-router-dom';
import styles from './BackLink.module.css';

export default function Backlink({ href, children }) {
  return (
    <NavLink to={href} className={styles.link}>
      {children}
    </NavLink>
  );
}

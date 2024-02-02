import styles from './MainMenu.module.css';
import { Link } from 'react-router-dom';
export default function MainMenu() {
  return (
    <>
      <ul className={styles.list}>
        <li>
          <Link className={styles.link} to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className={styles.link} to="/about-us">
            About Us
          </Link>
        </li>
        <li>
          <Link className={styles.link} to="/products">
            Products
          </Link>
        </li>
        <li>
          <Link className={styles.link} to="/contact-us">
            Contact Us
          </Link>
        </li>
      </ul>
    </>
  );
}

import { NavLink } from 'react-router-dom';
import styles from './MainMenu.module.css';

/** A <NavLink> is a special kind of <Link> that
 * knows whether or not it is "active", "pending", or "transitioning".
 * This is useful in a few different scenarios:
 *
 * -- When building a navigation menu, such as a breadcrumb or a set of tabs where you'd like to show which of
 *    them is currently selected
 * -- It provides useful context for assistive technology like screen readers
 * -- It provides a "transitioning" value to give you finer-grained control over View Transitions
 *
 * to do that has include some default classNames and properties (isActive, isPending, isTransitioning )
 * https://reactrouter.com/en/main/components/nav-link
 *
 */

/** we create a variable that has the classes for links
 *  its the results on an unmamed function with parameter isActive
 * (can use also isPending, isTransitioning eg (isActive, isPending, isTransitioning) => ....blah blah...)
 *
 * the function returns a string with css class style.link and if NavLink is active adds also the css class stylew.active otherwise adds aemty string/nothing.
 */

export default function MainMenu() {

  const linkStyle = ({ isActive }) =>
      `${styles.link} ${isActive ? styles.active : ''}`;

  return (
    <>
      <ul className={styles.list}>
        <li>
          <NavLink className={linkStyle} to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className={linkStyle} to="/about-us">
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink className={linkStyle} to="/products">
            Products
          </NavLink>
        </li>
        <li>
          <NavLink className={linkStyle} to="/users">
            Users
          </NavLink>
        </li>
        <li>
          <NavLink className={linkStyle} to="/contact-us">
            Contact Us
          </NavLink>
        </li>
      </ul>
    </>
  );
}

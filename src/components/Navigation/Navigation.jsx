import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';
import { Icon } from "../../Icons";

const Navigation = () => {
  return (
    <div className={styles.navigation}>
      <NavLink
        to="/dashboard"
        end
        className={({ isActive }) =>
          isActive ? `${styles.navLink} ${styles.active}` : `${styles.navLink}`
        }
      >
        <div className={styles.linkIcon}>
                <Icon id="#icon-home" className={styles.homeIcon}></Icon>
        </div>
        <span className={styles.linkText}>Home</span>
      </NavLink>

      <NavLink
        to="/dashboard/statistics"
        className={({ isActive }) =>
          isActive ? `${styles.navLink} ${styles.active}` : `${styles.navLink} `
        }
      >
        <div className={styles.linkIcon}>
                <Icon id="#icon-graphic" className={styles.graphicIcon} ></Icon>
        </div>
        <span className={styles.linkText}>Statistics</span>
      </NavLink>

      <NavLink
        to="currency"
        className={({ isActive }) =>
          isActive
            ? `${styles.navLink} ${styles.active}`
            : `${styles.navLink} ${styles.currencyLink}`
        }
      >
        <div className={styles.linkIcon}>
                <Icon id="#icon-dollar" className={styles.dollarIcon} ></Icon>
        </div>
        <span className={styles.linkText}>Currency</span>
      </NavLink>
    </div>
  );
};

export default Navigation;



import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';
import { Icon } from '../../Icons';

const Navigation = () => {
    return (
        <div className={styles.navigation}>
            <NavLink to="/dashboard" end className={({ isActive }) => (isActive ? `${styles.navLink} ${styles.active}` : `${styles.navLink}`)}>
                <a href="../../sprite.svg" className={styles.linkIcon}>
                    <Icon id="#icon-home" className={styles.homeIcon}></Icon>
                </a>
                <span className={styles.linkText}>Home</span>
            </NavLink>

            <NavLink to="/dashboard/statistics" className={({ isActive }) => (isActive ? `${styles.navLink} ${styles.active}` : `${styles.navLink} `)}>
                <a href="../../sprite.svg" className={styles.linkIcon}>
                    <Icon id="#icon-graphic" className={styles.graphicIcon}></Icon>
                </a>
                <span className={styles.linkText}>Statistics</span>
            </NavLink>

            <NavLink to="currency" className={({ isActive }) => (isActive ? `${styles.navLink} ${styles.active}` : `${styles.navLink} ${styles.currencyLink}`)}>
                <a href="../../sprite.svg" className={styles.linkIcon}>
                    <Icon id="#icon-dollar" className={styles.dollarIcon}></Icon>
                </a>
                <span className={styles.linkText}>Currency</span>
            </NavLink>
        </div>
    );
};

export default Navigation;

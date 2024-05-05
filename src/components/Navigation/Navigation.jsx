import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';
import { Icon } from '../../Icons';

const Navigation = () => {
    const getClasses = isActive => (isActive ? `${styles.navLink} ${styles.active}` : `${styles.navLink}`);
    return (
        <nav className={styles.navigation}>
            <NavLink to="" className={({ isActive }) => getClasses(isActive)}>
                <Icon id="#icon-home" className={`${styles.homeIcon} ${styles.linkIcon}`} />
                <span className={styles.linkText}>Home</span>
            </NavLink>

            <NavLink to="statistics" className={({ isActive }) => getClasses(isActive)}>
                <Icon id="#icon-graphic" className={`${styles.graphicIcon} ${styles.linkIcon}`} />
                <span className={styles.linkText}>Statistics</span>
            </NavLink>

            <NavLink to="currency" className={({ isActive }) => (isActive ? `${styles.navLink} ${styles.active}` : `${styles.navLink} ${styles.currencyLink}`)}>
                <Icon id="#icon-dollar" className={`${styles.dollarIcon} ${styles.linkIcon}`} />
                <span className={styles.linkText}>Currency</span>
            </NavLink>
        </nav>
    );
};

export default Navigation;

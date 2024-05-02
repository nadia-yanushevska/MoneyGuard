import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';
import { Icon } from '../../Icons';

const Navigation = () => {
    const getClasses = isActive => (isActive ? `${styles.navLink} ${styles.active}` : `${styles.navLink}`);
    return (
        <nav className={styles.navigation}>
            <NavLink to="/dashboard" className={({ isActive }) => getClasses(isActive)}>
                <Icon id="#icon-home" className={`${styles.dollarIcon} ${styles.linkIcon}`} />
                <span className={styles.linkText}>Home</span>
            </NavLink>

            <NavLink to="statistics" className={({ isActive }) => getClasses(isActive)}>
                <Icon id="#icon-graphic" className={`${styles.dollarIcon} ${styles.linkIcon}`} />
                <span className={styles.linkText}>Statistics</span>
            </NavLink>

            {/* Має бути видно тільки на мобільній версії */}
            <NavLink to="currency" className={({ isActive }) => getClasses(isActive)}>
                <Icon id="#icon-dollar" className={`${styles.dollarIcon} ${styles.linkIcon}`} />
                <span className={styles.linkText}>Currency</span>
            </NavLink>
        </nav>
    );
};

export default Navigation;

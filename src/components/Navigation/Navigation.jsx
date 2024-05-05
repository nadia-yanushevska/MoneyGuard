import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';
import { Icon } from '../../Icons';

const Navigation = () => {
    const getClasses = isActive => (isActive ? `${styles.navLink} ${styles.active}` : `${styles.navLink}`);
    return (
        <nav className={styles.navigation}>
            <NavLink to="" className={({ isActive }) => getClasses(isActive)}>
                <div className={styles.linkIcon}>
                    <Icon id="#icon-home" className={styles.homeIcon} />
                </div>
                <span className={styles.linkText}>Home</span>
            </NavLink>

            <NavLink to="statistics" className={({ isActive }) => getClasses(isActive)}>
                <div className={styles.linkIcon}>
                    <Icon id="#icon-graphic" className={styles.graphicIcon} />
                </div>
                <span className={styles.linkText}>Statistics</span>
            </NavLink>

            <NavLink to="currency" className={({ isActive }) => (isActive ? `${styles.navLink} ${styles.active}` : `${styles.navLink} ${styles.currencyLink}`)}>
                <div className={styles.linkIcon}>
                    <Icon id="#icon-dollar" className={styles.dollarIcon} />
                </div>
                <span className={styles.linkText}>Currency</span>
            </NavLink>
        </nav>
    );
};

export default Navigation;

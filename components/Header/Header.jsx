import styles from './Header.module.css';
import bars from '../../public/assets/menu-bars.png';

const Header = () => {
    return(
        <header className={styles.header}>
            <h1 className={styles.siteTitle}>DUSTIN WILLIAMS</h1>
            <img className={styles.navIcon} src={bars} />
        </header>
    );
}

export default Header;
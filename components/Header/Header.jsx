import Link from 'next/link';
import styles from './Header.module.css';
import bars from '../../public/assets/menu-bars.png';

const Header = props => {
    const { navToggled, setNavToggled } = props;
    return(
        <header className={styles.header}>
            <Link href="/"><a onClick={() => {setNavToggled(false)}}><h1 className={styles.siteTitle}>DUSTIN WILLIAMS</h1></a></Link>
            <img onClick={() => {setNavToggled(!navToggled)}} className={styles.navIcon} src={bars} />
        </header>
    );
}

export default Header;
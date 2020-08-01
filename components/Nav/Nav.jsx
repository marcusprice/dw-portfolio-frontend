import Link from 'next/link';
import styles from './Nav.module.css';

const Nav = props => {
    const { navToggled, setNavToggled } = props;

    const handleToggle = () => {
        let output;
        if(navToggled) {
            output = '10px';
        } else {
            output = '-227px';
        }
        return output;
    }

    return(
        <nav className={styles.nav} style={{right: handleToggle()}}>
            <ul className={styles.navUL}>
                <Link href="/about"><a onClick={() => {setNavToggled(false)}}><li className={styles.listItem}>MUSIC</li></a></Link>
                <Link href="/audio_services"><a onClick={() => {setNavToggled(false)}}><li className={styles.listItem}>AUDIO SERVICES</li></a></Link>
                <Link href="/about"><a onClick={() => {setNavToggled(false)}}><li className={styles.listItem}>ABOUT</li></a></Link>
                <Link href="/support"><a onClick={() => {setNavToggled(false)}}><li className={styles.listItem}>SUPPORT</li></a></Link>
                <Link href="/shows"><a onClick={() => {setNavToggled(false)}}><li className={styles.listItem}>SHOWS</li></a></Link>
                <Link href="/contact"><a onClick={() => {setNavToggled(false)}}><li className={styles.listItem}>CONTACT</li></a></Link>
            </ul>
            <ul className={styles.navUL}>
                <a href="https://tarsiereyes.bandcamp.com/" target="_blank"><li className={styles.listItem}>BANDCAMP</li></a>
                <a href="https://soundcloud.com/tarsier-eyes" target="_blank"><li className={styles.listItem}>SOUNDCLOUD</li></a>
                <a href="https://www.instagram.com/tarsiereyes_" target="_blank"><li className={styles.listItem}>INSTAGRAM</li></a>
            </ul>
        </nav>
    );
}

export default Nav;
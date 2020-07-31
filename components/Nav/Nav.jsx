import styles from './Nav.module.css';

const Nav = props => {
    const { navToggled } = props;

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
                <li className={styles.listItem}>MUSIC</li>
                <li className={styles.listItem}>AUDIO SERVICES</li>
                <li className={styles.listItem}>ABOUT</li>
                <li className={styles.listItem}>SUPPORT</li>
                <li className={styles.listItem}>SHOWS</li>
                <li className={styles.listItem}>CONTACT</li>
            </ul>
            <ul className={styles.navUL}>
                <li className={styles.listItem}>SOUNDCLOUD</li>
                <li className={styles.listItem}>INSTAGRAM</li>
            </ul>
        </nav>
    );
}

export default Nav;
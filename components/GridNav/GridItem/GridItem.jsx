import Link from 'next/link';
import styles from './GridItem.module.css';
const API_DOMAIN = process.env.NEXT_PUBLIC_API_DOMAIN;

const GridItem = props => (
        <li style={{backgroundImage: 'url('+ API_DOMAIN + (props.section ? props.section : '') + ')'}} className={styles.listItem}>
            <Link href={props.url}>
                <a className={styles.textDiv}>
                    <div className={styles.textDiv}>
                        {props.sectionText}
                    </div>
                </a>
            </Link>
        </li>
);

export default GridItem;
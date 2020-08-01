import styles from './PageHere.module.css';

const PageHero = props => (
    <div className={styles.heroContainter}>

        <div className={styles.heroText}>
            <h2 className={styles.title}>{props.title}</h2>
            <h3 className={styles.heading}>{props.heading}</h3>
            <p className={styles.description}>{props.description}</p>
        </div>

        <div className={styles.imageContainer} style={{backgroundImage: 'url("' + props.imgURL + '")'}} />

    </div>
);

export default PageHero;
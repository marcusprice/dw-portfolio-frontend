import styles from './ContentSection.module.css';

const ContentSection = props => (
    <section className={styles.contentSection}>
        {props.children}
    </section>
);

export default ContentSection;
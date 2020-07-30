import styles from './ContentContainer.module.css';

const ContentContainer = ({children}) => (
    <div className={styles.container}>
        {children}
    </div>
);

export default ContentContainer;
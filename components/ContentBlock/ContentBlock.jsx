import styles from './contentBlock.module.css';

const ContentBlock = props => {

    return (
        <div className={styles.contentBlock}>
            <h4 className={styles.title}>{props.title}</h4>
            {props.children}
        </div>
    );
};

export default ContentBlock;

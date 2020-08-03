import styles from './DualContentBlock.module.css';

const DualContentBlock = props => {
    return(
        <div className={styles.container}>
            <h4 className={styles.title}>{props.title}</h4>
            {props.children}
        </div>
    );
}

export default DualContentBlock;
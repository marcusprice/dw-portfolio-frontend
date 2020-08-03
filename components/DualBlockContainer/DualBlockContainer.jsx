import styles from './DualBlockContainer.module.css';

const DualBlockContainer = props => (
    <div className={styles.container}>
        {props.children}
    </div>
);

export default DualBlockContainer;
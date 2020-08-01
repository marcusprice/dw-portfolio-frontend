import styles from './ContentContainer.module.css';

const ContentContainer = props => {
    const { children, navToggled } = props

    return (
        <div className={styles.container + ' ' + (navToggled ? 'content-container-expanded' : 'content-container')} >
            { children }
        </div>
    );
};

export default ContentContainer;
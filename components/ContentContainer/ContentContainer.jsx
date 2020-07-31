import styles from './ContentContainer.module.css';

const ContentContainer = props => {
    const { children, navToggled } = props

    const handleToggle = () => {
        let output = {};
        if(navToggled) {
            output = {right: '265px', opacity: '.25'}
        } else {
            output = {right: '20px', opacity: '1'}
        }
        return output;
    }

    return (
        <div className={styles.container} style={{right: handleToggle().right, opacity: handleToggle().opacity}}>
            { children }
        </div>
    );
};

export default ContentContainer;
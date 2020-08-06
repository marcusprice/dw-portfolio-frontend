import { useEffect } from 'react';
import styles from './ContentContainer.module.css';

const ContentContainer = props => {
    const { children, navToggled, setNavToggled } = props

    useEffect(() => {
        document?.querySelector('.suh').scrollTo(0, 0);
    }, [props.view]);

    return (
        <div 
            className={"suh " + styles.container + ' ' + (navToggled ? 'content-container-expanded' : 'content-container')} 
            onClick={() => {if(navToggled) setNavToggled(false)}}>
            { children }
        </div>
    );
};

export default ContentContainer;
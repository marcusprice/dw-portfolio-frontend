import styles from './List.module.css';
import { randomInt } from '../../utils/';
import checkmark from '../../public/assets/checkmark.png';

const List = props => {
    let output = '';

    if(props.items) {
        output = props.items.map(item => {
        
            return (
                <li className={styles.listItem} key={randomInt(50000)}>
                    <img className={styles.checkmark} src={checkmark} />
                    {item}
                </li>  
            );
        });
    }

    return(
        <ul className={styles.unorderedList}>
            {output}
        </ul>
    );
}

export default List;
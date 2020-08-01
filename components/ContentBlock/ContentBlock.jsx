import styles from './contentBlock.module.css';

const ContentBlock = props => {
    //set output var to a blank string
    let output = '';
    //if the text is coming in as an array of strings it will need to be broken up into separate paragraphs 
    if(typeof props.text === 'object') {
        output = props.text.map((text, i) => {

            //quick & dirty fix to elimate the margin on the last array item
            let marginFix = {};
            if(i === props.text.length - 1) {
                marginFix.marginBottom = '0';
            }
            
            return (
                <p style={marginFix} className={styles.paragraphText} key={i}>
                    {text}
                </p>
            )
        });
    } else { //the text coming in is just a string so put it in 1 paragraph tag
        output = <p className={styles.paragraphText}>{props.text}</p>;
    }

    return (
        <div className={styles.contentBlock}>
            <h4 className={styles.title}>{props.title}</h4>
            {output}
        </div>
    );
};

export default ContentBlock;

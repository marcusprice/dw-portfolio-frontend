//generates a random int
export const randomInt = max => Math.ceil(Math.random() * max);

//converts a string with newlines to an array of paragraph elements separated by newlines
export const convertNewlines = strings => {
    let output;

    if(strings) {
        //create an array of strings separated by the newline
        output = strings.split('\n').filter(text => text !== '');

        //convert the text to paragraph tags
        output = output.map((text, i) => {
            //quick & dirty fix to elimate the margin on the last array item
            let marginFix = {};
            if(i === output.length - 1) {
                marginFix.marginBottom = '0';
            }
            
            return (
                <p className="paragraphText" style={marginFix} key={randomInt(50000)}>
                    {text}
                </p>
            );
        });   
    } else {
        output = '';
    }

    //return the array of paragraph tags
    return output;
}
import { useState, useEffect } from 'react';
import axios from 'axios'; 

const List = props => {
    const [list, setList] = useState([]);
    const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN;

    useEffect(() => {
        axios.get(apiDomain + props.apiEndpoint)
            .then(result => {
                console.log(result.data);
                setList(result.data.accomplishments);
            })  
            .catch(err => {
                console.error(err);
            })
    }), [];

    let output = '';
    if(list) {
        output = list.map((item, i) => {
            return(
                <li key={i}>{item.text}</li>
            );
        })
    }

    return(
        <div>
            <ul>
                {output}
            </ul>
        </div>
    );
}

export default List;
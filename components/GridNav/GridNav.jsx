import { useState, useEffect } from 'react';
import GridItem from './GridItem';
import styles from './GridNav.module.css';
import axios from 'axios';

const GridNav = () => {
    const [images, setImages] = useState({});
    const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN;

    useEffect(() => {
       axios.get(apiDomain + '/section-images')
        .then(response => {
            //emtpy image object
            let imageObject = {};

            response.data.forEach(image => {
                imageObject[image.section] = image.image.url;
            });

            setImages(imageObject);
        })
        .catch(err => {
            console.log(err);
        })
    }, []);

    return (
        <ul className={styles.container}>
            <GridItem url="/music" section={images['music']} sectionText="MUSIC" />
            <GridItem url="/audio_services" section={images['audio services']} sectionText="AUDIO SERVICES" />
            <GridItem url="/about" section={images['about']} sectionText="ABOUT" />
            <GridItem url="/support" section={images['support']} sectionText="SUPPORT" />
            <GridItem url="/shows" section={images['shows']} sectionText="SHOWS" />
            <GridItem url="/contact" section={images['contact']} sectionText="CONTACT" />
        </ul>
    );
}

export default GridNav;
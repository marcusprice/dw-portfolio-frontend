import { useState, useEffect } from 'react';
import styles from './GridNav.module.css';
import axios from 'axios';

const GridNav = () => {
    const [images, setImages] = useState({});
    const API_DOMAIN = 'http://localhost:1337';
    useEffect(() => {
       axios.get('http://localhost:1337/section-images')
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

    console.log(images);

    return (
        <ul className={styles.container}>
            <li style={{backgroundImage: 'url('+ API_DOMAIN + (images['music'] ? images['music']: '') + ')'}} className={styles.listItem}>MUSIC</li>
            <li style={{backgroundImage: 'url('+ API_DOMAIN + (images['audio services'] ? images['audio services']: '') + ')'}} className={styles.listItem}>AUDIO SERVICES</li>
            <li style={{backgroundImage: 'url('+ API_DOMAIN + (images['about'] ? images['about']: '') + ')'}} className={styles.listItem}>ABOUT</li>
            <li style={{backgroundImage: 'url('+ API_DOMAIN + (images['support'] ? images['support']: '') + ')'}} className={styles.listItem}>SUPPORT</li>
            <li style={{backgroundImage: 'url('+ API_DOMAIN + (images['shows'] ? images['shows']: '') + ')'}} className={styles.listItem}>SHOWS</li>
            <li style={{backgroundImage: 'url('+ API_DOMAIN + (images['contact'] ? images['contact']: '') + ')'}} className={styles.listItem}>CONTACT</li>
        </ul>
    );
}

export default GridNav;
import { useState, useEffect } from 'react';
import ContentSection from '../components/ContentSection';
import PageHero from '../components/PageHero';
import axios from 'axios';
import ContentBlock from '../components/ContentBlock';

const About = () => {
    const [content, setContent] = useState({});
    const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN;

    useEffect(() => {
        axios.get(apiDomain + '/about-page')
            .then(result => {
                setContent(result.data)
            })
            .catch(err => {
                console.error(err);
            })
    }, []);

    const bioText = content?.bio?.split('\n').filter(text => text !== '');

    console.log(bioText);
    return (
        <ContentSection>
            <PageHero 
                title="ABOUT" 
                heading={content?.heading} 
                description={content?.description} 
                imgURL={apiDomain + content?.section_image?.image?.url} 
            />

            <ContentBlock title="Bio" text={bioText} />
        </ContentSection>
    );
}

export default About;
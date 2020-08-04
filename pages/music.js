import { useState, useEffect } from 'react';
import axios from 'axios';
import ContentSection from "../components/ContentSection";
import PageHero from "../components/PageHero";

const Music = () => {
    const [content, setContent] = useState({});
    const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN;

    useEffect(() => {
        axios.get(apiDomain + '/music-page')
            .then(result => {
                setContent(result.data);
            })
            .catch(err => {
                console.error(err);
            })
    });

    return(
        <ContentSection>
            <PageHero
                title="MUSIC" 
                heading={content?.heading} 
                description={content?.description} 
                imgURL={apiDomain + content?.section_image?.image?.url} >
            </PageHero>
        </ContentSection>
    );
}

export default Music;
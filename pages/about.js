import { useState, useEffect } from 'react';
import ContentSection from '../components/ContentSection';
import PageHero from '../components/PageHero';
import axios from 'axios';
import ContentBlock from '../components/ContentBlock';
import DualContentBlock from '../components/DualContentBlock';
import DualBlockContainer from '../components/DualBlockContainer';
import List from '../components/List';

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
    
    return (
        <ContentSection>
            <PageHero 
                title="ABOUT" 
                heading={content?.heading} 
                description={content?.description} 
                imgURL={apiDomain + content?.section_image?.image?.url}  
            />

            <ContentBlock title="Bio" text={bioText} />

            <DualBlockContainer>

                <DualContentBlock title="Education">
                    <List apiEndpoint="/schools" />
                </DualContentBlock>

                <DualContentBlock title="Work Experience">
                    <List apiEndpoint="/schools" />
                </DualContentBlock>

            </DualBlockContainer>
        </ContentSection>
    );
}

export default About;
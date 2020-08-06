import { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import dompurify from 'dompurify';
import { convertNewlines, randomInt } from '../utils';
import ContentSection from "../components/ContentSection";
import PageHero from "../components/PageHero";
import ContentBlock from "../components/ContentBlock";

const Music = () => {
    const [content, setContent] = useState({});
    const [bands, setBands] = useState([]);
    const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN;

    useEffect(() => {
        axios.get(apiDomain + '/music-page')
            .then(result => {
                setContent(result.data);
            })
            .catch(err => {
                console.error(err);
            })
        
        axios.get(apiDomain + '/bands?_sort=id:ASC')
            .then(result => {
                setBands(result.data);
            })
            .catch(err => {
                console.error(err);
            })
    }, []);

    let activeProjects = bands.filter(project => project.active_project);
    let pastProjects = bands.filter(project => !project.active_project);

    activeProjects = activeProjects.map(project => {
        let mediaLink = '';
        if(project.media_link && project.media_link !== '') {
            const config = { ADD_TAGS: ['iframe'], KEEP_CONTENT: false }
            const purifiedHTML = dompurify.sanitize(project.media_link, config);
            mediaLink = <div style={{marginTop: '32px'}} dangerouslySetInnerHTML={{__html: purifiedHTML}}></div>;
        }

        return (
            <div key={randomInt(50000)}>
                <h5 className="headingOne">{project.name}</h5>
                { convertNewlines(project.bio) }
                { mediaLink }
            </div>
        );
    })

    pastProjects = pastProjects.map(project => {
        let mediaLink = '';
        if(project.media_link && project.media_link !== '') {
            const config = { ADD_TAGS: ['iframe'], KEEP_CONTENT: false }
            const purifiedHTML = dompurify.sanitize(project.media_link, config);
            mediaLink = <div style={{marginTop: '32px'}} dangerouslySetInnerHTML={{__html: purifiedHTML}}></div>;
        }

        return (
            <div key={randomInt(50000)}>
                <h5 className="headingOne">{project.name}</h5>
                { convertNewlines(project.bio) }
                { mediaLink }
            </div>
        );
    })

    return(
        <ContentSection>
            <PageHero
                title="MUSIC" 
                heading={content?.heading} 
                description={content?.description} 
                imgURL={apiDomain + content?.section_image?.image?.url} 
            />

            <ContentBlock title="Active Projects">
                { activeProjects }
            </ContentBlock>

            <ContentBlock title="Past Projects">
                { pastProjects }
            </ContentBlock>
        </ContentSection>
    );
}

export default Music;
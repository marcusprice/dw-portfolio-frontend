import { useState, useEffect, Fragment } from 'react';
import { randomInt, convertNewlines } from '../utils/';
import axios from 'axios';
import ContentSection from '../components/ContentSection';
import PageHero from '../components/PageHero';
import ContentBlock from '../components/ContentBlock';
import DualContentBlock from '../components/DualContentBlock';
import DualBlockContainer from '../components/DualBlockContainer';
import List from '../components/List';

const About = () => {
    const [content, setContent] = useState({});
    const [jobs, setJobs] = useState([]);
    const [schools, setSchools] = useState([]);
    const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN;

    useEffect(() => {
        axios.get(apiDomain + '/about-page')
            .then(result => {
                setContent(result.data)
            })
            .catch(err => {
                console.error(err);
            });        
            
        axios.get(apiDomain + '/jobs')
            .then(result => {
                setJobs(result.data)
            })
            .catch(err => {
                console.error(err);
            });

        axios.get(apiDomain + '/schools')
            .then(result => {
                setSchools(result.data)
            })
            .catch(err => {
                console.error(err);
            });
            
    }, []);

    const handleAccomplishments = arr => {

        let output = '';

        if(arr.length > 0) {
            output = arr.map(item => {
                const accomplishments = item.accomplishments.map(accomplishment => accomplishment.text);
                return (
                    <Fragment key={randomInt(50000)}>
                        <h5 className="headingOne" key={randomInt(50000)}>{item.heading}</h5>
                        <h5 className="headingTwo" key={randomInt(50000)}>{item.name}</h5>
                        <List 
                            key={randomInt(50000)} 
                            items={accomplishments} 
                            heading={item.heading} 
                            name={item.name} />
                    </Fragment>
                );
            });
        }

        return output;
    }

    return (
        <ContentSection>
            <PageHero 
                title="ABOUT" 
                heading={content?.heading} 
                description={content?.description} 
                imgURL={apiDomain + content?.section_image?.image?.url}  
            />

            <ContentBlock title="Biography">
                {convertNewlines(content?.bio)}
            </ContentBlock>

            <DualBlockContainer>
                <DualContentBlock title="Education">
                    {handleAccomplishments(schools)}
                </DualContentBlock>

                <DualContentBlock title="Work Experience">
                    {handleAccomplishments(jobs)}                    
                </DualContentBlock>
            </DualBlockContainer>
        </ContentSection>
    );
}

export default About;
import { useState } from 'react';
import '../styles/globals.css';
import PageHead from '../components/PageHead';
import Container from 'react-div-100vh';
import Header from '../components/Header';
import ContentContainer from '../components/ContentContainer';
import Nav from '../components/Nav';

function MyApp({ Component, pageProps }) {
  const [navToggled, setNavToggled] = useState(false);
  const [view, setView] = useState('landing');

  return (
    <>
      <PageHead />
      <Container>
        <Header navToggled={navToggled} setNavToggled={setNavToggled}  view={view} setView={setView} />
        <ContentContainer navToggled={navToggled} setNavToggled={setNavToggled} view={view}>
          <Component {...pageProps} setView={setView}/>
        </ContentContainer>
        <Nav navToggled={navToggled} setNavToggled={setNavToggled} setView={setView} />
      </Container>
    </>
  )
}

export default MyApp;
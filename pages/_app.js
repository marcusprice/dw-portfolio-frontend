import { useState } from 'react';
import '../styles/globals.css';
import PageHead from '../components/PageHead';
import Container from 'react-div-100vh';
import Header from '../components/Header';
import ContentContainer from '../components/ContentContainer';
import Nav from '../components/Nav';

function MyApp({ Component, pageProps }) {
  const [navToggled, setNavToggled] = useState(false);

  return (
    <>
      <PageHead />
      <Container>
        <Header navToggled={navToggled} setNavToggled={setNavToggled} />
        <ContentContainer navToggled={navToggled} >
          <Component {...pageProps} />
        </ContentContainer>
        <Nav navToggled={navToggled} />
      </Container>
    </>
  )
}

export default MyApp

import '../styles/globals.css';
import PageHead from '../components/PageHead';
import Container from 'react-div-100vh';
import Header from '../components/Header';
import ContentContainer from '../components/ContentContainer';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <PageHead />
      <Container>
        <Header />
        <ContentContainer>
          <Component {...pageProps} />
        </ContentContainer>
      </Container>
    </>
  )
}

export default MyApp

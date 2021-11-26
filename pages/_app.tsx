import '../styles/globals.css';
import type {AppProps} from 'next/app';
import NavComp from '../Components/navbar/navbar.component';
import Card from '../Components/Card/card.component';
import FooterComponent from '../Components/footer/footer.component';

function MyApp({Component, pageProps}: AppProps) {
  return (
    <>
      <NavComp />
      <Card />
      <FooterComponent />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

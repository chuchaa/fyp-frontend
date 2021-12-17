import type {AppProps} from 'next/app';
import NavComp from '../Components/Navbar/navbar.component';
import Card from '../Components/Card/card.component';
import FooterComponent from '../Components/Footer/footer.component';
import '../styles/globals.css';
function MyApp({Component, pageProps}: AppProps) {
  return (
    <>
      <NavComp />
      <Component {...pageProps} />
      <FooterComponent />
    </>
  );
}

export default MyApp;

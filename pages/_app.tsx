import '../styles/globals.css';
import type {AppProps} from 'next/app';
import NavComp from '../navbar/navbar.component';
import NavBar from '../navbar/Navbar';

function MyApp({Component, pageProps}: AppProps) {
  return (
    <>
      <NavBar />
      <NavComp />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

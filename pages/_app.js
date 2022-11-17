import "../styles/globals.css";
import { Footer, Navbar } from "../components";
import { ModalProvider } from "../context/modalContext";

function MyApp({ Component, pageProps }) {
  return (
    <div className="container mx-auto px-3 lg:px-2">
      <ModalProvider>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </ModalProvider>
    </div>
  );
}

export default MyApp;

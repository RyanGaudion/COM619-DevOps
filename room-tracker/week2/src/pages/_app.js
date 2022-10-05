import Header from "../components/Header";
import "../styles/globals.css";
function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-[#F5F6F8] min-h-screen  pr-20 pt-[87px] w-screen overflow-x-hidden">
      <Header />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;

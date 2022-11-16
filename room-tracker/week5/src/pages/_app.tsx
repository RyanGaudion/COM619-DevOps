import Header from "../components/Header";
import "../styles/globals.css";
import {QueryClientProvider, QueryClient} from "react-query";
import {ReactQueryDevtools} from "react-query/devtools";
import {SessionProvider} from "next-auth/react"
import Script from "next/script";

const queryClient = new QueryClient();

function MyApp({Component, pageProps: {session, ...pageProps}}) {
  return (
    <div className="bg-[#F5F6F8] min-h-screen  pr-20 pt-[87px] w-screen overflow-x-hidden">
      <Script src="https://upload-widget.cloudinary.com/global/all.js" type="text/javascript"/>
      <SessionProvider session={session}>
        <Header />
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={false} />
          <Component {...pageProps} />
        </QueryClientProvider>
      </SessionProvider>
    </div>
  );
}

export default MyApp;

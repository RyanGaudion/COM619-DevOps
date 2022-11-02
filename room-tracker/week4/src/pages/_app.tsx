import Header from "../components/Header";
import "../styles/globals.css";
import {QueryClient, QueryClientProvider} from "react-query"

const queryClient = new QueryClient();

function MyApp({Component, pageProps}) {
  return (
    <div className="bg-[#F5F6F8] min-h-screen  pr-20 pt-[87px] w-screen overflow-x-hidden">
      <Header />
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </div>
  );
}

export default MyApp;

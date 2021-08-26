import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import "../styles/globals.css";

import { ThemeProvider } from 'next-themes'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute='class'>
      <div className="grid grid-cols-12 gap-6 px-5 lg:mb-0 md:mb-16 lg:px-36 xl:px-48 my-14 sm:px-20 md:px-32">
        <div className="h-full col-span-12 p-4 text-base text-center bg-white rounded-lg dark:bg-dark-500 lg:col-span-3 shadow-custom-light dark:shadow-custom-dark">
          <Sidebar  />
        </div>
        <div className="flex flex-col col-span-12 overflow-hidden bg-white rounded-lg shadow-lg dark:bg-dark-500 lg:col-span-9 shadow-custom-light dark:shadow-custom-dark">
          <Navbar />
          <Component {...pageProps} />
        </div>
      </div>
    </ThemeProvider>

  );
}

export default MyApp;

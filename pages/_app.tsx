import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import "../styles/globals.css";

import { ThemeProvider } from 'next-themes'
// shadow-custom-light
function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute='class'>
      <div className="grid grid-cols-12 gap-6 px-5 lg:mb-0 md:mb-16 lg:px-36 xl:px-48 my-14 sm:px-20 md:px-32">

        <div className="h-full col-span-12 p-4 text-base text-center transition duration-150 ease-in-out bg-white rounded-lg bg-opacity-70 bg-clip-padding dark:bg-dark-500 lg:col-span-3 dark:shadow-custom-dark hover:shadow-custom-light" style={{backdropFilter: 'blur(20px)'}}>
          <Sidebar  />
        </div>

        <div className="flex flex-col col-span-12 overflow-hidden bg-white rounded-lg shadow-lg bg-clip-padding bg-opacity-70 dark:bg-dark-500 lg:col-span-9 dark:shadow-custom-dark" style={{backdropFilter: 'blur(20px)'}}>
          <Navbar />
          <Component {...pageProps} />
        </div>
      </div>
    </ThemeProvider>

  );
}

export default MyApp;

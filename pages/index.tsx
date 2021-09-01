import { motion } from "framer-motion";
import { FiMonitor } from "react-icons/fi";
import { fadeUp, routerFadeUp, stagger } from "../animations";
import ServiceCard from "../components/ServiceCard";
import { services } from "../data";

function index() {
  return (
    <motion.div
      variants={routerFadeUp}
      initial="initial"
      animate="animate"
      exit="exit"
      className="flex flex-col flex-grow px-6 pt-1"
    >
      <p
        className="p-3 my-3 font-medium bg-white rounded-lg dark:bg-dark-100 dark:text-white text-medium drop-shadow-2xl"
        style={{ marginLeft: "-.5rem", marginRight: "-.5rem" }}
      >
        Hi, my name is Azri. Currently working as a Software Engineer at
        Talentbook Solutions. I have been involved with multiple client across the
        world such CPF Singapore, Chubb, Accenture Newspage to developed high
        level application to help operate their business in diverse domain such
        Health and Wellness, Retirement Dashboard and DMS (Distribution
        Management System)
      </p>
      <div
        className="flex-grow p-4 mt-5 dark:bg-dark-100"
        style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem" }}
      >
        <h6 className="my-3 text-xl font-bold tracking-wider dark:text-white">What I Offer</h6>
        <motion.div
          className="grid gap-6 my-3 lg:grid-cols-2"
          variants={stagger}
          initial="initial"
          animate="animate"
        >
          {services?.map((service) => (
            <motion.div
              variants={fadeUp}
              className="bg-white rounded-lg dark:bg-dark-200 lg:col-span-1"
              key={service.title}
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}

export default index;

// export async function getServerSideProps(context) {
//   const res = await fetch(`${process.env.VERCEL_URL}/api/services`)
//   const data = await res.json()

//   return {
//     props: {
//       endpoint: data.services,
//     }, // will be passed to the page component as props
//   };
// }

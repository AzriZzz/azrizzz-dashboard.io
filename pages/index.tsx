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
      <p className="my-3 font-medium text-medium">
        &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
        ex ea commodo consequat.&quot;
      </p>
      <div
        className="flex-grow p-4 mt-5 bg-gray-400 dark:bg-dark-100"
        style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem" }}
      >
        <h6 className="my-3 text-xl font-bold tracking-wider">What I Offer</h6>
        <motion.div
          className="grid gap-6 my-3 lg:grid-cols-2"
          variants={stagger}
          initial="initial"
          animate="animate"
        >
          {services?.map((service) => (
            <motion.div
              variants={fadeUp}
              className="bg-gray-200 rounded-lg dark:bg-dark-200 lg:col-span-1"
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

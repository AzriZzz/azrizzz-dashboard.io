import { FiMonitor } from "react-icons/fi";
import ServiceCard from "../components/ServiceCard";
import { services } from "../data";

function index() {
  return (
    <div className="flex flex-col flex-grow px-6 pt-1">
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
        <div className="grid gap-6 lg:grid-cols-2">
          {services?.map((service) => (
            <div
              className="bg-gray-200 rounded-lg dark:bg-dark-200 lg:col-span-1"
              key={service.title}
            >
              <ServiceCard service={service} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default index;

// export async function getServerSideProps(context) {
//   const res = await fetch("http://localhost:3000/api/services").then((res) =>
//     res.json()
//   );

//   return {
//     props: {
//       services: res.services,
//     }, // will be passed to the page component as props
//   };
// }

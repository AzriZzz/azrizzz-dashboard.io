import { FiMonitor } from "react-icons/fi";
import ServiceCard from "../components/ServiceCard";
import { services } from "../data";

function index() {
  return (
    <div className="flex flex-col flex-grow px-6 pt-1">
      <p className="my-3 text-medium">
        &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
        ex ea commodo consequat.&quot;
      </p>
      <div
        className="flex-grow p-4 mt-5 bg-gray-400"
        style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem" }}
      >
        <h6 className="my-3 text-xl font-bold tracking-wider">What I Offer</h6>
        <div className="grid gap-6 lg:grid-cols-2">
          {services?.map((service) => (
            <div
              className="bg-gray-200 rounded-lg lg:col-span-1"
              key={service.title}
            >
              <ServiceCard service={service} />
            </div>
          ))}
        </div>
      </div>
    </div>
    // <div className="p-4">
    //   <div className="mb-12">
    //     <p>
    //       &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    //       eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
    //       minim veniam, quis nostrud exercitation ullamco laboris nisi ut
    //       aliquip ex ea commodo consequat.&quot;
    //     </p>
    //   </div>

    //   <div>
    //     <h3 className="text-2xl">What I am doing</h3>
    //     <div className='grid grid-cols-2'>
    //       <div className="py-3 mr-4 card">
    //         <div className="flex border-2 ">
    //           <div className="p-4 py-8">
    //             <FiMonitor className="w-8 h-8" />
    //           </div>
    //           <div className="flex flex-col content-center justify-center">
    //             <h3>Frontend Development</h3>
    //             <div>
    //               <p>I can build enterprise application</p>
    //             </div>
    //           </div>
    //         </div>
    //       </div>

    //       <div className="py-3 card">
    //         <div className="flex border-2 ">
    //           <div className="p-4 py-8">
    //             <FiMonitor className="w-8 h-8" />
    //           </div>
    //           <div className="flex flex-col content-center justify-center">
    //             <h3>Frontend Development</h3>
    //             <div>
    //               <p>I can build enterprise application</p>
    //             </div>
    //           </div>
    //         </div>
    //       </div>

    //       <div className="py-3 mr-4 card">
    //         <div className="flex border-2 ">
    //           <div className="p-4 py-8">
    //             <FiMonitor className="w-8 h-8" />
    //           </div>
    //           <div className="flex flex-col content-center justify-center">
    //             <h3>Frontend Development</h3>
    //             <div>
    //               <p>I can build enterprise application</p>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
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

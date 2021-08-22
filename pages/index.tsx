import { FiMonitor } from "react-icons/fi";
import { services } from "../data";

function index({services}) {
  return (
    <div className="p-4">
      <div className="mb-12">
        <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat."
        </p>
      </div>

      <div>
        <h3 className="text-2xl">What I am doing</h3>
        <div className='grid grid-cols-2'>
          <div className="py-3 mr-4 card">
            <div className="flex border-2 ">
              <div className="p-4 py-8">
                <FiMonitor className="w-8 h-8" />
              </div>
              <div className="flex flex-col content-center justify-center">
                <h3>Frontend Development</h3>
                <div>
                  <p>I can build enterprise application</p>
                </div>
              </div>
            </div>
          </div>

          <div className="py-3 card">
            <div className="flex border-2 ">
              <div className="p-4 py-8">
                <FiMonitor className="w-8 h-8" />
              </div>
              <div className="flex flex-col content-center justify-center">
                <h3>Frontend Development</h3>
                <div>
                  <p>I can build enterprise application</p>
                </div>
              </div>
            </div>
          </div>

          <div className="py-3 mr-4 card">
            <div className="flex border-2 ">
              <div className="p-4 py-8">
                <FiMonitor className="w-8 h-8" />
              </div>
              <div className="flex flex-col content-center justify-center">
                <h3>Frontend Development</h3>
                <div>
                  <p>I can build enterprise application</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;

export async function getServerSideProps(context) {

  const response = await (await fetch('http://localhost:3000/api/services')).json()
  
  return {
    props: {
      services: response.services
    }, // will be passed to the page component as props
  }
}

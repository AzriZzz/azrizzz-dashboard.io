import Bar from "../components/Bar";
import { languages, tools } from "../data";
import { motion } from "framer-motion";
import { fadeUp, routerFadeUp } from "../animations";

function resume() {
  return (
    <motion.div
      className="px-6 py-2"
      variants={routerFadeUp}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <motion.div variants={fadeUp} initial="initial" animate="animate">
          <h5 className="my-3 text-2xl font-bold">Education</h5>
          <div>
            <h6 className="my-2 text-xl font-bold">
              Bachelor of Computer Science
            </h6>
            <p className="font-semibold">UiTM Shah Alam</p>
            <p className="my-3">Graduated class 2017</p>
          </div>
        </motion.div>
        <motion.div variants={fadeUp} initial="initial" animate="animate">
          <h5 className="my-3 text-2xl font-bold">Education</h5>
          <div>
            <h6 className="my-2 text-xl font-bold">
              Bachelor of Computer Science
            </h6>
            <p className="font-semibold">UiTM Shah Alam</p>
            <p className="my-3">Graduated class 2017</p>
          </div>
        </motion.div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Languages & Frameworks</h5>
          <div className="my-2">
            {languages?.map((language) => (
              <Bar data={language} key={language.name} />
            ))}
          </div>
        </div>
        <div>
          <h5 className="my-3 text-2xl font-bold">Tools</h5>
          <div className="my-2">
            {tools?.map((tool) => (
              <Bar data={tool} key={tool.name} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default resume;

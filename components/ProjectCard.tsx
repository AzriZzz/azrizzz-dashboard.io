import { motion } from "framer-motion";
import Image from "next/image";
import { FunctionComponent, useState } from "react";
import { AiFillGithub, AiFillProject } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import { fadeUp, stagger } from "../animations";
import { IProject } from "../type";

const ProjectCard: FunctionComponent<{
  project: IProject;
  showDetail: null | number;
  setShowDetail: (id: null | number) => void;
}> = ({
  project: {
    name,
    image_path,
    category,
    deployed_url,
    github_url,
    description,
    technologies,
    id,
  },
  showDetail,
  setShowDetail,
}) => {
  return (
    <div>
      <Image
        src={image_path}
        alt={name}
        className="cursor-pointer bg-purple"
        onClick={() => setShowDetail(id)}
        layout="responsive"
        height="150"
        width="300"
      />

      <p className="my-2 text-center">{name}</p>

      {showDetail === id && (
        <div className="absolute top-0 left-0 z-10 grid w-full h-auto p-2 text-black bg-white rounded-lg md:p-10 md:grid-cols-2 gap-x-12 dark:text-white dark:bg-dark-100">
          <motion.div variants={stagger} initial="initial" animate="animate">
            <motion.div variants={fadeUp} className='border-4 border-gray-100'>
              <Image
                src={image_path}
                alt={name}
                layout="responsive"
                height="150"
                width="300"
              />
            </motion.div>
            <motion.div
              variants={stagger}
              initial="initial"
              animate="animate"
              className="flex justify-center my-4 space-x-3"
            >
              <motion.a
                variants={fadeUp}
                href={github_url}
                target="_blank"
                className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200"
              >
                <AiFillGithub className='text-purple' /> <span>Github</span>
              </motion.a>
              <motion.a
                variants={fadeUp}
                href={deployed_url}
                target="_blank"
                className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200"
              >
                <AiFillProject className='text-purple' /> <span>Project</span>
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div variants={stagger} initial="initial" animate="animate">
            <motion.h2
              variants={fadeUp}
              className="mb-3 text-xl font-medium md:text-2xl"
            >
              {name}
            </motion.h2>
            <motion.h3 variants={fadeUp} className="mb-3 font-medium">
              {description}
            </motion.h3>
            <motion.div
              variants={fadeUp}
              className="flex flex-wrap mt-5 space-x-2 text -sm tracking-order"
            >
              {technologies?.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 bg-gray-200 rounded-sm dark:bg-dark-200"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </motion.div>

          <motion.button
            variants={fadeUp}
            initial="initial"
            animate="animate"
            onClick={() => setShowDetail(null)}
            className="absolute p-1 bg-gray-200 rounded-full top-3 right-3 focus:outline-none dark:bg-dark-200"
          >
            <MdClose className='text-purple' size={30} />
          </motion.button>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;

import { FunctionComponent } from "react";
import { IProject } from "../type";

const ProjectCard: FunctionComponent<{ project: IProject }> = ({
  project: {
    name,
    image_path,
    category,
    deployed_url,
    github_url,
    description,
    technologies,
  },
}) => {
  return (
    <div className="col-span-12 p-2 sm:col-span-6 lg:col-span-4">
      <div>{name}</div>
    </div>
  );
};

export default ProjectCard;

import ProjectCard from "../components/ProjectCard";
import { projects } from "../data";

function Projects() {
  return (
    <div className="p-4">
      <nav>Navbar</nav>

      <div className="grid grid-cols-12 gap-4 my-3">
        {projects.map((project) => (
            <ProjectCard project={project} key={project.name} />
        ))}
      </div>
    </div>
  );
}

export default Projects;

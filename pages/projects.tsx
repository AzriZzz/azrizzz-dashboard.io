import ProjectCard from "../components/ProjectCard";
import { projects } from "../data";

function Projects() {
  return (
    // overflow-y-scroll + active only the more than 6 project available
    <div className="px-5 py-2 " style={{ height: '65vh'}}>
      <nav>Navbar</nav>

      <div className="relative grid grid-cols-12 gap-4 my-3">
        {projects.map((project) => (
            <ProjectCard project={project} key={project.name} />
        ))}
      </div>
    </div>
  );
}

export default Projects;

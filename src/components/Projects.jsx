import "./Projects.css";

const Projects = () => {
  const projectList = [
    "project1",
    "project2",
    "project3",
    "project4",
    "project5",
  ];
  const projectCarasole = projectList.map((projectItem, index) => {
    return <div className={"projects"}>{projectItem}</div>;
  });
  return (
    <div className="projects-section" id="projects">
      {projectCarasole}
    </div>
  );
};

export default Projects;

import Private from "../../hoc/Privet";
import LayoutAdmin from "../../layout";
import {PERMISSIONS} from "../../utils/permitions";


const ProjectsContent = ()=>{
  return <div>Projects</div>
}

const Content = Private(ProjectsContent, [PERMISSIONS.PROJECTS_READ]);
const Projects = () => {
  return (
    <LayoutAdmin>
      <Content/>
    </LayoutAdmin>
  );
};

export default Projects;
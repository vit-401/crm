import Private from "../../hoc/Privet";
import LayoutAdmin from "../../layout";
import {PERMISSIONS} from "../../utils/permitions";
import ProjectsContent from "../../containers/Projects";




const Content = Private(ProjectsContent, [PERMISSIONS.PROJECTS_READ]);
const Projects = () => {
  return (
    <LayoutAdmin>
      <Content/>
    </LayoutAdmin>
  );
};

export default Projects;
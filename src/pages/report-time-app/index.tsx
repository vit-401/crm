import Private from "../../hoc/Privet";
import LayoutAdmin from "../../layout";
import {PERMISSIONS} from "../../utils/permitions";
import ReportAppContent from "../../containers/ReportTimeApp";




const Content = Private(ReportAppContent, [PERMISSIONS.PROJECTS_READ]);
const ReportTimeApp = () => {
  return (
    <LayoutAdmin>
      <Content/>
    </LayoutAdmin>
  );
};

export default ReportTimeApp;
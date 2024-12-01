import Private from "../../hoc/Privet";
import LayoutAdmin from "../../layout";
import {PERMISSIONS} from "../../utils/permitions";
import DashBoardContent from "../../containers/Dashboard";




const Content = Private(DashBoardContent, [PERMISSIONS.DASHBOARD_READ]);
const Dashboard = () => {
  return (
    <LayoutAdmin>
      <Content/>
    </LayoutAdmin>
  );
};

export default Dashboard
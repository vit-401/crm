import Private from "../../hoc/Privet";
import LayoutAdmin from "../../layout";
import {PERMISSIONS} from "../../utils/permitions";


const Test = ()=>{
  return <div>Dashboard</div>
}

const Content = Private(Test, [PERMISSIONS.DASHBOARD_READ]);
const Dashboard = () => {
  return (
    <LayoutAdmin>
      <Content/>
      {/*<div>Dashboard</div>*/}
    </LayoutAdmin>
  );
};

export default Dashboard
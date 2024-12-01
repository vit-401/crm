import Private from "../../hoc/Privet";
import LayoutAdmin from "../../layout";
import {PERMISSIONS} from "../../utils/permitions";


const EmployeesContent = ()=>{
  return <div>Employees</div>
}

const Content = Private(EmployeesContent, [PERMISSIONS.EMPLOYEES_READ]);
const Employees = () => {
  return (
    <LayoutAdmin>
      <Content/>
    </LayoutAdmin>
  );
};

export default Employees;
import Private from "../../hoc/Privet";
import LayoutAdmin from "../../layout";
import {PERMISSIONS} from "../../utils/permitions";
import EmployeesContent from "../../containers/Employees";



const Content = Private(EmployeesContent, [PERMISSIONS.EMPLOYEES_READ]);
const Employees = () => {
  return (
    <LayoutAdmin>
      <Content/>
    </LayoutAdmin>
  );
};

export default Employees;
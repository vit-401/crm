import Private from "../../hoc/Privet";
import LayoutAdmin from "../../layout";
import {PERMISSIONS} from "../../utils/permitions";


const VacationsContent = ()=>{
  return <div>Vacations</div>
}

const Content = Private(VacationsContent, [PERMISSIONS.VACATIONS_READ]);
const Vacations = () => {
  return (
    <LayoutAdmin>
      <Content/>
    </LayoutAdmin>
  );
};

export default Vacations;
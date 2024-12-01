import Private from "../../hoc/Privet";
import LayoutAdmin from "../../layout";
import {PERMISSIONS} from "../../utils/permitions";
import VacationsContent from "../../containers/Vacations";


const Content = Private(VacationsContent, [PERMISSIONS.VACATIONS_READ]);
const Vacations = () => {
    return (
        <LayoutAdmin>
            <Content/>
        </LayoutAdmin>
    );
};

export default Vacations;
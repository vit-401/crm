import Private from "../../hoc/Privet";
import LayoutAdmin from "../../layout";
import {PERMISSIONS} from "../../utils/permitions";
import InfoPortalContent from "../../containers/InfoPortal";




const Content = Private(InfoPortalContent, [PERMISSIONS.INFO_PORTAL_READ]);
const InfoPortal = () => {
  return (
    <LayoutAdmin>
      <Content/>
    </LayoutAdmin>
  );
};

export default InfoPortal;
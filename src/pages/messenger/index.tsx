import Private from "../../hoc/Privet";
import LayoutAdmin from "../../layout";
import {PERMISSIONS} from "../../utils/permitions";
import MessengerContent from "../../containers/Messenger";




const Content = Private(MessengerContent, [PERMISSIONS.MESSENGER_READ]);
const Messenger = () => {
  return (
    <LayoutAdmin>
      <Content/>
    </LayoutAdmin>
  );
};

export default Messenger;
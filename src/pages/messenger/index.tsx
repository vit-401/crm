import Private from "../../hoc/Privet";
import LayoutAdmin from "../../layout";
import {PERMISSIONS} from "../../utils/permitions";


const MessengerContent = ()=>{
  return <div>Messenger</div>
}

const Content = Private(MessengerContent, [PERMISSIONS.MESSENGER_READ]);
const Messenger = () => {
  return (
    <LayoutAdmin>
      <Content/>
    </LayoutAdmin>
  );
};

export default Messenger;
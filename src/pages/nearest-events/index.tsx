import Private from "../../hoc/Privet";
import LayoutAdmin from "../../layout";
import NearestEventsContent from "../../containers/NearestEvents"



const Content = Private(NearestEventsContent, []);
const NearestEvents = () => {
  return (
    <LayoutAdmin>
      <Content/>
    </LayoutAdmin>
  );
};

export default NearestEvents;
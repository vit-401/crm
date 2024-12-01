import Private from "../../hoc/Privet";
import LayoutAdmin from "../../layout";
import {PERMISSIONS} from "../../utils/permitions";
import CalendarContent from "../../containers/Calendar";




const Content = Private(CalendarContent, [PERMISSIONS.CALENDAR_READ]);

const Calendar = () => {
  return (
    <LayoutAdmin>
      <Content/>
    </LayoutAdmin>
  );
};

export default Calendar;
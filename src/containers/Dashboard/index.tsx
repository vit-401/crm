import Workload from "./components/Workload";
import NearestEvents from "./components/NearestEvents";
import style from "./style.module.scss"
import TopHeader from "./components/TopHeader";
import Projects from "./components/Projects";
import ActivityStream from "./components/ActivityStream";

const DashBoardContent = () => {
    return <div>
        <TopHeader/>
        <div className={style.wrapper}>
            <Workload/>
            <NearestEvents/>
            <Projects/>
            <ActivityStream/>
        </div>


    </div>
}

export default DashBoardContent
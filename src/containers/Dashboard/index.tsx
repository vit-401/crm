import Workload from "./components/Workload";
import NearestEvents from "./components/NearestEvents";
import style from "./style.module.scss"
import Projects from "./components/Projects";
import ActivityStream from "./components/ActivityStream";
import TopHeader from "../../components/admin/TopHeader";
import {Grid} from "@mui/material";

const DashBoardContent = () => {
    return <div>
        <TopHeader title={"Dashboard"}/>
        {/*<div className={style.wrapper}>*/}
        <Grid container spacing={2} sx={{marginTop: '15px'}}>
            <Grid item xs={12} md={8}>
                <Workload/>
            </Grid>
            <Grid item xs={12} md={4}>
                <NearestEvents/>
            </Grid>
            <Grid item xs={12} md={8}>
                <Projects/>
            </Grid>
            <Grid item xs={12} md={4}>
                <ActivityStream/>
            </Grid>
        </Grid>

        {/*</div>*/}


    </div>
}

export default DashBoardContent
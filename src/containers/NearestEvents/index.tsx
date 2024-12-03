import React, {useState} from "react";
import {
    Box,
    Typography,
    Card,
    CardContent,
    Button,
    Grid,
    Icon, SvgIconProps,
} from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import EventIcon from "@mui/icons-material/Event";
import CakeIcon from "@mui/icons-material/Cake";
import WorkIcon from "@mui/icons-material/Work";
import {ADMIN_PATH} from "../../utils/paths";
import TopHeader from "../../components/admin/TopHeader";
import style from "./style.module.scss";
import classes from "*.module.css";
import AddEventDialog from "./components/AddEventDialog";

interface Event {
    title: string;
    time: string;
    duration: string;
    icon: React.ElementType<SvgIconProps>;
    priority: "up" | "down";
    date: string | "Today" | "Tomorrow";
    color: string;
}

const events: Event[] = [
    {
        title: "Presentation of the new department",
        time: "6:00 PM",
        duration: "4h",
        color: "#3F8CFF",
        icon: WorkIcon,
        priority: "up",
        date: "Today",
    },
    {
        title: "Anna’s Birthday",
        time: "5:00 PM",
        duration: "2h",
        icon: CakeIcon,
        priority: "down",
        date: "Today",
        color: "#DE92EB"
    },
    {
        title: "Meeting with Development Team",
        time: "5:00 PM",
        duration: "4h",
        icon: EventIcon,
        priority: "up",
        date: "Tomorrow",
        color: "#FDC748"
    },
    {
        title: "Ray’s Birthday",
        time: "2:00 PM",
        duration: "1h 30m",
        icon: CakeIcon,
        priority: "down",
        date: "Tomorrow",
        color: "#DE92EB"
    },
    {
        title: "Meeting with CEO",
        time: "5:00 PM",
        duration: "1h",
        icon: WorkIcon,
        priority: "up",
        date: "Sep 14",
        color: "#3F8CFF"
    },
    {
        title: "Movie night (Tenet)",
        time: "5:00 PM",
        duration: "3h",
        icon: EventIcon,
        priority: "down",
        date: "Sep 15",
        color: "#6D5DD3"
    },
    {
        title: "Lucas’s Birthday",
        time: "5:30 PM",
        duration: "2h",
        icon: CakeIcon,
        priority: "down",
        date: "Sep 29",
        color: "#DE92EB"
    },
    {
        title: "Meeting with CTO",
        time: "12:00 PM",
        duration: "1h",
        icon: WorkIcon,
        priority: "up",
        date: "Sep 30",
        color: "#3F8CFF"
    },
];

const NearestEvents: React.FC = () => {
    const [open, setOpen] = useState(false);

    // Handle open/close
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <>
            <TopHeader title={"Nearest Events"}/>
            <div className={style.wrapper}>

                <Box>
                    {/* Back to Dashboard */}
                    <Typography
                        variant="body2"
                        component="a"
                        href={ADMIN_PATH.DASHBOARD}
                        sx={{
                            display: "inline-block",
                            textDecoration: "none",
                            marginBottom: 2,
                            textTransform: 'none', color: '#1976d2'
                        }}
                    >
                        &larr; Back to Dashboard
                    </Typography>


                    {/* Add Event Button */}
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "end",
                            margin: "20px 0 20px",
                        }}
                    >

                        <Button onClick={handleOpen} variant="button-popup">
                            + Add Event
                        </Button>
                    </Box>


                    {/* Events Grid */}
                    <Grid container spacing={3}>
                        {events.map((event, index) => (
                            <Grid item xs={12} md={6} key={index}>
                                <Card
                                    sx={{
                                        position: "relative",
                                        borderRadius: '15px',
                                        height: '100%',
                                        minHeight: '130px',
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                        padding: 2,
                                        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                                    }}
                                >
                                    <div style={{backgroundColor: event.color}} className={style.cardLineDecor}></div>

                                    <Box
                                        className={style.cardInfo}
                                        sx={{
                                            marginLeft: '46px',
                                            display: "flex",
                                            gap: 2
                                        }}>

                                        {/* Icon */}
                                        <Box
                                            component={event.icon} // Render the icon dynamically
                                            sx={{
                                                color: event.color, // Apply the color dynamically
                                                fontSize: 32, // Adjust icon size if needed
                                                marginRight: 2,
                                            }}
                                        />


                                        {/* Event Info */}
                                        <Box>
                                            <Typography
                                                variant="body1"
                                                fontWeight="bold"
                                                sx={{marginBottom: 0.5}}
                                            >
                                                {event.title}
                                            </Typography>
                                            <Typography
                                                sx={{
                                                    marginTop: '25px'
                                                }}
                                                variant="body2"
                                                color="textSecondary"
                                            >{`${event.date} | ${event.time}`}</Typography>
                                        </Box>
                                    </Box>

                                    {/* Duration and Priority */}
                                    <Box sx={{
                                        textAlign: "right",
                                    }}>


                                        {event.priority === "up" ? (
                                            <ArrowUpwardIcon sx={{color: "green"}}/>
                                        ) : (
                                            <ArrowDownwardIcon sx={{color: "red"}}/>
                                        )}
                                        <Typography
                                            variant="body2"
                                            sx={{
                                                marginTop: '10px',
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "flex-end",
                                                gap: 1,
                                                backgroundColor: "#F4F9FD",
                                                padding: "10px",
                                                borderRadius: '8px',

                                            }}
                                        >
                                            <AccessTimeIcon fontSize="small"/> {event.duration}
                                        </Typography>
                                    </Box>
                                </Card>
                            </Grid>
                        ))}

                    </Grid>
                    <AddEventDialog open={open} onClose={handleClose}/>
                </Box>
            </div>
        </>

    );
};

export default NearestEvents;

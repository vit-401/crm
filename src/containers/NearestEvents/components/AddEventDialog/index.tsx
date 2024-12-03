import React, {useState} from "react";
import {
    Dialog,
    DialogTitle,
    DialogContent,
    TextField,
    Typography,
    Select,
    MenuItem,
    FormControl,
    InputLabel,
    Switch,
    FormControlLabel,
    Grid,
    Button,
    Box, ToggleButtonGroup, ToggleButton, Checkbox,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

interface AddEventDialogProps {
    open: boolean;
    onClose: () => void;
}

const AddEventDialog: React.FC<AddEventDialogProps> = ({open, onClose}) => {

    const [repeatEvent, setRepeatEvent] = useState(false);
    const [frequency, setFrequency] = useState<"daily" | "weekly" | "monthly">(
        "daily"
    );
    const [selectedDays, setSelectedDays] = useState<string[]>([]);
    const [repeatEveryDay, setRepeatEveryDay] = useState(false);

    const handleToggleDay = (day: string) => {
        setSelectedDays((prev) =>
            prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
        );
    };
    return (
        <Dialog

            open={open}
            onClose={onClose}
            maxWidth="sm"
            fullWidth
        >
            {/* Header */}
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "0 50px",
                    marginTop: "20px",
                }}
            >
                <Typography variant="h6" fontWeight="bold">
                    Add Event
                </Typography>
                <Button onClick={onClose} color="secondary" sx={{minWidth: "auto"}}>
                    <CloseIcon/>
                </Button>
            </Box>

            {/* Content */}
            <DialogContent>
                <Box
                    component="form"
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "20px",
                        marginTop: "10px",
                        padding: "0 30px",

                    }}
                >
                    {/* Event Name */}
                    <TextField
                        label="Event Name"
                        placeholder="Enter event name"
                        fullWidth
                    />

                    {/* Event Category */}
                    <FormControl fullWidth>
                        <InputLabel>Event Category</InputLabel>
                        <Select label="Event Category" defaultValue="">
                            <MenuItem value="Corporate Event">Corporate Event</MenuItem>
                            <MenuItem value="Birthday">Birthday</MenuItem>
                            <MenuItem value="Meeting">Meeting</MenuItem>
                        </Select>
                    </FormControl>

                    {/* Priority */}
                    <FormControl fullWidth>
                        <InputLabel>Priority</InputLabel>
                        <Select label="Priority" defaultValue="Medium">
                            <MenuItem value="High">High</MenuItem>
                            <MenuItem value="Medium">Medium</MenuItem>
                            <MenuItem value="Low">Low</MenuItem>
                        </Select>
                    </FormControl>

                    {/* Date and Time */}
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                label="Date"
                                type="date"
                                InputLabelProps={{shrink: true}}
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                label="Start Time"
                                type="datetime-local"
                                InputLabelProps={{shrink: true}}
                                fullWidth
                            />
                        </Grid>

                        {/* End Time */}
                        <Grid item xs={6}>
                            <TextField
                                label="End Time"
                                type="datetime-local"
                                InputLabelProps={{shrink: true}}
                                fullWidth
                            />
                        </Grid>
                    </Grid>

                    {/* Description */}
                    <TextField
                        label="Description"
                        placeholder="Add some description of the event"
                        multiline
                        rows={3}
                        fullWidth
                    />

                    <Box>

                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                backgroundColor: "rgba(244, 249, 253, 1)",
                                padding: "25px 20px",
                                borderRadius: "8px",
                                marginBottom: "20px",
                            }}
                        >
                            <Typography variant="centeredUnderlineText">
                                Repeat Event
                            </Typography>
                            <Switch
                                checked={repeatEvent}
                                onChange={() => setRepeatEvent((prev) => !prev)}
                                color="primary"
                            />
                        </Box>
                        {
                            repeatEvent && <ToggleButtonGroup
                                color="primary"
                                value={frequency}
                                exclusive
                                onChange={(_, value) => setFrequency(value || frequency)}
                                sx={{
                                    marginBottom: 2,
                                    display: "flex",
                                    justifyContent: "center",
                                }}
                            >
                                <ToggleButton value="daily">Daily</ToggleButton>
                                <ToggleButton value="weekly">Weekly</ToggleButton>
                                <ToggleButton value="monthly">Monthly</ToggleButton>
                                <ToggleButton value="yearly">Yearly</ToggleButton>

                            </ToggleButtonGroup>
                        }
                    </Box>


                    {/* Save Button */}
                    <Button
                        variant="contained"
                        sx={{
                            alignSelf: "flex-end",
                            backgroundColor: "#2979ff",
                            textTransform: "none",
                            padding: "10px 20px",
                            "&:hover": {backgroundColor: "#255cb3"},
                        }}
                        onClick={onClose}
                    >
                        Save Event
                    </Button>
                </Box>
            </DialogContent>
        </Dialog>
    );
};

export default AddEventDialog;

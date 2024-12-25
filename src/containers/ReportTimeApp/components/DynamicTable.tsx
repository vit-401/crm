import React, {useState} from "react";
import {
    Button,
    TextField,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Grid,
    IconButton, TableContainer, Paper,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import {DatePicker} from "@mui/x-date-pickers";

type Row = {
    date: string;
    startTime: string;
    endTime: string;
};

const DynamicTable: React.FC = () => {
    const [rows, setRows] = useState<Row[]>([
        {date: getFormattedDate(new Date()), startTime: "07:00", endTime: "15:00"},
    ]);
    const [defaultStartTime, setDefaultStartTime] = useState<string>("07:00");
    const [rate, setRate] = useState<number>(22);
    const [firstName, setFirstName] = useState<string>("Vitalii");
    const [lastName, setLastName] = useState<string>("Prysizhniuk");

    function getFormattedDate(date: Date): string {
        const day = String(date.getDate()).padStart(2, "0");
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    }

    const addRow = () => {
        const lastDate = rows.length
            ? new Date(
                rows[rows.length - 1].date.split("/").reverse().join("-")
            )
            : new Date();

        const nextDate = new Date(lastDate.getTime());
        nextDate.setDate(lastDate.getDate() + 2);
        setRows([
            ...rows,
            {date: getFormattedDate(nextDate), startTime: defaultStartTime, endTime: "15:00"},
        ]);
    };

    const removeRow = (index: number) => {
        const updatedRows = rows.filter((_, rowIndex) => rowIndex !== index);
        setRows(updatedRows);
    };

    const handleChange = (index: number, field: keyof Row, value: string) => {
        const updatedRows = [...rows];
        updatedRows[index][field] = value;
        setRows(updatedRows);
    };

    const calculateTotalTime = (startTime: string, endTime: string): number => {
        if (!startTime || !endTime) return 0;

        const [startHours, startMinutes] = startTime.split(":").map(Number);
        const [endHours, endMinutes] = endTime.split(":").map(Number);

        const startDate = new Date(0, 0, 0, startHours, startMinutes);
        const endDate = new Date(0, 0, 0, endHours, endMinutes);

        let diff = (endDate.getTime() - startDate.getTime()) / (1000 * 60);
        if (diff < 0) diff += 24 * 60;

        return diff / 60; // Return total hours as a decimal
    };

    const calculateTotalHours = (): number => {
        return rows.reduce((total, row) => {
            return total + calculateTotalTime(row.startTime, row.endTime);
        }, 0);
    };

    const calculateTotalPayment = (): number => {
        const totalHours = calculateTotalHours();
        return totalHours * rate;
    };

    const generatePDF = () => {
        if (!firstName || !lastName) {
            alert("Please fill in both First Name and Last Name fields.");
            return;
        }

        const invalidRows = rows.some((row) => !row.date || !row.startTime || !row.endTime);
        if (invalidRows) {
            alert("Please fill in all fields in the table.");
            return;
        }

        const doc = new jsPDF();

        const sortedRows = [...rows].sort((a, b) => {
            const dateA = new Date(a.date.split("/").reverse().join("-"));
            const dateB = new Date(b.date.split("/").reverse().join("-"));
            return dateA.getTime() - dateB.getTime();
        });

        const startDate = sortedRows[0]?.date || "";
        const endDate = sortedRows[sortedRows.length - 1]?.date || "";
        const title = `Time Report ${startDate} - ${endDate}`;

        doc.text(title, 14, 10);
        doc.text(`Name: ${firstName} ${lastName}`, 14, 20);

        const tableData = sortedRows.map((row) => [
            row.date,
            row.startTime,
            row.endTime,
            calculateTotalTime(row.startTime, row.endTime).toFixed(2),
        ]);

        autoTable(doc, {
            head: [["Date", "Start Time", "End Time", "Total Time Worked"]],
            body: tableData,
            startY: 30,
        });

        doc.save(`time-report ${getFormattedDate(new Date())} ${lastName}.pdf`);
    };

    return (
        <Grid container spacing={2} padding={2}>
            <Grid item xs={12} sm={6} md={4}>
                <TextField
                    fullWidth
                    label="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <TextField
                    fullWidth
                    label="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <TextField
                    fullWidth
                    label="Default Start Time"
                    type="time"
                    value={defaultStartTime}
                    onChange={(e) => setDefaultStartTime(e.target.value)}
                />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <TextField
                    fullWidth
                    label="Hourly Rate ($/h)"
                    type="number"
                    value={rate}
                    onChange={(e) => setRate(parseFloat(e.target.value))}
                />
            </Grid>

            <Grid item xs={12}>
                <TableContainer component={Paper}>

                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Date</TableCell>
                                <TableCell>Start Time</TableCell>
                                <TableCell>End Time</TableCell>
                                <TableCell>Total Time Worked (h)</TableCell>
                                <TableCell>Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row, index) => (
                                <TableRow key={index}>
                                    <TableCell sx={{minWidth: "153px"}}>

                                        <TextField
                                            fullWidth
                                            type="text"
                                            value={row.date}
                                            onChange={(e) => handleChange(index, "date", e.target.value)}
                                        />
                                    </TableCell>
                                    <TableCell>
                                        <TextField
                                            fullWidth
                                            type="time"
                                            value={row.startTime || defaultStartTime}
                                            onChange={(e) => handleChange(index, "startTime", e.target.value)}
                                        />
                                    </TableCell>
                                    <TableCell>
                                        <TextField
                                            fullWidth
                                            type="time"
                                            value={row.endTime}
                                            onChange={(e) => handleChange(index, "endTime", e.target.value)}
                                        />
                                    </TableCell>
                                    <TableCell>
                                        {calculateTotalTime(row.startTime, row.endTime).toFixed(2)}
                                    </TableCell>
                                    <TableCell>
                                        <IconButton onClick={() => removeRow(index)} color="error">
                                            <DeleteIcon/>
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>

            <Grid item container gap={"20px"}>
                <Grid item  sm={6} md={4}>

                    <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        startIcon={<AddIcon/>}
                        onClick={addRow}
                        style={{marginRight: "1rem"}}
                    >
                        Add Row
                    </Button>
                </Grid>
                <Grid  sm={6} md={4}>

                    <Button fullWidth variant="outlined" onClick={generatePDF}>
                        Generate PDF Report
                    </Button>
                </Grid>

            </Grid>

            <Grid item xs={12}>
                <p>Total Time Worked: {calculateTotalHours().toFixed(2)} hours</p>
                <p>Total Payment: ${calculateTotalPayment().toFixed(2)}</p>
            </Grid>
        </Grid>
    );
};

export default DynamicTable;

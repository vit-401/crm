import React, {useState} from "react";
import {Button, TextField, Table, TableHead, TableRow, TableCell, TableBody} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import IconButton from "@mui/material/IconButton";
type Row = {
    date: string;
    startTime: string;
    endTime: string;
};

const DynamicTable: React.FC = () => {
    const [rows, setRows] = useState<Row[]>([
        { date: getFormattedDate(new Date()), startTime: "07:00", endTime: "15:00" },
    ]);
    const [defaultStartTime, setDefaultStartTime] = useState<string>("07:00");
    const [rate, setRate] = useState<number>(20); // Hourly rate
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
            { date: getFormattedDate(nextDate), startTime: defaultStartTime, endTime: "15:00" },
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

        // Sort rows by date (ascending order)
        const sortedRows = [...rows].sort((a, b) => {
            const dateA = new Date(a.date.split("/").reverse().join("-"));
            const dateB = new Date(b.date.split("/").reverse().join("-"));
            return dateA.getTime() - dateB.getTime();
        });

        // Determine report title with date range
        const startDate = sortedRows[0]?.date || "";
        const endDate = sortedRows[sortedRows.length - 1]?.date || "";
        const title = `Time Report ${startDate} - ${endDate}`;

        // Add title and name
        doc.text(title, 14, 10); // Title at the top
        doc.text(`Name: ${firstName} ${lastName}`, 14, 20); // Name below the title

        // Add the table
        const tableData = sortedRows.map((row) => [
            row.date,
            row.startTime,
            row.endTime,
            calculateTotalTime(row.startTime, row.endTime),
        ]);

        autoTable(doc, {
            head: [["Date", "Start Time", "End Time", "Total Time Worked"]],
            body: tableData,
            startY: 30, // Ensure the table starts below the name
        });

        doc.save(`time-report ${getFormattedDate(new Date())} ${lastName}.pdf`);
    };
    return (
        <div style={{ padding: "1rem" }}>
            <div style={{ marginBottom: "1rem" }}>
                <TextField
                    label="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    style={{ marginRight: "1rem" }}
                />
                <TextField
                    label="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />
            </div>
            <div style={{ marginBottom: "1rem" }}>
                <TextField
                    label="Default Start Time"
                    type="time"
                    value={defaultStartTime}
                    onChange={(e) => setDefaultStartTime(e.target.value)}
                    InputLabelProps={{ shrink: true }}
                    style={{ marginRight: "1rem" }}
                />
                <TextField
                    label="Hourly Rate ($/h)"
                    type="number"
                    value={rate}
                    onChange={(e) => setRate(parseFloat(e.target.value))}
                />
            </div>
            <Table style={{ marginBottom: "1rem" }}>
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
                            <TableCell>
                                <TextField
                                    type="text"
                                    value={row.date}
                                    onChange={(e) => handleChange(index, "date", e.target.value)}
                                />
                            </TableCell>
                            <TableCell>
                                <TextField
                                    type="time"
                                    value={row.startTime || defaultStartTime}
                                    onChange={(e) => handleChange(index, "startTime", e.target.value)}
                                />
                            </TableCell>
                            <TableCell>
                                <TextField
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
                                    <DeleteIcon />
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <Button
                variant="contained"
                color="primary"
                startIcon={<AddIcon />}
                onClick={addRow}
                style={{ marginRight: "1rem" }}
            >
                Add Row
            </Button>
            <Button
                variant="outlined"
                onClick={generatePDF}
            >
                Generate PDF Report
            </Button>
            <div style={{ marginTop: "1rem" }}>
                <p>Total Time Worked: {calculateTotalHours().toFixed(2)} hours</p>
                <p>Total Payment: ${calculateTotalPayment().toFixed(2)}</p>
            </div>
        </div>
    );
};

export default DynamicTable;

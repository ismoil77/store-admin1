import { TextField } from "@mui/material";
import { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
    createData("Eclair", 262, 16.0, 24, 6.0),
    createData("Cupcake", 305, 3.7, 67, 4.3),
    createData("Gingerbread", 356, 16.0, 49, 3.9),
];


const Orders = () => {
    const [age, setAge] = useState("");
    // const dataProduct = useSelector((state) => state.todos.dataProductId);
    // const [cnt, setCnt] = useState(0)

    // const dispatch = useDispatch();
    const navigat = useNavigate()

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <div className="px-[2%]">
            <div className="flex justify-between py-[30px]">
                <h1 className="text-[30px] font-[700] font-sans">Orders</h1>
                <button onClick={() => navigat("/dashboard/addproducts")} className="px-[25px] bg-[#2563EB] text-[white] rounded-[5px]">
                    + Add order
                </button>
            </div>
            <div className="flex justify-start gap-[10px] py-[30px]">
                <TextField
                    sx={{ width: "250px" }}
                    id="outlined-basic"
                    label="Search..."
                    variant="outlined"
                />
                <FormControl sx={{ width: "150px" }}>
                    <InputLabel id="demo-simple-select-label">Filter</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        label="Filter"
                        onChange={handleChange}
                    >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <div>
                <Table sx={{ minWidth: 1100 }} aria-label="simple table">
                    <TableHead>
                        <TableRow sx={{ color: "grey" }}>
                            <TableCell sx={{ color: "grey" }}>
                                <input type="checkbox" /> Order
                            </TableCell>
                            <TableCell sx={{ color: "grey" }}>Date</TableCell>
                            <TableCell sx={{ color: "grey" }}>Customer</TableCell>
                            <TableCell sx={{ color: "grey" }}>Payment status</TableCell>
                            <TableCell sx={{ color: "grey" }}>Order Status</TableCell>
                            <TableCell sx={{ color: "grey" }}>Order Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow
                            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                        >
                            <TableCell
                                width={150}
                                sx={{ display: "flex", alignItems: "center", gap: "10px" }}
                            >
                                <input type="checkbox" />
                                <h1 className="text-[18px] font-[600]">#12512B</h1>
                            </TableCell><TableCell sx={{ fontSize: "17px" }}>May 5, 4:20 PM</TableCell>
                            <TableCell sx={{ fontSize: "17px" }}>Tom Anderson</TableCell>
                            <TableCell sx={{ fontSize: "17px" }}><span className="px-[20px] py-[5px] rounded-[5px] bg-[#C4F8E2] text-[#06A561]">Paid</span></TableCell>
                            <TableCell sx={{ fontSize: "17px" }}><span className="px-[20px] py-[5px] rounded-[5px] bg-[#F99600] text-[white]">Ready</span></TableCell>
                            <TableCell sx={{ fontSize: "17px" }}>$49.90</TableCell>
                        </TableRow>
                        <TableRow
                            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                        >
                            <TableCell
                                width={150}
                                sx={{ display: "flex", alignItems: "center", gap: "10px" }}
                            >
                                <input type="checkbox" />
                                <h1 className="text-[18px] font-[600]">#12512B</h1>
                            </TableCell>
                            <TableCell sx={{ fontSize: "17px" }}>May 5, 4:20 PM</TableCell>
                            <TableCell sx={{ fontSize: "17px" }}>Tom Anderson</TableCell>
                            <TableCell sx={{ fontSize: "17px" }}><span className="px-[20px] py-[5px] rounded-[5px] bg-[#C4F8E2] text-[#06A561]">Paid</span></TableCell>
                            <TableCell sx={{ fontSize: "17px" }}><span className="px-[20px] py-[5px] rounded-[5px] bg-[#F99600] text-[white]">Ready</span></TableCell>
                            <TableCell sx={{ fontSize: "17px" }}>$49.90</TableCell>
                        </TableRow>
                        <TableRow
                            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                        >
                            <TableCell
                                width={150}
                                sx={{ display: "flex", alignItems: "center", gap: "10px" }}
                            >
                                <input type="checkbox" />
                                <h1 className="text-[18px] font-[600]">#12512B</h1>
                            </TableCell>
                            <TableCell sx={{ fontSize: "17px" }}>May 5, 4:20 PM</TableCell>
                            <TableCell sx={{ fontSize: "17px" }}>Tom Anderson</TableCell>
                            <TableCell sx={{ fontSize: "17px" }}><span className="px-[20px] py-[5px] rounded-[5px] bg-[#C4F8E2] text-[#06A561]">Paid</span></TableCell>
                            <TableCell sx={{ fontSize: "17px" }}><span className="px-[20px] py-[5px] rounded-[5px] bg-[#F99600] text-[white]">Ready</span></TableCell>
                            <TableCell sx={{ fontSize: "17px" }}>$49.90</TableCell>
                        </TableRow>
                        <TableRow
                            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                        >
                            <TableCell
                                width={150}
                                sx={{ display: "flex", alignItems: "center", gap: "10px" }}
                            >
                                <input type="checkbox" />
                                <h1 className="text-[18px] font-[600]">#12512B</h1>
                            </TableCell>
                            <TableCell sx={{ fontSize: "17px" }}>May 5, 4:20 PM</TableCell>
                            <TableCell sx={{ fontSize: "17px" }}>Tom Anderson</TableCell>
                            <TableCell sx={{ fontSize: "17px" }}><span className="px-[20px] py-[5px] rounded-[5px] bg-[#C4F8E2] text-[#06A561]">Paid</span></TableCell>
                            <TableCell sx={{ fontSize: "17px" }}><span className="px-[20px] py-[5px] rounded-[5px] bg-[#F99600] text-[white]">Ready</span></TableCell>
                            <TableCell sx={{ fontSize: "17px" }}>$49.90</TableCell>
                        </TableRow>
                        <TableRow
                            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                        >
                            <TableCell
                                width={150}
                                sx={{ display: "flex", alignItems: "center", gap: "10px" }}
                            >
                                <input type="checkbox" />
                                <h1 className="text-[18px] font-[600]">#12512B</h1>
                            </TableCell>
                            <TableCell sx={{ fontSize: "17px" }}>May 5, 4:20 PM</TableCell>
                            <TableCell sx={{ fontSize: "17px" }}>Tom Anderson</TableCell><TableCell sx={{ fontSize: "17px" }}><span className="px-[20px] py-[5px] rounded-[5px] bg-[#C4F8E2] text-[#06A561]">Paid</span></TableCell>
                            <TableCell sx={{ fontSize: "17px" }}><span className="px-[20px] py-[5px] rounded-[5px] bg-[#F99600] text-[white]">Ready</span></TableCell>
                            <TableCell sx={{ fontSize: "17px" }}>$49.90</TableCell>
                        </TableRow>
                        <TableRow
                            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                        >
                            <TableCell
                                width={150}
                                sx={{ display: "flex", alignItems: "center", gap: "10px" }}
                            >
                                <input type="checkbox" />
                                <h1 className="text-[18px] font-[600]">#12512B</h1>
                            </TableCell>
                            <TableCell sx={{ fontSize: "17px" }}>May 5, 4:20 PM</TableCell>
                            <TableCell sx={{ fontSize: "17px" }}>Tom Anderson</TableCell>
                            <TableCell sx={{ fontSize: "17px" }}><span className="px-[20px] py-[5px] rounded-[5px] bg-[#C4F8E2] text-[#06A561]">Paid</span></TableCell>
                            <TableCell sx={{ fontSize: "17px" }}><span className="px-[20px] py-[5px] rounded-[5px] bg-[#F99600] text-[white]">Ready</span></TableCell>
                            <TableCell sx={{ fontSize: "17px" }}>$49.90</TableCell>
                        </TableRow>
                        <TableRow
                            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                        >
                            <TableCell
                                width={150}
                                sx={{ display: "flex", alignItems: "center", gap: "10px" }}
                            >
                                <input type="checkbox" />
                                <h1 className="text-[18px] font-[600]">#12512B</h1>
                            </TableCell>
                            <TableCell sx={{ fontSize: "17px" }}>May 5, 4:20 PM</TableCell>
                            <TableCell sx={{ fontSize: "17px" }}>Tom Anderson</TableCell>
                            <TableCell sx={{ fontSize: "17px" }}><span className="px-[20px] py-[5px] rounded-[5px] bg-[#C4F8E2] text-[#06A561]">Paid</span></TableCell>
                            <TableCell sx={{ fontSize: "17px" }}><span className="px-[20px] py-[5px] rounded-[5px] bg-[#F99600] text-[white]">Ready</span></TableCell>
                            <TableCell sx={{ fontSize: "17px" }}>$49.90</TableCell>
                        </TableRow>
                        <TableRow
                            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                        >
                            <TableCell
                                width={150}
                                sx={{ display: "flex", alignItems: "center", gap: "10px" }}
                            >
                                <input type="checkbox" />
                                <h1 className="text-[18px] font-[600]">#12512B</h1>
                            </TableCell>
                            <TableCell sx={{ fontSize: "17px" }}>May 5, 4:20 PM</TableCell>
                            <TableCell sx={{ fontSize: "17px" }}>Tom Anderson</TableCell>
                            <TableCell sx={{ fontSize: "17px" }}><span className="px-[20px] py-[5px] rounded-[5px] bg-[#C4F8E2] text-[#06A561]">Paid</span></TableCell>
                            <TableCell sx={{ fontSize: "17px" }}><span className="px-[20px] py-[5px] rounded-[5px] bg-[#F99600] text-[white]">Ready</span></TableCell>
                            <TableCell sx={{ fontSize: "17px" }}>$49.90</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
        </div>
    );
};

export default Orders
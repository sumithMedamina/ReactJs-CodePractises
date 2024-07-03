import { TextField } from "@mui/material";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export function MuiDemo(){
    return(
        <div className="container-fluid">
            <div className="w-25">
                <h3>BootStrap-Component</h3>
                <label className="form-label">User Name</label>
                <input type="text" className="form-control" />
            </div>
            <div className="mt-3">
                <h3>Mui Component</h3>
                <TextField label="User Name" variant="outlined"></TextField>
            </div>
            <div className="mt-3">
                <h3>Date-Picker</h3>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker />
                </LocalizationProvider>
            </div>
        </div>
    )
}
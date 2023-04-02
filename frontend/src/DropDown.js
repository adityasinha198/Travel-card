import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function DropDown(props) {

    const { label, onChange } = props; 
    const [opt, setOpt] = React.useState('');

    const handleChange = (event) => {
        setOpt(event.target.value);
        onChange(event.target.value);
    };

    return (
        <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">{label}</InputLabel>
            <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={opt}
            label={label}
            onChange={handleChange}
            >
            <MenuItem value={"Zone1"}>Zone1</MenuItem>
            <MenuItem value={"Zone2"}>Zone2</MenuItem>
            </Select>
        </FormControl>
        </Box>
    );
}

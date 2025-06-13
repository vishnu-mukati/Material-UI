import { Box, TextField, MenuItem } from '@mui/material';
import { useState } from 'react';
const MuiSelect = () => {

    const [countries,setCountries] = useState<string[]>([]);
    console.log(countries);
    
    const handleClick = (event : React.ChangeEvent<HTMLInputElement>) =>{
        const value = event.target.value;
        setCountries(typeof value === 'string' ? value.split(',') : value);
    }

    return (
        <Box width='250px'>
            <TextField 
            value = {countries} 
            label='Select Country'
            select
            fullWidth
            size = 'small'
            color='secondary'
            helperText='Please select your country'
            onChange={handleClick}
            SelectProps = {{
                multiple : true,
            }}
            >
                <MenuItem value = 'IND'>INDIA</MenuItem>
                <MenuItem value='US'>USA</MenuItem>
                <MenuItem value='AU'>Australia</MenuItem>
            </TextField>
        </Box>
    )
}

export default MuiSelect;

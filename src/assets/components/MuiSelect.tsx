import { Box, TextField, MenuItem } from '@mui/material';
import { useState } from 'react';
const MuiSelect = () => {

    const [country,setCountry] = useState('');

    const handleClick = (event : React.ChangeEvent<HTMLInputElement>) =>{
        setCountry(event.target.value as string);
    }

    return (
        <Box width='130px'>
            <TextField 
            value = {country} 
            label='Select Country'
            select
            fullWidth
            onChange={handleClick}>
                <MenuItem value = 'IND'>INDIA</MenuItem>
                <MenuItem value='US'>USA</MenuItem>
                <MenuItem value='AU'>Australia</MenuItem>
            </TextField>
        </Box>
    )
}

export default MuiSelect;

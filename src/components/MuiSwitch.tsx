import { Box, FormControlLabel, Switch } from '@mui/material';
import { useState } from 'react';
const MuiSwitch = () => {

    const [checked , setChecked] = useState(false);
    console.log({checked});
    
    const handelChecked = (event : React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
    }
  return (
    <Box>
      <FormControlLabel label='dark mode' control={<Switch checked= {checked} onChange={handelChecked}/>}>

      </FormControlLabel>
    </Box>
  )
}

export default MuiSwitch

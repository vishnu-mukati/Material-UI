import { Stack, TextField, InputAdornment, Input } from "@mui/material"
import VisibilityIcon from '@mui/icons-material/Visibility';
import  VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import { useState } from "react";
const MuiTextField = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [value, setValue] = useState('');

  const handleShowPassword = () => {
    setShowPassword(prev => !prev);
  }
  return (
    <Stack spacing={4}>
      <Stack spacing={2} direction='row'>
        <TextField label='name' variant="outlined" />
        <TextField label='email' variant="filled" />
        <TextField label='password' variant="standard" />
      </Stack>
      <Stack spacing={2} direction='row'>
        <TextField label='small secondary' size='small' color='secondary' />
      </Stack>
      <Stack spacing={2} direction='row'>
        <TextField label='Form input' required />
        <TextField
          variant="outlined"
          label='Password'
          type={showPassword ? 'text' : 'password'}
          helperText= {!value ? 'required' : 'do not share your password with anyone' }
          value = {value}
          onChange={(e) => setValue(e.target.value)}
          error = {!value}
        
          InputProps={{
            endAdornment: (
              <InputAdornment position="end"  >
                <IconButton onClick={handleShowPassword} edge="end">
                {showPassword ?  <VisibilityIcon /> :  <VisibilityOffIcon />}
                </IconButton>
              </InputAdornment>
            )
          }}
        />
        <TextField label='read only' InputProps={{ readOnly: true }} />
      </Stack>

      <Stack spacing={2} direction='row'>
        <TextField
          label='amount'
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
        <TextField
          label='weight'
          InputProps={{
            endAdornment: <InputAdornment position="end">Kg</InputAdornment>
          }}
        />
      </Stack>
    </Stack>
  )
}

export default MuiTextField;

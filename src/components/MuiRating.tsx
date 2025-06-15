import { Stack, Rating } from '@mui/material'
import { useState } from 'react'
import FavoriteIcon from '@mui/icons-material/favorite';
import  FavoriteBorderIcon  from '@mui/icons-material/FavoriteBorder';
const MuiRating = () => {

    const [value, setValue] = useState<number | null>(null);
    console.log({value});
    
    const handleChange = (event: React.ChangeEvent<{}> , newValue : number|null) =>{
        setValue(newValue);
    }
  return (
    <Stack spacing={2}>
      <Rating 
      value={value} 
      onChange={handleChange} 
      precision={0.5}
      icon= {<FavoriteIcon fontSize='inherit' color = 'error'/>}
      emptyIcon = {<FavoriteBorderIcon fontSize='inherit'/>}
    //   readOnly
    highlightSelectedOnly
      />
    </Stack>
  )
}

export default MuiRating

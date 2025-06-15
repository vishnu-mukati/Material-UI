import { Stack, Autocomplete, TextField } from "@mui/material"
import { useState } from "react";

   type skill = {
        id: number,
        label: string,
    }

    const skills = ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React'];

    const skillsoptions = skills.map((skill,index)=>({
        id : index + 1,
        label :  skill,
    }))


const MuiAutoComplete = () => {
    const [value, setValue] = useState<string | null>(null);
    const [skill,setSkill] = useState<skill|null>(null);
 
        console.log({ skill });
    return (
        <div>
            <Stack spacing={2} width='250px'>
                <Autocomplete
                    options={skills}
                    renderInput={(params) => <TextField {...params} label='skills' />}
                    value={value}
                    onChange={(event: any, newValue: string | null) => setValue(newValue)}
                    freeSolo
                />
                <Autocomplete
                    options={skillsoptions}
                    renderInput={(params) => <TextField {...params} label='skills' />}
                    value={skill}
                    onChange={(event: any, newValue: skill | null) => setSkill(newValue)}
                />
            </Stack>
        </div>
    )
}

export default MuiAutoComplete

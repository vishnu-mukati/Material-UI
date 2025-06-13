import { Box, FormControlLabel, Checkbox, FormControl, FormLabel, FormGroup } from '@mui/material';
import { useState } from 'react';
import BookMarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookMarkIcon from '@mui/icons-material/Bookmark';
const MuiCheckBox = () => {
    const [checked, setChecked] = useState(false);
    const [skills, setSkills] = useState<string[]>([]);
    console.log({ checked });
    console.log(skills);
    
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
    }
    const handleSkillChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const index = skills.indexOf(event.target.value);
        if (index === -1) {
            setSkills([...skills, event.target.value]);
        } else {
            setSkills(skills.filter(skill => skill !== event.target.value));
        }
    }
    return (
        <Box>
            <Box>
                <FormControlLabel
                    label='I accept the terms and conditions'
                    control={<Checkbox checked={checked} onChange={handleChange} />}
                />
            </Box>
            <Box>
                <Checkbox icon={<BookMarkBorderIcon />} checkedIcon={<BookMarkIcon />} checked={checked} onChange={handleChange} />
            </Box>
            {/*Group of checkboxes*/}
            <Box>
                <FormControl>
                    <FormLabel>Skills</FormLabel>
                    <FormGroup row>
                        <FormControlLabel
                            control={<Checkbox checked={skills.includes('HTML')}
                                onChange={handleSkillChange} />}
                            label='HTML'
                            value='HTML'

                        />
                        <FormControlLabel
                            control={<Checkbox checked={skills.includes('CSS')}
                                onChange={handleSkillChange} />}
                            label='CSS'
                            value='CSS'

                        />
                        <FormControlLabel
                            control={<Checkbox checked={skills.includes('JavaScript')}
                                onChange={handleSkillChange} />}
                            label='JavaScript'
                            value='JavaScript'

                        />
                    </FormGroup>
                </FormControl>
            </Box>
        </Box>
    )
}

export default MuiCheckBox

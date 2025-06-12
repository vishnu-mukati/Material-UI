import { Stack, Button , IconButton, ButtonGroup} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
const MuiButton = () => {
    return (
        <Stack spacing={2}>
            <Stack spacing={2} direction='row'>
                <Button variant='text'>Text</Button>
                <Button variant='contained'>Contained</Button>
                <Button variant='outlined'>Outlined</Button>
            </Stack>

            <Stack spacing={2} direction='row'>
                <Button variant='contained' color='primary'>Primary</Button>
                <Button variant='contained' color='secondary'>Secondary</Button>
                <Button variant='contained' color='error'>Error</Button>
                <Button variant='contained' color='warning'>Warning</Button>
                <Button variant='contained' color='info'>Info</Button>
                <Button variant='contained' color='success'>Success</Button>
            </Stack>
            <Stack spacing={3} direction='row'>
                <Button variant='contained' startIcon={<SendIcon />} disableRipple onClick={() => alert('clicked')}>Send</Button>
                <Button variant='contained' endIcon={<SendIcon />} disableElevation>Send</Button>
                <IconButton aria-Label='send' color='success' size='small'>
                    <SendIcon />
                </IconButton>
            </Stack>

            <Stack direction='row'>
                <ButtonGroup 
                variant='contained' 
                orientation='vertical'
                color='secondary'
                aria-label = 'alignment button group'
                >
                    <Button onClick = {() => alert('left clicked')} >Left</Button>
                    <Button>Center</Button>
                    <Button>Right</Button>
                </ButtonGroup>
            </Stack>



        </Stack>
    )
}

export default MuiButton

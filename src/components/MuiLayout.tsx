import { Box, Stack, Divider, Grid, Paper } from "@mui/material";
const MuiLayout = () => {
    return (
        // the paper component is used like the contact forms etc
        <Paper sx={{padding:'32px'}} elevation={6}>
            <Stack
                sx={{ border: "1px solid" }}
                direction="row"
                spacing={2}
                divider={<Divider orientation="vertical" flexItem />}
            >
                <Box
                    sx={{
                        backgroundColor: "primary.main",
                        color: "white",
                        height: "100px",
                        width: "100px",
                        padding: "16px",
                        "&:hover": {
                            backgroundColor: "primary.light",
                        },
                    }}
                >
                    CodeVolution
                </Box>
                <Box
                    display="flex"
                    height="100px"
                    width="100px"
                    bgcolor="success.light"
                    p={2}
                ></Box>
            </Stack>
            <Grid container my={4} rowSpacing={2} columnSpacing={1}>
                {/* it is 12 column grid layout */}
                <Grid size={{ xs:6}}>
                    <Box bgcolor="primary.light" p={2}>
                        Item 1
                    </Box>
                </Grid>
                <Grid size={{ xs: 6}}>
                    <Box bgcolor="primary.light"  p={2}>
                        Item 2
                    </Box>
                </Grid>
                <Grid size={{ xs:6}}>
                    <Box bgcolor="primary.light" p={2}>
                        Item 3
                    </Box>
                </Grid>
                <Grid size={{ xs: 6}}>
                    <Box bgcolor="primary.light"  p={2}>
                        Item 4
                    </Box>
                </Grid>
            </Grid>
            <Grid container my={4} spacing={2}>
                {/* it is 12 column grid layout */}
                {/* the grow is used for autolayout each four is taking equal */}
                <Grid size={{ xs:'grow'}}>
                    <Box bgcolor="primary.light" p={2}>
                        Item 5
                    </Box>
                </Grid>
                {/* auto is taking only the necessary width */}
                <Grid size={{ xs: 'auto'}}>
                    <Box bgcolor="primary.light"  p={2}>
                        Item 6
                    </Box>
                </Grid>
                <Grid size={{ xs:'grow'}}>
                    <Box bgcolor="primary.light" p={2}>
                        Item 7
                    </Box>
                </Grid>
                <Grid size={{ xs:'grow'}}>
                    <Box bgcolor="primary.light"  p={2}>
                        Item 8
                    </Box>
                </Grid>
            </Grid>
        </Paper>
    );
};

export default MuiLayout;

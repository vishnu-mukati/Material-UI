import { Box, Stack, Divider, Grid } from "@mui/material";
const MuiLayout = () => {
    return (
        <>
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
            <Grid container my={4}>
                {/* it is 12 column grid layout */}
                <Grid size={{ xs: 12,sm:6}}>
                    <Box bgcolor="primary.light" p={2}>
                        Item 1
                    </Box>
                </Grid>
                <Grid size={{ xs: 12,sm:6}}>
                    <Box bgcolor="primary.light"  p={2}>
                        Item 2
                    </Box>
                </Grid>
                <Grid size={{ xs: 12,sm:6}}>
                    <Box bgcolor="primary.light" p={2}>
                        Item 3
                    </Box>
                </Grid>
                <Grid size={{ xs: 12,sm:6}}>
                    <Box bgcolor="primary.light"  p={2}>
                        Item 4
                    </Box>
                </Grid>
            </Grid>
        </>
    );
};

export default MuiLayout;

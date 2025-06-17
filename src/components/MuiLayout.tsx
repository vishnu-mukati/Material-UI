import { Box } from "@mui/material";
import { blue } from "@mui/material/colors";

const MuiLayout = () => {
    return (
        <>
            <Box
                sx={{
                    backgroundColor: "primary.main",
                    color: "white",
                    height: "100px",
                    width: "100px",
                    padding:'16px',
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
        </>
    );
};

export default MuiLayout;

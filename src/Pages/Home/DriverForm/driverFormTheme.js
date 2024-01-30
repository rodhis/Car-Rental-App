import { createTheme } from "@mui/material";

export const driverFormTheme = createTheme({
  palette: {
    primary: {
      main: "#fff", 
    },
  },
  components: {
    MuiInput: {
      styleOverrides: {
        root: {
          border: "#fff", 
        },
        underline: {
          "&:before": {
            borderBottom: "2px solid #1a237e",
            // hehe
          },
        },
      },
    },
  },
});

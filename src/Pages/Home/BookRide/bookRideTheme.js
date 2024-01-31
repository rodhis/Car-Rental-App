import { createTheme } from "@mui/material";

export const bookRideTheme = createTheme({
  palette: {
    primary: {
      main: "#fba403",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#b3b3b3",
    },
    text: {
      primary: "#ffffff",
      secondary: "#b3b3b3",
      disabled: "#b3b3b3",
    },
    background: {
      default: "#2C2C2C",
      paper: "#282828",
    },
    icon: {
      main: "#FFF",
    },
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          backgroundColor: "#2C2C2C",
          marginTop: 30,
          padding: 30,
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          marginTop: "16px",
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#ffffff",
          },

          "& .MuiInputBase-input": {
            color: "#ffffff",
          },

          "& .MuiOutlinedInput-root:hover": {
            borderColor: "#ffffff",
          },
          "& .MuiSelect-icon": {
            color: "#FFF",
          },
        },
        underline: {
          "&:before": {
            borderBottom: "#FFF",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          width: "100%",
          height: "3.5rem",
          marginTop: "1rem",
        },
      },
    },
  },
});

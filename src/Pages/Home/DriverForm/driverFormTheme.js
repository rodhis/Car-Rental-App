import { createTheme } from "@mui/material";

export const driverFormTheme = createTheme({
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
      default: "#242424",
      paper: "#282828",
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#ffffff",
          },

          "& .MuiInputBase-input": {
            color: "#ffffff",
          },

          "& .MuiOutlinedInput-root:hover": {
            borderColor: "#ffffff",
          },
        },
        underline: {
          "&:before": {
            borderBottom: "#FFF",
            // hehe
          },
        },
      },
    },
  },
});

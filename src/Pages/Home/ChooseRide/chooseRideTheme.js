import { createTheme } from "@mui/material";

export const chooseRideTheme = createTheme({
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
    MuiCard: {
      styleOverrides: {
        root: {
          width: "18rem",
          alignItems: "flex-start",
          gap: "10px",
          flexDirection: "row",
        },
      },
    },
    MuiCardMedia: {
      styleOverrides: {
        img: {
          flex: "1 0 0",
        },
      },
    },
  },
});

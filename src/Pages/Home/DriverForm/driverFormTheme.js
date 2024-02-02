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
      default: "#2C2C2C",
      paper: "#282828",
    },
    icon: {
      main: "#FFF",
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
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#ffffff",
          },

          svg: {
            color: "#ffffff !important",
          },

          "& .MuiInputBase-input": {
            color: "#ffffff",
          },

          "& .MuiOutlinedInput-root:hover": {
            borderColor: "#ffffff",
          },
          "& .MuiSelect-icon": {
            color: "#FFFFFF",
          },
        },
        underline: {
          "&:before": {
            borderBottom: "#FFF",
          },
        },
        icon: {
          color: "#FFF",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          width: "12.5rem",
          height: "3.5rem",
          marginTop: "1rem",
          marginLeft: 10,
        },
      },
    },
  },
});

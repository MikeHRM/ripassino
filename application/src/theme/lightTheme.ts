import { createTheme } from "@mui/material";

export const lightTheme = createTheme({
  //   components: {
  //     MuiTypography: {
  //       styleOverrides: {
  //         root: {
  //           background: "teal",
  //         },
  //       },
  //     },
  //   },
  palette: {
    rebecca: {
      main: "#663399", // rebeccapurple
    },
  },

  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: ({ theme }) => ({
          background: theme.palette.rebecca.main,
        }),
        // root: {
        //   // background: "red",
        //   // "> input": {
        //   //   fontSize: "5rem",
        //   // },
        // },
      },
    },
  },
});

import { CssBaseline } from "@mui/material";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { ReactNode } from "react";
import { lightTheme } from "./lightTheme";

type Props = {
  children: ReactNode;
};
export default function ThemeProvider({ children }: Props) {
  return (
    <MuiThemeProvider theme={lightTheme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
}

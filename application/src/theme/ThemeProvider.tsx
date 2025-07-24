import { CssBaseline } from "@mui/material";
import {
  ThemeProvider as MuiThemeProvider,
  useColorScheme,
} from "@mui/material/styles";
import type { ReactNode } from "react";
import { lightTheme } from "./lightTheme";
import { darkTheme } from "./darkTheme";

type Props = {
  children: ReactNode;
};
export default function ThemeProvider({ children }: Props) {
  const { mode } = useColorScheme();
  return (
    <MuiThemeProvider theme={mode === "light" ? lightTheme : darkTheme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
}

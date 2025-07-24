import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { useColorScheme } from "@mui/material/styles";

export default function ThemeToggle() {
  const { mode, setMode } = useColorScheme();

  return (
    <Box data-testid="ThemeToggle">
      <FormControl>
        <FormLabel id="demo-theme-toggle">Theme</FormLabel>
        <RadioGroup
          aria-labelledby="demo-theme-toggle"
          name="theme-toggle"
          row
          value={mode}
          onChange={(event) =>
            setMode(event.target.value as "system" | "light" | "dark")
          }
        >
          <FormControlLabel value="light" control={<Radio />} label="Light" />
          <FormControlLabel value="dark" control={<Radio />} label="Dark" />
        </RadioGroup>
      </FormControl>
      <Box
        sx={[
          (theme) => ({
            color: "#fff",
            backgroundColor: theme.palette.primary.main,
            "&:hover": {
              boxShadow: theme.shadows[3],
              backgroundColor: theme.palette.primary.dark,
            },
          }),
          //   (theme) =>
          //     theme.applyStyles("dark", {
          //       backgroundColor: theme.palette.secondary.main,
          //       "&:hover": {
          //         backgroundColor: theme.palette.secondary.dark,
          //       },
          //     }),
        ]}
      >
        ThemeToggle
      </Box>
    </Box>
  );
}

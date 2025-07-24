import type { PaletteColor, PaletteColorOptions } from "@mui/material";

declare module "@mui/material/styles" {
  interface Palette {
    rebecca: PaletteColor;
  }
  interface PaletteOptions {
    rebecca?: PaletteColorOptions;
  }
}

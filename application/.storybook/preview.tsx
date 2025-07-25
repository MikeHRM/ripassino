import React from "react";
import type { Preview } from "@storybook/react-vite";
import ThemeProvider from "../src/theme/ThemeProvider";
import ThemeToggle from "../src/theme/ThemeToggle";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Box } from "@mui/material";

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo",
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider>
        <QueryClientProvider client={queryClient}>
          <Story />
          <Box
            sx={{
              position: "fixed",
              bottom: 0,
              right: 0,
            }}
          >
            <ThemeToggle />
          </Box>
        </QueryClientProvider>
      </ThemeProvider>
    ),
  ],
};

export default preview;

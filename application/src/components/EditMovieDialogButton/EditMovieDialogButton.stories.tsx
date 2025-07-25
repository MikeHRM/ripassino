import type { Meta } from "@storybook/react-vite";

import EditMovieDialogButton from "./EditMovieDialogButton";

const meta = {
  component: EditMovieDialogButton,

  tags: ["autodocs"],
} satisfies Meta<typeof EditMovieDialogButton>;

export default meta;

export const DefaultBehaviour = () => {
  return <EditMovieDialogButton title="my beautiful title" />;
};

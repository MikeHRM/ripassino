import { Box, FormControl, InputLabel, OutlinedInput } from "@mui/material";
import type { Movie } from "../../types/Movie";

type Props = {
  title: Movie["title"];
};

export default function EditMovieBasicForm({ title }: Props) {
  // onSubmit={}
  return (
    <Box component="form">
      {/* <FormControl> */}
      {/* <InputLabel for="movie-title">Movie Title</InputLabel> */}
      <OutlinedInput
        id="movie-title"
        placeholder="movie title"
        inputProps={{
          "aria-label": "Movie Title",
        }}
        value={title}
      />
      {/* </FormControl> */}
    </Box>
  );
}

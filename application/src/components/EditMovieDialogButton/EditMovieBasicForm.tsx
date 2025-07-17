import {
  Box,
  Button,
  DialogActions,
  DialogContent,
  FormControl,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import type { Movie } from "../../types/Movie";
import { useEffect, useState } from "react";

type Props = {
  title: Movie["title"];
  onClose: () => void;
};

export default function EditMovieBasicForm({ title, onClose }: Props) {
  // onSubmit={}
  const [value, setValue] = useState("");

  // sync the title internal value with the value from the props
  useEffect(() => {
    setValue(title);
  }, [title]);

  return (
    <Box
      component="form"
      onSubmit={(event) => {
        event.preventDefault();
        console.log("onSubmit", value);

        const formData = new FormData(event.currentTarget);
        console.log("formData", formData);
        console.log("movie-title", formData.get("movie-title"));
        // call BE
      }}
    >
      <DialogContent>
        <OutlinedInput
          id="movie-title"
          name="movie-title"
          placeholder="movie title"
          inputProps={{
            "aria-label": "Movie Title",
          }}
          value={value}
          onChange={(evt) => setValue(evt.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button type="submit">Submit</Button>
        <Button onClick={onClose}>Close</Button>
      </DialogActions>
      {/* <FormControl> */}
      {/* <InputLabel for="movie-title">Movie Title</InputLabel> */}

      {/* <Button type="submit">Send</Button> */}
      {/* </FormControl> */}
    </Box>
  );
}

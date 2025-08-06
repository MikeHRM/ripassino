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
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axiosClient from "../../api/axiosClient";
import type { AxiosResponse } from "axios";

export async function updateMovieTitle(
  title: Movie["title"],
  _id: Movie["_id"]
) {
  console.log("updateMovieTitle", title, _id);

  const response: AxiosResponse<{ message: string }> = await axiosClient.patch(
    `/movies/${_id}`,
    {
      title,
    }
  ); // Movie[] or Array<Movie>

  return response.data;
}

type Props = {
  title: Movie["title"];
  _id: Movie["_id"];
  onClose: () => void;
};

export default function EditMovieBasicForm({ title, _id, onClose }: Props) {
  // onSubmit={}
  const queryClient = useQueryClient();
  const [value, setValue] = useState("");

  const { mutate } = useMutation({
    mutationFn: (title: Movie["title"]) => updateMovieTitle(title, _id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["movies"] });

      // close the modal
      onClose();
    },
  });

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
        const newMoviewTitle = formData.get("movie-title");
        // @ts-expect-error it should be fine
        if (newMoviewTitle) mutate(newMoviewTitle);
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

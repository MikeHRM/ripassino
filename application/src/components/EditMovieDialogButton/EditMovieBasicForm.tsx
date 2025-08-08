import {
  Alert,
  Box,
  Button,
  DialogActions,
  DialogContent,
  FormControl,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import type { Movie } from "../../types/Movie";
import { useEffect, useRef, useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axiosClient from "../../api/axiosClient";
import type { AxiosResponse } from "axios";
import { useUpdateMovieTitleMutation } from "../../hook/useUpdateMovieTitleMutation";

type Props = {
  title: Movie["title"];
  _id: Movie["_id"];
  onClose: () => void;
};

// v1 with useState
// export default function EditMovieBasicForm({ title, _id, onClose }: Props) {
//   // onSubmit={}
//   const [value, setValue] = useState("");
//   // mutateAsync
//   const { mutate, isError } = useUpdateMovieTitleMutation({
//     onSuccess: () => console.log("onSuccess global"),
//   });
//   // sync the title internal value with the value from the props
//   useEffect(() => {
//     setValue(title);
//   }, [title]);
//   return (
//     <Box
//       component="form"
//       onSubmit={async (event) => {
//         event.preventDefault();
//         console.log("onSubmit", value);

//         const formData = new FormData(event.currentTarget);
//         console.log("formData", formData);
//         console.log("movie-title", formData.get("movie-title"));
//         // call BE
//         const newMoviewTitle = formData.get("movie-title");

//         if (typeof newMoviewTitle === "string") {
//           // console.log("before await");
//           // const response = await mutateAsync({
//           //   title: newMoviewTitle,
//           //   _id,
//           // });
//           // console.log("after await", response);
//           // onClose();

//           mutate(
//             {
//               title: newMoviewTitle,
//               _id,
//             },
//             {
//               onSuccess: () => {
//                 console.log("onSuccess submit");
//                 onClose();
//               },
//             }
//           );
//         }
//       }}
//     >
//       <DialogContent>
//         {isError ? <Alert severity="error">An error has occurred</Alert> : null}
//         <OutlinedInput
//           id="movie-title"
//           name="movie-title"
//           placeholder="movie title"
//           inputProps={{
//             "aria-label": "Movie Title",
//           }}
//           value={value}
//           onChange={(evt) => setValue(evt.target.value)}
//         />
//       </DialogContent>
//       <DialogActions>
//         <Button type="submit">Submit</Button>
//         <Button onClick={onClose}>Close</Button>
//       </DialogActions>
//       {/* <FormControl> */}
//       {/* <InputLabel for="movie-title">Movie Title</InputLabel> */}
//       {/* <Button type="submit">Send</Button> */}
//       {/* </FormControl> */}
//     </Box>
//   );
// }

// v2 with ref
let render = 0;
export default function EditMovieBasicForm({ title, _id, onClose }: Props) {
  // onSubmit={}
  const inputRef = useRef<HTMLInputElement>(null);

  console.log("render", render);
  render++;

  // mutateAsync
  const { mutate, isError } = useUpdateMovieTitleMutation({
    onSuccess: () => console.log("onSuccess global"),
  });

  // sync the title internal value with the value from the props
  // useEffect(() => {
  //   setValue(title);
  // }, [title]);

  return (
    <Box
      component="form"
      onSubmit={async (event) => {
        event.preventDefault();

        const newMoviewTitle = inputRef.current?.value;
        console.log("newMoviewTitle", newMoviewTitle);

        if (newMoviewTitle) {
          mutate(
            {
              title: newMoviewTitle,
              _id,
            },
            {
              onSuccess: () => {
                console.log("onSuccess submit");
                onClose();
              },
            }
          );
        }
      }}
    >
      <DialogContent>
        {isError ? <Alert severity="error">An error has occurred</Alert> : null}
        <OutlinedInput
          inputRef={inputRef}
          id="movie-title"
          name="movie-title"
          placeholder="movie title"
          inputProps={{
            "aria-label": "Movie Title",
          }}
          defaultValue={title}
          // value={value}
          // onChange={(evt) => setValue(evt.target.value)}
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

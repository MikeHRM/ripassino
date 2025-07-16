import {
  Alert,
  Box,
  Button,
  List,
  ListItem,
  Skeleton,
  Snackbar,
  Stack,
  Typography,
} from "@mui/material";
import { useMoviesQuery } from "../hook/useMoviesQuery";
import { useEffect, useState } from "react";
import EditMovieDialogButton from "../components/EditMovieDialogButton/EditMovieDialogButton";

export default function Ripassino() {
  const [showSnackbar, setShowSnackbar] = useState(false);
  const {
    data: moviesData,
    isLoading: moviesIsLoading,
    isError: moviesIsError,
    isPending: moviesIsPending,
    refetch,
    isRefetching: moviesIsRefetching,
  } = useMoviesQuery();

  // console.group("pippo");
  // console.log("moviesIsLoading", moviesIsLoading);
  // console.log("moviesIsPending", moviesIsPending);
  // console.log("moviesIsRefetching", moviesIsRefetching);
  // console.groupEnd();

  useEffect(() => {
    if (moviesIsError) {
      // show snackbar with error
      setShowSnackbar((prevShowSnackbar) => !prevShowSnackbar);
      // setShowSnackbar(true)
    }
  }, [moviesIsError]);

  if (moviesIsLoading)
    return (
      <Box sx={{ height: "200px", width: "100vw" }}>
        <Skeleton height="200px" />
      </Box>
    );

  return (
    <Box data-testid="Ripassino">
      <Typography>Ripassino</Typography>
      {moviesIsError ? <Alert severity="error">Error!</Alert> : null}
      <Button onClick={() => refetch()}>Refetch</Button>
      <Snackbar
        open={showSnackbar}
        // autoHideDuration={6000}
        // onClose={handleClose}
        message="Error!"
        // action={action}
      />
      <List
        id="list"
        sx={{
          "> li": {
            borderBottom: "1px solid red",
            "&:first-child": {
              borderTop: "1px solid blue",
            },
          },
        }}
      >
        {moviesData?.map((movie) => {
          return (
            <ListItem key={movie._id}>
              <Stack direction="row">
                <Typography>{movie.title}</Typography>
                <EditMovieDialogButton title={movie.title} />
              </Stack>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
}

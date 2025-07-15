import { Box, List, ListItem, Skeleton, Typography } from "@mui/material";
import { useSuspenseQuery } from "@tanstack/react-query";
import { Suspense } from "react";
import { fetchMovies } from "../hook/useMoviesQuery";

function MoviesList() {
  const { data: moviesData } = useSuspenseQuery({
    queryKey: ["movies"],
    queryFn: () => fetchMovies(),
  });

  return (
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
      {moviesData.map((movie) => {
        return (
          <ListItem key={movie._id}>
            <Typography>{movie.title}</Typography>
          </ListItem>
        );
      })}
    </List>
  );
}

export default function RipassinoSuspense() {
  return (
    <Suspense
      fallback={
        <Box sx={{ height: "200px", width: "100vw" }}>
          <Skeleton height="200px" />
        </Box>
      }
    >
      <Box>RipassinoSuspense</Box>
      <MoviesList />
    </Suspense>
  );
}

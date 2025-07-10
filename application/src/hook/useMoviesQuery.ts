import { useQuery } from "@tanstack/react-query";
import axiosClient from "../api/axiosClient";
import type { AxiosResponse } from "axios";
import type { Movie } from "../types/Movie";

async function fetchMovies() {
  const response: AxiosResponse<Array<Movie>> = await axiosClient.get(
    "/movies"
  ); // Movie[] or Array<Movie>

  return response.data;
}

export function useMoviesQuery() {
  return useQuery({
    queryKey: ["movies"],
    queryFn: () => fetchMovies(),
  });
}

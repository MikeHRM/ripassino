import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { Movie } from "../types/Movie";
import type { AxiosResponse } from "axios";
import axiosClient from "../api/axiosClient";

type UpdateMovieTitleParams = { title: Movie["title"]; _id: Movie["_id"] };

export async function updateMovieTitle({ title, _id }: UpdateMovieTitleParams) {
  console.log("updateMovieTitle", title, _id);

  const response: AxiosResponse<{ message: string }> = await axiosClient.patch(
    `/movies/${_id}`,
    {
      title,
    }
  );

  // keep this for reference for the future
  // const resp = await fetch(`http://localhost:8100/movies/${_id}`, {
  //   method: "PATCH",
  //   body: JSON.stringify({
  //     title,
  //   }),
  // });
  // const response = await resp.json();

  return response.data;
}

export const useUpdateMovieTitleMutation = ({
  onSuccess,
}: {
  onSuccess: () => void;
}) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ title, _id }: UpdateMovieTitleParams) =>
      updateMovieTitle({ title, _id }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["movies"] });

      // execute the callback
      onSuccess();
    },
  });
};

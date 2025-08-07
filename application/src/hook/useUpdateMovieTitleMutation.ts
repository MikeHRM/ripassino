import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { Movie } from "../types/Movie";
import type { AxiosResponse } from "axios";
import axiosClient from "../api/axiosClient";

type UpdateMovieTitleParams = { title: Movie["title"]; _id: Movie["_id"] };

export async function updateMovieTitle({ title, _id }: UpdateMovieTitleParams) {
  console.log("updateMovieTitle", title, _id);

  // @todo vs fetch
  const response: AxiosResponse<{ message: string }> = await axiosClient.patch(
    `/movies/${_id}`,
    {
      title,
    }
  );

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

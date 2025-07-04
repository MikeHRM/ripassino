import { Box } from "@mui/material";
import { useMoviesQuery } from "../hook/useMoviesQuery";

export default function Ripassino() {
  const { data } = useMoviesQuery();

  return <Box data-testid="Ripassino">Ripassino</Box>;
}

import { Button, Dialog } from "@mui/material";
import { useState } from "react";

export default function EditMovieDialogButton() {
  const [dialogOpen, setDialogOpen] = useState(false);

  // temp, working on that
  //   const [dialogOpen, startTransition] = useTransition()
  //   function onClick(){
  //     startTransition(async () => {
  //         // setState
  //         async
  //     })
  //   }

  return (
    <>
      <Dialog open={dialogOpen}>pippo</Dialog>
      <Button onClick={() => setDialogOpen(true)}>Edit</Button>
    </>
  );
}

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { useRef, useState } from "react";
import EditMovieBasicForm from "./EditMovieBasicForm";
import type { Movie } from "../../types/Movie";

type Props = {
  title: Movie["title"];
};

export default function EditMovieDialogButton({ title }: Props) {
  const [dialogOpen, setDialogOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

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
      {/* <ClickAwayListener
        onClickAway={(event) => {
          console.log("event", event);
          if (event.target !== buttonRef.current) setDialogOpen(false);
        }}
      > */}
      <Dialog open={dialogOpen} fullWidth maxWidth="sm">
        <DialogTitle>Pippo</DialogTitle>
        <DialogContent>
          <EditMovieBasicForm title={title} />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDialogOpen(false)}>Close</Button>
        </DialogActions>
      </Dialog>
      {/* </ClickAwayListener> */}

      <Button
        ref={buttonRef}
        onClick={() => {
          console.log("ref", buttonRef);
          setDialogOpen(true);
        }}
      >
        Edit
      </Button>
    </>
  );
}

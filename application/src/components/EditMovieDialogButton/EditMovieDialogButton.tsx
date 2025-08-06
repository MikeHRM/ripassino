import {
  Box,
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
  /** the title of the link to edit */
  title: Movie["title"];
  _id: Movie["_id"];
};

export default function EditMovieDialogButton({ title, _id }: Props) {
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
        <EditMovieBasicForm
          title={title}
          _id={_id}
          onClose={() => setDialogOpen(false)}
        />
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

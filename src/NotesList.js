import React from "react";
import Note from "./Note";
import App from "./App";

const NotesList = ({ notes }) => {
  return (
    <div className="notes-list">
      {notes.map((note) => (
        <Note key={note.id} title={note.title} description={note.description} />
      ))}
    </div>
  );
};

export default NotesList;

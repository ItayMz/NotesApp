/* eslint-disable react/prop-types */

import Note from "./Note";

export default function NotesList({ notes }) {
  return (
    <>
      {notes.map((note) => (
        <Note key={note.id} title={note.title} body={note.body} />
      ))}
    </>
  );
}

/* eslint-disable react/prop-types */

import classes from "./Note.module.css";
export default function Note({ title, body }) {
  return (
    <div className={classes.note}>
      <h2 className={classes["note-title"]}>{title}</h2>
      <p className={classes["note-content"]}>{body}</p>
      <button>Edit</button>
      <button>Delete</button>
    </div>
  );
}

// Note.js

import React from "react";

const Note = (props) => {
  const updateTitle = (event) => {
    props.onType(props.id, "title", event.target.value);
  };

  const updateDescription = (event) => {
    props.onType(props.id, "description", event.target.value);
  };

  return (
    <div className="note">
      <input
        type="text"
        className="note__title"
        placeholder="Note Title"
        onChange={updateTitle}
        value={props.title}
      />
      <textarea
        className="note__description"
        placeholder="Note description..."
        onChange={updateDescription}
        value={props.description}
      ></textarea>
      <div className="note__delete">X</div>
    </div>
  );
};

export default Note;

import React, { useState } from "react";
import Header from "./Header";
import NotesList from "./NotesList";

const App = () => {
  const [notes, setNotes] = useState([
    {
      id: Date.now(),
      title: "",
      description: "",
      doesMatchSearch: true
    }
  ]);

  const onSearch = (searchText) => {
    const updatedNotes = notes.map((note) => {
      const doesMatch =
        note.title.toLowerCase().includes(searchText.toLowerCase()) ||
        note.description.toLowerCase().includes(searchText.toLowerCase());

      return {
        ...note,
        doesMatchSearch: doesMatch
      };
    });

    setNotes(updatedNotes);
  };

  // Rest of your code

  return (
    <div className="app">
      <Header onSearch={onSearch} />
      <NotesList notes={notes} />
    </div>
  );
};

export default App;

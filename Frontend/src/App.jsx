import { useState } from "react";
import "./app.css";
import Layout from "./components/Layout";
import AddNote from "./components/Layout/AddNote";
import NotesList from "./components/NotesList";
import notesJson from "./data/notes.json";

const newNote = {
  id: 1,
  title: "Title 1",
  body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum itaque, sunt iure fuga aliquid expedita provident, magnam qui, earum placeat tempora alias aperiam dignissimos aliquam laborum ad minima magni atque? Nam, deserunas eveniet obcaecati reprehenderit corporis placeat sint deserunt enim dolorem repudiandae atque, explicabo iusto ad distinctio temporibus nobis beatae illum repellat ea recusandae similique nisi fugit ducimus! Repellendus, sunt? Voluptatum voluptatibus corporis autem ad iste maiores fugiat veniam delectus provident dolorum labore quasi, consectetur eum! Vero distinctio blanditiis odio quasi ullam, eius nulla eveniet voluptatum, omnis voluptates, ipsum nihil!"
}
function App() {
  const [notes, setNotes] = useState(notesJson)
  return (
    <Layout>
      <AddNote onAddNote={()=>setNotes(prevNotes=>[...prevNotes,newNote])}/>
      <NotesList notes={notes} />
    </Layout>
  );
}

export default App;

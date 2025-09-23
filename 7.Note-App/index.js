// Selecting page elements

const btnEl = document.getElementById("btn");
const appEl = document.getElementById("app");

// Rendering existing notes on load

getNotes().forEach((note) => {
  const noteEl = createNoteEl(note.id, note.content);
  appEl.insertBefore(noteEl, btnEl);
});

// createNoteEl — make the textarea + event handlers

function createNoteEl(id, content) {
  const element = document.createElement("textarea");
  element.classList.add("note");
  element.placeholder = "Empty Note";
  element.value = content;

  element.addEventListener("dblclick", () => {
    const warning = confirm("Do you want to delete this note?");
    if (warning) {
      deleteNote(id, element);
    }
  });

  element.addEventListener("input", () => {
    updateNote(id, element.value);
  });

  return element;
}

// deleteNote — remove from storage and DOM

function deleteNote(id, element) {
  const notes = getNotes().filter((note) => note.id !== id);
  saveNote(notes);
  //appEl.removeChild(element);
  if (element) element.remove();
}

// updateNote — save edits

function updateNote(id, content) {
  const notes = getNotes();
//   const target = notes.filter((note) => note.id === id)[0];
const target = notes.find(note => note.id === id);
  if (!target) return;
  target.content = content;
  saveNote(notes);
}

// addNote — creating a new note

function addNote() {
  const notes = getNotes();
  const noteObj = {
    id: Math.floor(Math.random() * 100000),
    content: "",
  };
  const noteEl = createNoteEl(noteObj.id, noteObj.content);
  appEl.insertBefore(noteEl, btnEl);

  notes.push(noteObj);
  saveNote(notes);
}

// saveNote and getNotes (localStorage)

function saveNote(notes) {
  localStorage.setItem("note-app", JSON.stringify(notes));
}

function getNotes() {
  return JSON.parse(localStorage.getItem("note-app") || "[]");
}

// wiring the Add button

btnEl.addEventListener("click", addNote);

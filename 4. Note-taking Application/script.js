var noteList = document.getElementById("note-list");
var noteInput = document.getElementById("note-input");
var loginContainer = document.getElementById("login-container");
var notesContainer = document.getElementById("notes-container");
var usernameInput = document.getElementById("username");
var passwordInput = document.getElementById("password");

// Load existing notes from localStorage on page load
window.addEventListener("load", function() {
  loadNotes();
});

function login() {
  var username = usernameInput.value;
  var password = passwordInput.value;
  // Perform your login logic/validation here
  if (username === "admin" && password === "1234") {
    showNotesContainer();
  } else {
    alert("Invalid username or password");
  }
}

function logout() {
  hideNotesContainer();
  clearNotes();
  usernameInput.value = "";
  passwordInput.value = "";
}

function addNote() {
  var noteText = noteInput.value;
  if (noteText.trim() !== "") {
    var li = createNoteElement(noteText);

    noteList.appendChild(li);
    noteInput.value = "";

    saveNotes(); // Save the updated notes to localStorage
  }
}

function editNote() {
  var li = this.parentNode;
  var note = li.querySelector(".note-text");
  var newNoteText = prompt("Edit your note:", note.innerHTML);
  if (newNoteText !== null && newNoteText.trim() !== "") {
    note.innerHTML = newNoteText;

    saveNotes(); // Save the updated notes to localStorage
  }
}

function deleteNote() {
  var li = this.parentNode;
  if (confirm("Are you sure you want to delete this note?")) {
    noteList.removeChild(li);

    saveNotes(); // Save the updated notes to localStorage
  }
}

function createNoteElement(noteText) {
  var li = document.createElement("li");
  var note = document.createElement("span");
  note.className = "note-text";
  note.innerHTML = noteText;

  var editBtn = document.createElement("button");
  editBtn.className = "edit-btn";
  editBtn.innerHTML = "Edit";
  editBtn.addEventListener("click", editNote);

  var deleteBtn = document.createElement("button");
  deleteBtn.className = "delete-btn";
  deleteBtn.innerHTML = "Delete";
  deleteBtn.addEventListener("click", deleteNote);

  li.appendChild(note);
  li.appendChild(editBtn);
  li.appendChild(deleteBtn);

  return li;
}

function saveNotes() {
  var notes = [];
  var noteElements = noteList.getElementsByTagName("li");
  for (var i = 0; i < noteElements.length; i++) {
    var noteText = noteElements[i].querySelector(".note-text").innerHTML;
    notes.push(noteText);
  }

  localStorage.setItem("notes", JSON.stringify(notes));
}

function loadNotes() {
  var storedNotes = localStorage.getItem("notes");
  if (storedNotes !== null) {
    var notes = JSON.parse(storedNotes);
    for (var i = 0; i < notes.length; i++) {
      var li = createNoteElement(notes[i]);
      noteList.appendChild(li);
    }
  }
}

function showNotesContainer()   {
  loginContainer.style.display = "none";
  notesContainer.style.display = "block";
}

function hideNotesContainer() {
  loginContainer.style.display = "block";
  notesContainer.style.display = "none";
}

function clearNotes() {
  noteList.innerHTML = "";
}

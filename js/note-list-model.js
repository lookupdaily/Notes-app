function NoteList() {
  this.storedNotes = []
};

NoteList.prototype = (function() {
  function displayList() {
    return this.storedNotes
  };

  function createNote(note) {
    this.storedNotes.push(new Note(note))
  };

  return {
    displayList, createNote
  };
})();
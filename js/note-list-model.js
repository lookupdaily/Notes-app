function NoteList() {
  this.storedNotes = []
  this.nextId = 1
};

NoteList.prototype = (function() {
  function displayList() {
    return this.storedNotes
  };

  function createNote(note) {
    this.storedNotes.push(new Note(note, this.nextId))
    this.nextId ++
  };

  return {
    displayList: displayList, 
    createNote: createNote
  };
})();
function NoteView(note) {
  this.note = note
};

NoteView.prototype = (function() {
  function displayNote() {
    return '<div>' + this.note.text + '</div>'
  }
  return {
    displayNote: displayNote
  }
})();
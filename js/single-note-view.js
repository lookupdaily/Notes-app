function NoteView(note) {
  this.note = note
  console.log(this.note)
};

NoteView.prototype = (function() {
  function displayNote() {
    return '<div>' + this.note.text + '</div>'
  }
  return {
    displayNote: displayNote
  }
})();
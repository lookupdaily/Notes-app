function NoteView(note) {
  this.note = note
};

NoteView.prototype = (function() {
  function displayNote() {
    return '<divl>' + this.note + '</div>'
  }
  return {
    displayNote: displayNote
  }
})();
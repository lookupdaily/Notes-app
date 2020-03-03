function NoteListView(noteList) {
  this.noteList = noteList
}

NoteListView.prototype = (function() {

  function displayNoteView() {
    var note = '<ul>'
    for(let i = 0; i < this.noteList.displayList().length; i++) {
      note += '<li><div>' + this.noteList.displayList()[i].displayNote() + '</div><li>'
    }
    return note + '</ul>'
  }
  return {
    displayNoteView: displayNoteView
  }
})();
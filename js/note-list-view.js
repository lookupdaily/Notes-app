function NoteListView(noteList) {
  this.noteList = noteList
}

NoteListView.prototype = (function() {
  function displayNoteView() {
    var note = '';
    for(let i = 0; i < this.noteList.displayList().length; i++) {
      var noteLink = this.noteList.displayList()[i].displayNote()
      note += '<li><div>' + noteLink.substring(0, 20) + '</div></li>'
    }
    return '<ul>' + note + '</ul>'
  }
  return {
    displayNoteView: displayNoteView
  }
})();
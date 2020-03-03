function NoteController(noteList = new NoteList()) {
this.noteList = noteList
this.noteList.createNote('Favourite drink: seltzer')
this.noteList.createNote('Favourite food: chinese')
this.noteListView = new NoteListView(noteList)

}

NoteController.prototype = (() => {
  function insertHTML() {
    return document.getElementById('app').innerHTML = this.noteListView.displayNoteView();
  };
  
  return {
    insertHTML: insertHTML
  }
})();
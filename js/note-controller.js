function NoteController(noteList = new NoteList()) {
noteList.createNote('Favourite drink: seltzer')
noteList.createNote('Favourite food: chinese')
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
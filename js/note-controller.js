function NoteController(noteList = new NoteList()) {
noteList.createNote('Favourite drink: seltzer')
this.noteListView = new NoteListView(noteList)

}

NoteController.prototype = (function() {
  
  function insertHTML() {
    return document.getElementById('app').innerHTML = this.noteListView.displayNoteView();
  };
  
  return {
    insertHTML: insertHTML
  }

})();
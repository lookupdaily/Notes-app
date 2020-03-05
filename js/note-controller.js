function NoteController(noteList) {
  this.noteList = noteList
  this.noteList.createNote("Favourite drink: seltzer")
  this.noteListView = new NoteListView(this.noteList)
}

NoteController.prototype = (function() {
  function insertHTML() {
    document.getElementById('app').innerHTML = this.noteListView.displayNoteView()
    
  }
  return {
    insertHTML: insertHTML
  }
})();

noteList = new NoteList();
noteController = new NoteController(noteList);
noteController.insertHTML()


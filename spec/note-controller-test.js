describe ("note controller", function() {
  // function NoteListDouble() {
  //   this.storedNotes = []
  // };

  // NoteListDouble.prototype = {
  //   createNote: function(note) {
  //     this.storedNotes.push({text: note})
  //   },
  //   displayList: function() {
  //     return this.storedNotes
  //   }
  // }


  noteController = new NoteController(new NoteList);

  it ("can take a note list as a parameter", function() {
    expect(noteController.noteList).toBeInstanceOf(NoteList)
  })

  it("adds a note to the note list", function() {
    noteController.insertHTML();
    expect(document.getElementById('app').innerHTML).toBe('<ul><li><div>Favourite drink: seltzer</div></li></ul>')
  })
});

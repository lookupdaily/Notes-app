describe ("note controller", function() {
  function NoteListDouble() {};
  noteController = new NoteController(new NoteListDouble);

  it ("can take a note list as a parameter", function() {
    expect(noteController.noteList).toBeInstanceOf(NoteListDouble)
  })
});

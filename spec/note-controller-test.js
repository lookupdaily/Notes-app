describe ("note controller", function() {
  function NoteListDouble() {};
  noteController = new NoteController(new NoteListDouble);

  it ("can take a note list as a parameter", function() {
    expect(noteController.noteList).toBeInstanceOf(NoteListDouble)
  })

  it("adds a note to the note list", function() {
    noteController.insertHTML();
    expect(document.getElementById('app').innerHTML).toBe('<ul></div></li>Favourite drink: seltzer</div></li></ul>')
  })
});

describe ("note controller", function() {

  noteController = new NoteController(new NoteList);

  it ("can take a note list as a parameter", function() {
    expect(noteController.noteList).toBeInstanceOf(NoteList)
  })

  it("adds a note to the note list", function() {
    noteController.insertHTML();
    expect(document.getElementById('app').innerHTML).toBe('<ul><li><div>Favourite drink: sel</div></li></ul>')
  })

  it("adds more than one note to the view", function() {
    noteController.noteList.createNote("Buy some milk Ziad!")
    noteController.insertHTML();
    expect(document.getElementById('app').innerHTML).toBe('<ul><li><div>Favourite drink: sel</div></li><li><div>Buy some milk Ziad!</div></li></ul>')
  })
});

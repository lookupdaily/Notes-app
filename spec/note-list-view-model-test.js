describe("Note list view", () => {
  var noteList = new NoteList();
  var noteListView = new NoteListView(noteList);
  it('instantiates with a note list', () => {
  expect(noteListView.noteList).toBeInstanceOf(NoteList)
  })
  it('returns list of items in html tags', () => {
    noteList.createNote('Fave food: pesto')
    expect(noteListView.displayNoteView()).toBe('<ul><li><div>Fave food: pesto</div></li></ul>')
  })

  it('returns only the first 20 characters of a note', () => {
    noteList.createNote('Favourite food: pesto')
    expect(noteListView.displayNoteView()).toBe('<ul><li><div>Favourite food: pest</div></li></ul>')
  })
});
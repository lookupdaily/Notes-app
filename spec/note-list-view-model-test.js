describe("Note list view", () => {
  var noteList = new NoteList();
  noteList.createNote('Favourite food: pesto')
  var noteListView = new NoteListView(noteList);
  it('instantiates with a note list', () => {
  expect(noteListView.noteList).toBeInstanceOf(NoteList)
  })
  it('returns list of items in html tags', () => {
    expect(noteListView.displayNoteView()).toBe('<ul><li><div>Favourite food: pesto</div><li></ul>')
  })
});
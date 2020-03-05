describe("Note list view", () => {
  
  it('instantiates with a note list', () => {
    var noteList = new NoteList();
    var noteListView = new NoteListView(noteList);
    expect(noteListView.noteList).toBeInstanceOf(NoteList)
  })
  it('returns list of items in html tags', () => {
    var noteList = new NoteList();
    var noteListView = new NoteListView(noteList);
    noteList.createNote('Fave food: pesto')
    expect(noteListView.displayNoteView()).toBe('<ul><li><div>Fave food: pesto</div></li></ul>')
  })

  it('returns only the first 20 characters of a note', () => {
    var noteList = new NoteList();
    var noteListView = new NoteListView(noteList);
    noteList.createNote('Favourite food: pesto')
    expect(noteListView.displayNoteView()).toBe('<ul><li><div>Favourite food: pest</div></li></ul>')
  })
});
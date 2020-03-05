describe("Note list", () => {

  it("creates an empty array", () => {
    noteList = new NoteList();
    expect(Array.isArray(noteList.displayList())).toBe(true);
  });

  it("stores a note", () => {
    noteList = new NoteList();
    noteList.createNote('This is a note'); // new Note
    expect(noteList.displayList()[0]).toBeInstanceOf(Note); // to be an instance of note
  });

  it("each note in a notebook has a unique id", () => {
    noteList = new NoteList();
    noteList.createNote('This is a note');
    noteList.createNote('Another note');
    expect(noteList.storedNotes[0].id).notToBe(noteList.storedNotes[1].id)
  })
});
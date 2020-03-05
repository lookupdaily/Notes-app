describe("Note list", () => {

  noteList = new NoteList();
  
  it("creates an empty array", () => {
    expect(Array.isArray(noteList.displayList())).toBe(true);
  });

  it("stores a note", () => {
    var note1 = noteList.createNote('This is a note'); // new Note
    expect(noteList.displayList()[0]).toBeInstanceOf(Note); // to be an instance of note
  });
});
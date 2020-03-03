describe("Note list", () => {

  note1 = new Note("This is my new note-1")
  noteList = new NoteList();
  
  it("creates an empty array", () => {
    expect(Array.isArray(noteList.displayList())).toBe(true);
  });

  it("store a note", () => {
    expect(noteList.storeNote(note1)).toBe([note1]);
  });
});
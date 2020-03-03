describe("Note", () => {

  var note = new Note("My favourite language is javascript!");

  it("takes a note", () => {
    expect(note.displayNote()).toBe("My favourite language is javascript!");
  });
});
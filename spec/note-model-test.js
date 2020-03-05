describe("Note", () => {

  it("takes a note", () => {
    var note = new Note("My favourite language is javascript!");
    expect(note.displayNote()).toBe("My favourite language is javascript!");
  });

  describe("Note ids", () => {
    it("is instantiated with an id", () => {
      var note = new Note("My favourite language is javascript!", 1);
      expect(note.id).toBe(1)
    });
  });
  
});
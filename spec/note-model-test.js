describe("Note", () => {

  it("takes a note", () => {
    var note = new Note("My favourite language is javascript!");
    expect(note.displayNote()).toBe("My favourite language is javascript!");
  });

  describe("Note ids", () => {
    it("is instantiated with an id", () => {
      var note = new Note("My favourite language is javascript!");
      console.log()
      expect(note.id).toBe(1)
    });
  });
  
  it("each note has a unique id", () => {
    var note = new Note("My favourite language is javascript!");
    var note2 = new Note("My favourite language is not javascript!");
    expect(note.id).notToBe(note2.id)
  })
});
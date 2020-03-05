describe ('Single note view', function() {
  function NoteDouble(text) {
    this.text = text
  }

  it('instantiates with a note', function() {
    var noteDouble = new NoteDouble("Learn javascript")
    var noteView = new NoteView(noteDouble)
    expect(noteView.note).toBeInstanceOf(NoteDouble)
  }) 

  it('returns a note in a string of html', function() {
    var noteDouble = new NoteDouble("Learn javascript")
    var noteView = new NoteView(noteDouble)
    expect(noteView.displayNote()).toBe("<div>Learn javascript</div>") 
  })  
})


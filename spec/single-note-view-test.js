describe ('Single note view', function() {
  function NoteDouble(text) {
    this.text = text
  }
  var noteDouble = new NoteDouble("Learn javascript")

  var noteView = new NoteView(noteDouble)

  it('instantiates with a note', function() {
    expect(noteView.note).toBeInstanceOf(NoteDouble)
  }) 

  it('returns a note in a string of html', function() {
    
    expect(noteView.displayNote()).toBe("<div>Learn javascript</div>") 
  })  
})


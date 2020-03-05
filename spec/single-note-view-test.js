describe ('Single note view', function() {
  var NoteDouble = function() {}
  var noteView = new NoteView(new NoteDouble)

  it('instantiates with a note', function() {
    expect(noteView.note).toBeInstanceOf(NoteDouble)
  }) 

  it('returns a note in a string of html', function() {
    expect(noteView.displayNote()).toBe("<div>Favourite drink: seltzer</div>") 
  })  
})


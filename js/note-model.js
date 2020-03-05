(function(exports) {

  function Note(text, id) {
    this.text = text
    this.id = id
  }

  exports.Note = Note;

  Note.prototype.displayNote = function() {
      return this.text
    };

})(this)

(function(exports) {

  function Note(text) {
    this.text = text
    this.id = 1
  }

  exports.Note = Note;

  Note.prototype.displayNote = function() {
      return this.text
    };

})(this)

function Note(text) {
  this.text = text
};

Note.prototype = (function() {
  function displayNote() {
    return this.text
  };

  return {
    displayNote: displayNote
  };
})();

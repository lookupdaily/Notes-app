// not modular
/*
var Note = function(text) {
  this.text = text
};

Note.prototype.displayNote = function() {
  return this.text
};
*/

// module patern, creating private and public functions.
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

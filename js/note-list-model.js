function NoteList() {
  this.storedNotes = []
};

NoteList.prototype = (function() {
  function displayList() {
    return this.storedNotes
  };

  return {
    displayList
  };
})();
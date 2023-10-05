// Load saved notes and set up event listener when DOM is ready
document.addEventListener("DOMContentLoaded", function() {
    var savedNotes = localStorage.getItem("newtabNotes");
    if (savedNotes) {
      document.getElementById("notes").value = savedNotes;
    }
  
    // Save notes whenever they change
    document.getElementById("notes").addEventListener("input", function() {
      var notes = document.getElementById("notes").value;
      localStorage.setItem("newtabNotes", notes);
    });
  });
  
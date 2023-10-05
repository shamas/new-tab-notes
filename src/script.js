document.addEventListener("DOMContentLoaded", function() {
    // Load saved notes
    var savedNotes = localStorage.getItem("newtabNotes");
    if (savedNotes) {
      document.getElementById("notes").value = savedNotes;
    }
  
    // Load saved textarea size
    var savedSize = JSON.parse(localStorage.getItem("newtabSize"));
    if (savedSize) {
      document.getElementById("notes").style.width = savedSize.width;
      document.getElementById("notes").style.height = savedSize.height;
    }
  
    // Save notes and size
    document.getElementById("notes").addEventListener("input", function() {
      var notes = document.getElementById("notes").value;
      localStorage.setItem("newtabNotes", notes);
    });
  
    // Save textarea size when it's resized
    document.getElementById("notes").addEventListener("mouseup", function() {
      var size = {
        width: document.getElementById("notes").style.width,
        height: document.getElementById("notes").style.height
      };
      localStorage.setItem("newtabSize", JSON.stringify(size));
    });
  });
  
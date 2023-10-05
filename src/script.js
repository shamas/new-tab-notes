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

  // Load saved font size
  var savedFontSize = localStorage.getItem("newtabFontSize");
  if (savedFontSize) {
    document.getElementById("notes").style.fontSize = savedFontSize + "px";
  }

  // Increase font size
  document.getElementById("increase").addEventListener("click", function() {
    var currentSize = parseFloat(window.getComputedStyle(document.getElementById("notes")).fontSize);
    var newSize = currentSize * 1.1;
    document.getElementById("notes").style.fontSize = newSize + "px";
    localStorage.setItem("newtabFontSize", newSize);
  });

  // Decrease font size
  document.getElementById("decrease").addEventListener("click", function() {
    var currentSize = parseFloat(window.getComputedStyle(document.getElementById("notes")).fontSize);
    var newSize = currentSize / 1.1;
    document.getElementById("notes").style.fontSize = newSize + "px";
    localStorage.setItem("newtabFontSize", newSize);
  });
});

  
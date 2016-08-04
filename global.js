function hideAll(divs) {
  for (var i = 0; i < divs.length; i++) {
    divs[i].style.display = "none"
  }
}

function toggleViews(div) {
  if (div.style.display === "none") {
    div.style.display = "block";
  } else if (div.style.display === "block") {
    div.style.display = "none";
  }
}

function nextPage(value, array) {
    oldVal = value++;
    newVal = oldVal + 1;
    toggleViews(array[oldVal]);
    toggleViews(array[newVal]);  
}

function lastPage(value, array) {
    oldVal = value++;
    newVal = oldVal - 1;
    toggleViews(array[oldVal]);
    toggleViews(array[newVal]);  
}

function nextRecord(value, array) {
    oldRec = value++;
    newRec = oldRec + 1;
    toggleViews(array[oldRec]);
    toggleViews(array[newRec]);  
}

function lastRecord(value, array) {
    oldRec = value++;
    newRec = oldRec - 1;
    toggleViews(array[oldRec]);
    toggleViews(array[newRec]);  
}

function makeParagraph(v) {
  var p = document.createElement("P");
  var t = document.createTextNode(v.value);
  p.appendChild(t);
  userData.appendChild(p);
}

function makeMember(v) {
  var memberFieldsDiv = document.getElementById("memberFields");
  var newMember = document.createElement("INPUT");
  var name = v;
  newMember.setAttribute("type", "text");
  newMember.setAttribute("name", name);
  newMember.setAttribute("placeholder", "Name");
  memberFieldsDiv.appendChild(newMember);
}

function makeInstrument() {
  var instrumentFieldsDiv = document.getElementById("instrumentFields");
  var newInstrument = document.createElement("INPUT");
  newInstrument.setAttribute("type", "text");
  newInstrument.setAttribute("placeholder", "Instrument(s)");
  instrumentFieldsDiv.appendChild(newInstrument);
}

window.addEventListener("load", function(){
  var toggledViews = document.getElementsByClassName("toggledView");
  hideAll(toggledViews);
  var userData = document.getElementById("userData");
  hideAll(userData);
  var hiddenButtons = [document.getElementById("lastTrack"), document.getElementById("lastMember")];
  hideAll(hiddenButtons);
  var toggleIndex = "0";
  toggleViews(toggledViews[toggleIndex]);

  var addAlbumButton = document.getElementById("addAlbumButton");
  addAlbumButton.addEventListener("click", function(){
    nextPage(toggleIndex, toggledViews);
  });

// titleArtistForm
  var submitAlbumButton = document.getElementById("submitAlbumButton");
  submitAlbumButton.addEventListener("click", function(){
    nextPage(newVal, toggledViews);
  });

// memberInstrumentForm
  var lastMember = document.getElementById("lastMember");
  lastMember.addEventListener("click", function(){
    var memberFields = document.getElementById("memberFields").querySelectorAll("input");
    var instrumentFields = document.getElementById("instrumentFields").querySelectorAll("input");
    var n = memberFields.length;
    debugger;
    memberFields[n-1].style.display = "none";
    instrumentFields[n-1].style.display = "none";
    memberFields[n-2].style.display = "block";
    instrumentFields[n-2].style.display = "block";
  });

  var submitBandButton = document.getElementById("submitBandButton");
  submitBandButton.addEventListener("click", function(){
    nextPage(newVal, toggledViews);
    lastMember.style.display = "none";
  });

  var goToTitleArtistForm = document.getElementById("goToTitleArtistForm");
  goToTitleArtistForm.addEventListener("click", function(){
    lastPage(newVal, toggledViews);
  });

  var anotherMember = document.getElementById("anotherMember");
  anotherMember.addEventListener("click", function(){
    var memberFields = document.getElementById("memberFields").querySelectorAll("input");
    var instrumentFields = document.getElementById("instrumentFields").querySelectorAll("input");
    var q = memberFields.length;
    memberFields[q-1].style.display = "none";
    instrumentFields[q-1].style.display = "none";
    makeMember(q);
    makeInstrument();
    lastMember.style.display = "block";
  })

// locationImageForm
  var submitLocationImageButton = document.getElementById("submitLocationImageButton");
  submitLocationImageButton.addEventListener("click", function(){
    nextPage(newVal, toggledViews);
  });

  var goToMemberInstrumentForm = document.getElementById("goToMemberInstrumentForm");
  goToMemberInstrumentForm.addEventListener("click", function(){
    lastPage(newVal, toggledViews);
  });

// albumImagesForm
  var submitAlbumImagesButton = document.getElementById("submitAlbumImagesButton");
  submitAlbumImagesButton.addEventListener("click", function(){
    nextPage(newVal, toggledViews);
  });

  var goToLocationImageForm = document.getElementById("goToLocationImageForm");
  goToLocationImageForm.addEventListener("click", function(){
    lastPage(newVal, toggledViews);
  });

// genreDateFormatForm
  var submitGenreDateFormatButton = document.getElementById("submitGenreDateFormatButton");
  submitGenreDateFormatButton.addEventListener("click", function(){
    nextPage(newVal, toggledViews);
  });

  var goToAlbumImagesForm = document.getElementById("goToAlbumImagesForm");
  goToAlbumImagesForm.addEventListener("click", function(){
    lastPage(newVal, toggledViews);
  });

// trackEntryForm
  var submitAllButton = document.getElementById("submitAllButton");
  submitAllButton.addEventListener("click", function(){
    hideAll(toggledViews);
    var allFormFields = document.querySelectorAll("input"); 
    for (var i = 0; i < allFormFields.length; i++) {
      makeParagraph(allFormFields[i]);
    }
    userData.style.display = "block"
    debugger;
  });

  var goToGenreDateFormatForm = document.getElementById("goToGenreDateFormatForm");
  goToGenreDateFormatForm.addEventListener("click", function(){
    lastPage(newVal, toggledViews);
  });
  

}); 
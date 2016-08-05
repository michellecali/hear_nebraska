function hideAll(divs) {
  for (var i = 0; i < divs.length; i++) {
    divs[i].style.display = "none";
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
    window.oldVal = value++;
    window.newVal = oldVal + 1;
    toggleViews(array[oldVal]);
    toggleViews(array[newVal]);  
}
function lastPage(value, array) {
    window.oldVal = value++;
    window.newVal = oldVal - 1;
    toggleViews(array[oldVal]);
    toggleViews(array[newVal]);  
}

function lastRecord(input1, input2, array1, array2, index) {
    input1.value = array1[index].entry;
    input2.value = array2[index].entry;
}


    
function storeEntries(v) {
  var p = document.createElement("div");
  p.setAttribute("class", v.id);
  p.entry = v.value;
  userData.appendChild(p);
}

function clearValue(v) {
  v.value = "";
}

function makeMember() {
  var memberFieldsDiv = document.getElementById("memberFields");
  var newMember = document.createElement("INPUT");
  newMember.setAttribute("type", "text");
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
  // Populate upcoming forms with artist name  
    var albumArtist = document.getElementById("albumArtist").value;
    var bandNames = [document.getElementById("bandName"), document.getElementById("bandName2"), document.getElementById("bandName3")];
    for (var i = 0; i < bandNames.length; i++) {
      bandNames[i].innerHTML = albumArtist;
    }
// check if unique artist
    var artistCompare = new XMLHttpRequest();

    artistCompare.addEventListener("load", function(e){  

      var artistCompareResult = JSON.parse(e.target.response);
      var artistInfo = artistCompareResult.artistId;

      // if not a unique artist, capture artistID and check if unique album
      if (artistInfo != ""){
        // capture artistID
        var artistIdField = document.createElement("INPUT");
        artistIdField.setAttribute("type", "hidden");
        artistIdField.value = artistInfo;
        var titleArtistForm__Fields = document.getElementById("titleArtistForm__Fields");
        titleArtistForm__Fields.appendChild(artistIdField); 

        //check if unique album
        var albumTitleCompare = new XMLHttpRequest();

        albumTitleCompare.addEventListener("load", function(e){

          var albumTitleCompareResult = JSON.parse(e.target.response);
          var albumTitleIdField = albumTitleCompareResult.albumId;

          // if not unique album, capture albumId
          if (albumTitleIdField != ""){
            var albumTitleId = document.createElement("INPUT");
            albumTitleId.setAttribute("type", "hidden");
            albumTitleId.value = albumTitleIdField;
            titleArtistForm__Fields.appendChild(albumTitleId);   

          }
        });

        albumTitleCompare.open("get", "albumInfo");
        albumTitleCompare.send();
      }
    });
    artistCompare.open("get", "artistInfo");
    artistCompare.send(); 

    nextPage(newVal, toggledViews);
  });

// memberInstrumentForm
  var lastMember = document.getElementById("lastMember");
  var clicks = "0";
  lastMember.addEventListener("click", function(){
    var memberInput = document.getElementById("members");
    var instrumentInput = document.getElementById("instruments");
    var memberFields = [].slice.call(document.getElementsByClassName("members"), 0).reverse();
    var instrumentFields = [].slice.call(document.getElementsByClassName("instruments"), 0).reverse();
    var index = clicks++ % memberFields.length;
    // memberInput.value = memberFields[index].entry;
    // instrumentInput.value = instrumentFields[index].entry;
    lastRecord(memberInput, instrumentInput, memberFields, instrumentFields, index);
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
    var memberInstrumentFields = document.getElementById("memberInstrumentForm").querySelectorAll("input");
    for (var i = 0; i < memberInstrumentFields.length; i++) {
      storeEntries(memberInstrumentFields[i]);
      clearValue(memberInstrumentFields[i]);
      lastMember.style.display = "block";
    }
  
    
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
  });

  var goToGenreDateFormatForm = document.getElementById("goToGenreDateFormatForm");
  goToGenreDateFormatForm.addEventListener("click", function(){
    lastPage(newVal, toggledViews);
  });
  

}); 
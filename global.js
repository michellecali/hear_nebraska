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

function moveForward(value, array) {
    oldVal = value++;
    newVal = oldVal + 1;
    toggleViews(array[oldVal]);
    toggleViews(array[newVal]);  
}

function moveBackward(value, array) {
    oldVal = value++;
    newVal = oldVal - 1;
    document.getElementById("toggleIndex").value = newVal;
    toggleViews(array[oldVal]);
    toggleViews(array[newVal]);  
}



window.addEventListener("load", function(){
  var toggledViews = document.getElementsByClassName("toggledView");
  var hidePage = hideAll(toggledViews);
  var toggleIndex = document.getElementById("toggleIndex").value;
  var currentView = toggleViews(toggledViews[toggleIndex]);
  var userData = document.getElementById("userData");
  userData.style.display = "none";

  var addAlbumButton = document.getElementById("addAlbumButton");
  addAlbumButton.addEventListener("click", function(){
    moveForward(toggleIndex, toggledViews);
  });

  var submitAlbumButton = document.getElementById("submitAlbumButton");
  submitAlbumButton.addEventListener("click", function(){
    moveForward(newVal, toggledViews);
    var userData__albumArtist = document.createElement("P");
    userData__albumArtist.setAttribute("class", "userData__albumArtist");
    var t = document.createTextNode(albumArtist.value);
    userData__albumArtist.appendChild(t);   
    userData.appendChild(userData__albumArtist);
    debugger;
  });

  var submitBandButton = document.getElementById("submitBandButton");
  submitBandButton.addEventListener("click", function(){
    moveForward(newVal, toggledViews);
  });

  var goToTitleArtistForm = document.getElementById("goToTitleArtistForm");
  goToTitleArtistForm.addEventListener("click", function(){
    moveBackward(newVal, toggledViews);
  });

  var submitLocationImageButton = document.getElementById("submitLocationImageButton");
  submitLocationImageButton.addEventListener("click", function(){
    moveForward(newVal, toggledViews);
  });

  var goToMemberInstrumentForm = document.getElementById("goToMemberInstrumentForm");
  goToMemberInstrumentForm.addEventListener("click", function(){
    moveBackward(newVal, toggledViews);
  });

  var submitAlbumImagesButton = document.getElementById("submitAlbumImagesButton");
  submitAlbumImagesButton.addEventListener("click", function(){
    moveForward(newVal, toggledViews);
  });

  var goToLocationImageForm = document.getElementById("goToLocationImageForm");
  goToLocationImageForm.addEventListener("click", function(){
    moveBackward(newVal, toggledViews);
  });

  var submitGenreDateFormatButton = document.getElementById("submitGenreDateFormatButton");
  submitGenreDateFormatButton.addEventListener("click", function(){
    moveForward(newVal, toggledViews);
  });

  var goToAlbumImagesForm = document.getElementById("goToAlbumImagesForm");
  goToAlbumImagesForm.addEventListener("click", function(){
    moveBackward(newVal, toggledViews);
  });

  var submitAllButton = document.getElementById("submitAllButton");
  submitAllButton.addEventListener("click", function(){
    hideAll(toggledViews);
    userData.style.display = "block"
    debugger;
  });

  var goToGenreDateFormatForm = document.getElementById("goToGenreDateFormatForm");
  goToGenreDateFormatForm.addEventListener("click", function(){
    moveBackward(newVal, toggledViews);
  });
  

}); 
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

var addAlbumButton = document.getElementById("addAlbumButton");
  addAlbumButton.addEventListener("click", function(){
    moveForward(toggleIndex, toggledViews);
  });

var submitAlbumButton = document.getElementById("submitAlbumButton");
  submitAlbumButton.addEventListener("click", function(){
    moveForward(newVal, toggledViews);
  });

var submitBandButton = document.getElementById("submitBandButton");
  submitBandButton.addEventListener("click", function(){
    moveForward(newVal, toggledViews);
  });

  

}); 
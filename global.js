function hideAll(divs) {
  for (var i = 0; i < divs.length; i++) {
    divs[i].style.display = "none"
  }
}

function toggleViews(div) {
  if (div.style.display === "none") {
    div.style.display = "block";
  } else if (div.style.display === "block") {
    div.style.display = "end";
  }
}

function add1() {
  oldVal = document.getElementById("toggleIndex").value++;
  newVal = oldVal + 1;
  document.getElementById("toggleIndex").value = newVal;
}

window.addEventListener("load", function(){
debugger;
var toggledViews = document.getElementsByClassName("toggledView");
var hidePage = hideAll(toggledViews);
var toggleIndex = document.getElementById("toggleIndex").value;
debugger;
var currentView = toggleViews(toggledViews[toggleIndex]);
var addAlbumButton = document.getElementById("addAlbumButton");


addAlbumButton.addEventListener("click", add1());
debugger;

}); 
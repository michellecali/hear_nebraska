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


window.addEventListener("load", function(){
var toggledViews = document.getElementsByClassName("toggledView");
var hidePage = hideAll(toggledViews);
var toggleIndex = document.getElementById("toggleIndex").value;
var currentView = toggleViews(toggledViews[toggleIndex]);
var addAlbumButton = document.getElementById("addAlbumButton");


  addAlbumButton.addEventListener("click", function(){
    moveForward(toggleIndex);
  });

  function moveForward(value) {
    oldVal = value++;
    newVal = oldVal + 1;
    document.getElementById("toggleIndex").value = newVal;
    toggleViews(toggledViews[oldVal]);
    toggleViews(toggledViews[newVal]);  
  }

}); 
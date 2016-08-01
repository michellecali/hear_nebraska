window.addEventListener("load", function(){
  var addAlbumButton = document.getElementById("addAlbumButton");

  addAlbumButton.addEventListener("click",function(){
    var homePage = document.getElementById("homePage");
    var titleArtistForm = document.getElementById("titleArtistForm");
    var submitAlbumButton = document.getElementById("submitAlbumButton");
    homePage.style.display="none";
    titleArtistForm.style.display="block";
  
      submitAlbumButton.addEventListener("click", function(){
      var title = document.getElementById("title");
      var artist = document.getElementById("artist");
      debugger;
      var albumTitle = document.getElementById("albumTitle");
      var albumArtist = document.getElementById("albumArtist");
        albumTitle.innerHTML = title.value;
        albumArtist.innerHTML = artist.value;
        titleArtistForm.style.display = "none";
        homePage.style.display="block";
      });
  });
});

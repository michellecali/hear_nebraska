window.addEventListener("load", function(){

  addAlbumButton.addEventListener("click",function(){
    var homePage = document.getElementById("homePage");
    var titleArtistForm = document.getElementById("titleArtistForm");
    homePage.style.display="none";
    titleArtistForm.style.display="block";
  });
  
  submitAlbumButton.addEventListener("click", function(){
    var title = document.getElementById("title");
    var artist = document.getElementById("artist");
    var albumTitle = document.getElementById("albumTitle");
    var albumArtist = document.getElementById("albumArtist");
    var memberInstrumentForm = document.getElementById("memberInstrumentForm");
    var bandName = document.getElementById("bandName");
    albumTitle.innerHTML = title.value;
    albumArtist.innerHTML = artist.value;
    bandName.innerHTML = artist.value;
    titleArtistForm.style.display = "none";
    memberInstrumentForm.style.display="block";
      
    var artistCompare = new XMLHttpRequest();

    artistCompare.addEventListener("load", function(e){
        
      var artistCompareResult = JSON.parse(e.target.response);
      var artistId = artistCompareResult.artistId;
      debugger;
      if (artistId != ""){
        var artistIdField = document.createElement("INPUT");
        artistIdField.setAttribute("type", "text");
        artistIdField.setAttribute("class", "titleArtistForm__artistId");
        artistIdField.value = artistId;
        debugger;
        
        var albumCompare = new XMLHttpRequest();

        albumCompare.addEventListener("load", function(e){

          var albumCompareResult = JSON.parse(e.target.response);
          var albumId = albumCompareResult.albumId;
          debugger;
          if (albumId != ""){
            var albumIdField = document.createElement("INPUT");
            albumIdField.setAttribute("type", "text");
            albumIdField.setAttribute("class", "titleArtistForm__albumId");
            albumIdField.value = albumId;
            debugger;
          }
        });
      }

        albumCompare.open("get", "albumInfo");
        albumCompare.send();
      
    });
      
    artistCompare.open("get", "artistInfo");
    artistCompare.send();

  });
   
}); 
  








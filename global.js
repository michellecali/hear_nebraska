window.addEventListener("load", function(){

  addAlbumButton.addEventListener("click",function(){
    var homePage = document.getElementById("homePage");
    var titleArtistForm = document.getElementById("titleArtistForm");
    homePage.style.display="none";
    titleArtistForm.style.display="block";
  
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
      });

      submitBandButton.addEventListener("click", function(){
        var member = document.getElementById("member0");
        var instrument = document.getElementById("instrument0");
        var artistMember = document.getElementById("artistMember");
        var artistInstrument = document.getElementById("artistInstrument");
        artistMember.innerHTML = member.value;
        artistInstrument.innerHTML = instrument.value;
        memberInstrumentForm.style.display = "none";
        homePage.style.display="block";
      });

      goToTitleArtistForm.addEventListener("click", function(){
        memberInstrumentForm.style.display = "none";
        titleArtistForm.style.display="block";
      });
  });
});

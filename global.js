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

        anotherMember.addEventListener("click", function(){
          lastMember.style.display="block";
        });

        submitBandButton.addEventListener("click", function(){
          var member = document.getElementsByClassName("memberInstrumentForm__member");
          var instrument = document.getElementsByClassName("memberInstrumentForm__instrument");
          var artistMembers = document.getElementsByClassName("Members");
          var artistInstruments = document.getElementsByClassName("Instruments");
          debugger;

          for (var i = 0; i < member.length; i++) {
          artistMembers[i].innerHTML = member[i].value;
          }
          // will need to create new artistMembers and artistInstruments when click
          for (var i = 0; i < instrument.length; i++) {
          artistInstruments[i].innerHTML = instrument[i].value;
          }
          
          debugger;
          memberInstrumentForm.style.display = "none";
          lastMember.style.display="none";
          homePage.style.display="block";
        });

      });

      goToTitleArtistForm.addEventListener("click", function(){
        memberInstrumentForm.style.display = "none";
        titleArtistForm.style.display="block";
      });

});

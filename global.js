window.addEventListener("load", function(){

  addAlbumButton.addEventListener("click",function(){
    var homePage = document.getElementById("homePage");
    var titleArtistForm = document.getElementById("titleArtistForm");
    homePage.style.display="none";
    titleArtistForm.style.display="block";
  });
  
  submitAlbumButton.addEventListener("click", function(){
    // capture entered values
    var title = document.getElementById("title");
    var artist = document.getElementById("artist");
    // denote storage location
    var userData = document.getElementsByClassName("userData");
    // create divs with entered values
    var userData__albumTitle = document.createElement("div");
    userData__albumTitle.setAttribute("class", "userData__albumTitle");
    userData__albumTitle.value = title.value;
    var userData__albumArtist = document.createElement("div");
    userData__albumArtist.setAttribute("class", "userData__albumArtist");
    userData__albumArtist.value = artist.value;
   
    // check if unique artist
    var artistCompare = new XMLHttpRequest();

    artistCompare.addEventListener("load", function(e){  

      var artistCompareResult = JSON.parse(e.target.response);
      var artistId = artistCompareResult.artistId;
      debugger;
      // if not a unique artist, capture artistID and check if unique album
      if (artistId != ""){
        // capture artistID
        var userData__artistId = document.createElement("div");
        userData__artistId.setAttribute("class", "userData__artistId");
        userData__artistId.value = artistId.value;
        debugger;
        //check if unique album
        var albumTitleCompare = new XMLHttpRequest();

        albumTitleCompare.addEventListener("load", function(e){

          var albumTitleCompareResult = JSON.parse(e.target.response);
          var albumTitleId = albumTitleCompareResult.albumId;
          debugger;

          // if not unique album, capture albumId
          if (albumTitleId != ""){
            var userData__albumTitleId = document.createElement("div");
            userData__albumTitleId.setAttribute("class", "userData__albumTitleId");
            userData__albumTitleId.value = albumTitleId.value;  
            debugger;
          }
        });

        albumTitleCompare.open("get", "albumInfo");
        albumTitleCompare.send();
      }
    });
    artistCompare.open("get", "artistInfo");
    artistCompare.send(); 
    debugger;
         
    // hide this form and show the next
    titleArtistForm.style.display = "none";
    var memberInstrumentForm = document.getElementById("memberInstrumentForm");
    var bandName = document.getElementById("bandName");  
    bandName.innerHTML = artist;
    memberInstrumentForm.style.display="block";
  });
   

  anotherMember.addEventListener("click", newMemberInstrument);
  
   function newMemberInstrument(element) {  
      
      var member = document.getElementsByClassName("memberInstrumentForm__member");
      var instrument = document.getElementsByClassName("memberInstrumentForm__instrument");
      var n = member.length;
      member[n-1].style.display = "none";
      instrument[n-1].style.display = "none";
      
      var newMember = document.createElement("INPUT");
      newMember.setAttribute("type", "text");
      newMember.setAttribute("class", "memberInstrumentForm__member");
      newMember.setAttribute("placeholder", "Name");
      newMember.setAttribute("id", "member" + n);
      newMember.setAttribute("style", "display:block");

      var newInstrument = document.createElement("INPUT");
      newInstrument.setAttribute("type", "text");
      newInstrument.setAttribute("class", "memberInstrumentForm__instrument");
      newInstrument.setAttribute("placeholder", "Instrument(s)");
      newInstrument.setAttribute("id", "instrument" + n);
      newInstrument.setAttribute("style", "display:block");

      memberInstrumentForm__fields.appendChild(newMember);
      memberInstrumentForm__fields.appendChild(newInstrument);

      var newMembersDiv = document.createElement("div");
      newMembersDiv.setAttribute("class", "Members");

      var newInstrumentsDiv = document.createElement("div");
      newInstrumentsDiv.setAttribute("class", "Instruments");

      memberInstrumentPage.appendChild(newMembersDiv);
      memberInstrumentPage.appendChild(newInstrumentsDiv);

      lastMember.style.display="block";
      // lastMember is the button that appears when additional band members are added to view the previously added member
      
    };
        

    submitBandButton.addEventListener("click", function(){
      var member = document.getElementsByClassName("memberInstrumentForm__member");
      var instrument = document.getElementsByClassName("memberInstrumentForm__instrument");
      var membersDiv = document.getElementsByClassName("Members");
      var instrumentsDiv = document.getElementsByClassName("Instruments");

      for (var i = 0; i < member.length; i++) {
      membersDiv[i].innerHTML = member[i].value;
      }
      
      for (var i = 0; i < instrument.length; i++) {
      instrumentsDiv[i].innerHTML = instrument[i].value;
      }
      
      memberInstrumentForm.style.display = "none";
      lastMember.style.display="none";
      homePage.style.display="block";

    });

     

    goToTitleArtistForm.addEventListener("click", function(){
      // this is the p button that takes you back to the previous form when entering band membersS
        memberInstrumentForm.style.display = "none";
        titleArtistForm.style.display="block";
    });

}); 
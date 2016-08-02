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
      
    var compare = new XMLHttpRequest();

    compare.addEventListener("load", function(e){
        
      var enteredData = JSON.parse(e.target.response);
        debugger;
        // debugger only showing one of two records
      var artistData = enteredData.object;
      debugger;
      });
      
    compare.open("get", "info");
    compare.send();

  });
















    // var title = document.getElementById("title");
    // var artist = document.getElementById("artist");
    // var albumTitle = document.getElementById("albumTitle");
    // var albumArtist = document.getElementById("albumArtist");
    // var memberInstrumentForm = document.getElementById("memberInstrumentForm");
    // var bandName = document.getElementById("bandName");
    // albumTitle.innerHTML = title.value;
    // albumArtist.innerHTML = artist.value;
    // bandName.innerHTML = artist.value;
    // titleArtistForm.style.display = "none";
    // memberInstrumentForm.style.display="block";
});

  // anotherMember.addEventListener("click", newMemberInstrument);
  
  //  function newMemberInstrument(element) {  
      
  //     var member = document.getElementsByClassName("memberInstrumentForm__member");
  //     var instrument = document.getElementsByClassName("memberInstrumentForm__instrument");
  //     var n = member.length;
  //     member[n-1].style.display = "none";
  //     instrument[n-1].style.display = "none";

      
  //     var newMember = document.createElement("INPUT");
  //     newMember.setAttribute("type", "text");
  //     newMember.setAttribute("class", "memberInstrumentForm__member");
  //     newMember.setAttribute("placeholder", "Name");
  //     newMember.setAttribute("id", "member" + n);
  //     newMember.setAttribute("style", "display:block");

  //     var newInstrument = document.createElement("INPUT");
  //     newInstrument.setAttribute("type", "text");
  //     newInstrument.setAttribute("class", "memberInstrumentForm__instrument");
  //     newInstrument.setAttribute("placeholder", "Instrument(s)");
  //     newInstrument.setAttribute("id", "instrument" + n);
  //     newInstrument.setAttribute("style", "display:block");

  //     memberInstrumentForm.appendChild(newMember);
  //     memberInstrumentForm.appendChild(newInstrument);

  //     var newMembersDiv = document.createElement("div");
  //     newMembersDiv.setAttribute("class", "Members");

  //     var newInstrumentsDiv = document.createElement("div");
  //     newInstrumentsDiv.setAttribute("class", "Instruments");

  //     memberInstrumentPage.appendChild(newMembersDiv);
  //     memberInstrumentPage.appendChild(newInstrumentsDiv);

  //     lastMember.style.display="block";
      
  //   };
        

  //   submitBandButton.addEventListener("click", function(){
  //     var member = document.getElementsByClassName("memberInstrumentForm__member");
  //     var instrument = document.getElementsByClassName("memberInstrumentForm__instrument");
  //     var membersDiv = document.getElementsByClassName("Members");
  //     var instrumentsDiv = document.getElementsByClassName("Instruments");

  //     for (var i = 0; i < member.length; i++) {
  //     membersDiv[i].innerHTML = member[i].value;
  //     }
  //     // will need to create new artistMembers and artistInstruments when click
  //     for (var i = 0; i < instrument.length; i++) {
  //     instrumentsDiv[i].innerHTML = instrument[i].value;
  //     }
      
  //     memberInstrumentForm.style.display = "none";
  //     lastMember.style.display="none";
  //     homePage.style.display="block";

  //   });

     

  //     goToTitleArtistForm.addEventListener("click", function(){
  //       memberInstrumentForm.style.display = "none";
  //       titleArtistForm.style.display="block";
  //     });


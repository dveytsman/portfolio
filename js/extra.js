var pic = document.querySelector("#profile-pic");

  window.onresize = function(){
    console.log(window.outerWidth);
    if(window.outerWidth < 768){
      pic.classList.add("profile-pic");
    } else {
      pic.classList.remove("profile-pic");
    }
  };
  pic.onload = function(){
    console.log(window.outerWidth);
    if(window.outerWidth < 768){
      pic.classList.add("profile-pic");
    } else {
      pic.classList.remove("profile-pic");
    }
  };

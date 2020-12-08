(function (window) {
  var byeSpeaker = {};
  byeSpeaker.speak = name;
  
  var speakWord = "Good Bye";

  byeSpeaker.sayBye = function () {
    console.log(speakWord + " " + byeSpeaker.speak);
  }

  window.byeSpeaker = byeSpeaker;

})(window);

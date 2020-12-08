(function (window) {
  var helloSpeaker = {};
  helloSpeaker.speak = name;

  var speakWord = "Hello";

  helloSpeaker.sayHello = function () {
    console.log(speakWord + " " + helloSpeaker.speak);
  }

  window.helloSpeaker = helloSpeaker;

})(window);


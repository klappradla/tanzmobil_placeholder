APP.Dialog = (function() {
  var theater;

  function initialize() {
    theater = new TheaterJS({
      erase: false,
      autoplay: true,
      minspeed: 10,
      maxspeed: 200
    });
  }

  function play() {
    // actors
    theater
      .describe('question', { speed: .8, accuracy: .7, invincibility: 5 }, '#question')
      .describe('answer', { speed: .8, accuracy: .8, invincibility: 6 }, '#answer')

    // scenario
    theater
      .write(400)
      .write('question:what\'s \"tanzmobil\"?')
      .write(200)
      .write('answer:a project to promote production managers in dance.')
      .write(200)
      .write('question:who is it?')
      .write('answer:mira lina simon and sarah blumenfeld,')
      .write('answer:two freelance dance producers from berlin and vienna.', 100)
      .write('answer:...and a bus ;)')
      .write(200)
      .write('question:interesting!', 100)
      .write('question:what\'s the project about?')
      .write(200)
      .write('answer:tanzmobil is touring europe,')
      .write('answer:to interview production managers in dance and performance.', 100)
      .write('answer:the interviews outline the job profile')
      .write('answer:and different approaches to it.')
      .write(200)
      .write('question:where can i find the interviews?')
      .write(200)
      .write('answer:here on tanzmobil.eu soon.')
      .write(200)
      .write('question:what can i do until then?')
      .write(200)
      .write('answer:subscribe to our newsletter!!!')
      .write(400)
      .write(-46)

      // loop scenario
      .write(function () { theater.play(true); });
  }


  return {
    init: function() {
      initialize();
      play();
    }
  }

})();
var APP = {
  car: {},
  theater: {},

  init: function() {
    // init car
    console.log("app init");
    APP.Car.init('#car');
  }
}



// var APP = {
//     utils: {},
//     components: {},
//     pages: {},

//     init: function() {
//         APP.pages.sitewide.init();
//         var pageToInit = $("body").attr("data-page");
//         APP.pages[pageToInit].init();
//     }
// };
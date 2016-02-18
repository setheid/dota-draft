var draftCounters = {};



draftCounters.findNums = function(synergyOrCounter, teamArray, weakOrSynergy) {
  $('section .hero-image .inner').each(function() {
    var counterPick = this;
    var counterNum = 0;

    teamArray.forEach(function(hero) {
      hero[weakOrSynergy].forEach(function(counter) {
        if ($(counterPick).data('hero') === counter && !$(counterPick).hasClass('grayed-out')) {
          counterNum += 1;
          $(counterPick).data(synergyOrCounter, counterNum);
        }
      });
    });
  });
};

draftCounters.highlightHeroes = function(synergyOrCounter) {
  var allHeroes = $('section .hero-image .inner');

  allHeroes.each(function() {
    var num = $(this).data(synergyOrCounter);

    if (num) {
      if (num === 2) {
        $(this).addClass(synergyOrCounter + '1');
      } else if (num === 3) {
        $(this).addClass(synergyOrCounter + '3');
      } else if (num > 3) {
        $(this).addClass(synergyOrCounter + '5');
      }
    }
  });
};

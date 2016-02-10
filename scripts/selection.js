var selection = {};

selection.selectHero = function() {
  $('main').on('click', '.hero-image .inner', function() {
  // Only run if there is a slot selected AND if the hero isn't grayed out
    if ($('.draft-image').hasClass('select') && !$(this).hasClass('grayed-out')) {
      var selectedHero = this;
      var $index = $(this).parent().index();
      var heroClass = this.dataset.heroclass;
      var heroName = this.dataset.hero;
      var $team = $('.select').parents('.team').data('team');
      var $pickNum = $('.select')[0].dataset.draftpick;
      var teamPick = $team + '-' + $pickNum;
      var allHeroes = $('section .hero-image .inner');

    // Add hero to team's array
      draft.addToArray(teamPick, $team, heroClass, $index);
    // Add image to team's draft slot
      draft.addImage(heroClass, $index);
    // Gray out selected hero
      selection.checkGrayedOut(teamPick);
      selection.grayOut(selectedHero, teamPick);

    // highlight counter picks and heroes that synergize
      allHeroes.removeData('counter synergy').removeClass('counter1 counter3 counter5 synergy1 synergy3 synergy5');
      draftCounters.findNums('counter', draft.dire, 'weak_against');
      draftCounters.findNums('synergy', draft.radient, 'synergies');
      draftCounters.highlightHeroes('counter');
      draftCounters.highlightHeroes('synergy');
    }
  });
};

selection.checkGrayedOut = function(teamPick) {
// Check to see if hero is grayed out because of a selection
  $('section .hero-image .inner').each(function() {
    if ($(this).data('pick') === teamPick) {
      $(this).removeData('pick').removeClass('grayed-out');
    }
  });
};

selection.grayOut = function(selectedHero, teamPick) {
  $(selectedHero).data('pick', teamPick).addClass('grayed-out');
};

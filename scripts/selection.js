var selection = {};

selection.selectHero = function() {
  $('main').on('click', '.hero-image .inner', function() {
  // Only run if there is a slot selected AND if the hero isn't grayed out
    if ($('.draft-image').hasClass('select') && !$(this).hasClass('grayed-out')) {
      var selectedHero = this;
      var $index = $(this).parent().index();
      var heroClass = this.dataset.heroclass;
      var $team = $('.select').parents('.team').data('team');
      var $pickNum = $('.select')[0].dataset.draftpick;
      var teamPick = $team + '-' + $pickNum;

    // Add hero to team's array
      draft.addToArray(teamPick, $team, heroClass, $index);
    // Add image to team's draft slot
      draft.addImage(heroClass, $index);
    // Gray out selected hero
      selection.checkGrayedOut(teamPick);
      selection.grayOut(selectedHero, teamPick);
    }
  });
};

selection.checkGrayedOut = function(teamPick) {
// Check to see if hero is grayed out because of a selection
  $('section .hero-image .inner').each(function() {
    if ($(this).data('pick') === teamPick) {
      $(this).removeData().removeClass('grayed-out');
    }
  });
};

selection.grayOut = function(selectedHero, teamPick) {
  $(selectedHero).data('pick', teamPick).addClass('grayed-out');
};

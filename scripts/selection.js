var selection = {};

selection.selectHero = function() {
  $('main').on('click', '.hero-image .inner', function() {
    // Only run if there is a slot selected AND if the selection isn't grayed out
    if ($('.draft-image').hasClass('select') && !$(this).hasClass('grayed-out')) {
      var selectedHero = this;
      var $index = $(this).parent().index();
      var heroClass = this.dataset.heroclass;
      var $team = $('.select').parents('.team').data('team');
    // Add image to team slot
      $('.select').css('background-image', 'url(' + heroes[heroClass][$index].image + ')');
    // Add hero to team array
      draft.addToArray($team, heroClass, $index);
    // Gray out selected heroes
      selection.grayOut(selectedHero, $team);
    }
  });
};

selection.grayOut = function(selectedHero, team) {
  var pickNum = $('.select')[0].dataset.draftpick;
  var teamPick = team + '-' + pickNum;

  selection.checkGrayedOut(teamPick);
  $(selectedHero).data('pick', teamPick).addClass('grayed-out');
};

selection.checkGrayedOut = function(teamPick) {
// Check to see if hero is grayed out because of a selection
  $('section .hero-image div').each(function() {
    if ($(this).data('pick') === teamPick) {
      $(this).removeData().removeClass('grayed-out');
    }
  });
};

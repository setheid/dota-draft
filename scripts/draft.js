var draft = {};
draft.radient = [];
draft.dire = [];

draft.pickNums = [
  {draftpick: 'pick1', image: '/images/clicktoselect.jpg'},
  {draftpick: 'pick2', image: '/images/clicktoselect.jpg'},
  {draftpick: 'pick3', image: '/images/clicktoselect.jpg'},
  {draftpick: 'pick4', image: '/images/clicktoselect.jpg'},
  {draftpick: 'pick5', image: '/images/clicktoselect.jpg'}
];

draft.getTemplate = function(ctx, next) {
  $.get('/templates/hero_draft.html', function(data, message, xhr) {
    draft.template = Handlebars.compile(data);
    next();
  });
};

draft.loadSingle = function(ele) {
  return draft.template(ele);
};

draft.chooseSlot = function() {
  $('.draft-picks').on('click', '.draft-image', draft.highlight);
};

draft.highlight = function() {
  $('.select').css('box-shadow', 'none').not(this).removeClass('select');
  $(this).toggleClass('select');
  if ($(this).parents().hasClass('team-radient')) {
    $('.select').css('box-shadow', 'inset 0 0 20px #61FF61');
  } else {
    $('.select').css('box-shadow', 'inset 0 0 20px #FC4343');
  }
};

draft.addImage = function(heroClass, index) {
  $('.select').css('background-image', 'url(' + heroes[heroClass][index].image + ')');
};

draft.addToArray = function(teamPick, team, heroClass, index) {
  // remove any hero with same draft pick property before adding new hero
  draft.checkArray(team, teamPick);

  // add new hero
  draft[team].push(heroes[heroClass][index]);
  var lastAdded = draft[team][draft[team].length - 1];

  // add the draft pick property to the added hero so it can be checked later
  lastAdded.pick = teamPick;
};

draft.checkArray = function(team, teamPick) {
  // Check to see if draft pick has been added and remove duplicate picks
  draft[team] = draft[team].filter(function(ele) {
    return ele.pick !== teamPick;
  });
};

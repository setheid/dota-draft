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

draft.loadSingle = function(ele) {
  return draft.template(ele);
};

draft.chooseSlot = function() {
  $('.draft-picks').on('click', '.draft-image', function() {
    $('.select').css('box-shadow', 'none').not(this).removeClass('select');
    $(this).toggleClass('select');
    if ($(this).parents().hasClass('team-radient')) {
      $('.select').css('box-shadow', 'inset 0 0 20px #61FF61');
    } else {
      $('.select').css('box-shadow', 'inset 0 0 20px #FC4343');
    }
  });
};

draft.addToArray = function(team, heroClass, index) {
  var pickNum = $('.select')[0].dataset.draftpick;
  var teamPick = team + '-' + pickNum;

  draft[team].push(heroes[heroClass][index]);
  var lastAdded = draft[team][draft[team].length - 1];

  draft.checkArray(team, teamPick);
  lastAdded.pick = teamPick;
  console.log(draft[team]);
};

draft.checkArray = function(team, teamPick) {
// Check to see if draft pick has been filled and remove previous picks
  draft[team] = draft[team].filter(function(ele) {
    return ele.pick !== teamPick;
  });
};

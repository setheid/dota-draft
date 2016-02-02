var draft = {};

draft.pickNums = [
  {draftpick: 'draft-pick1'},
  {draftpick: 'draft-pick2'},
  {draftpick: 'draft-pick3'},
  {draftpick: 'draft-pick4'},
  {draftpick: 'draft-pick5'}
];

draft.getTemplate = function(ctx, next) {
  $.get('/templates/hero_draft.html', function(data, message, xhr) {
    draft.template = Handlebars.compile(data);
    next();
  });
};

draft.renderSingle = function(ele) {
  return draft.template(ele);
};

draft.default = function(ctx, next) {
  // $('header div').empty();
  $('header div').append(
    draft.pickNums.map(function(ele) {
      return draft.renderSingle(ele);
    })
  );
  next();
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

draft.selectHero = function() {
  $('main').on('click', '.hero-image div', function() {
    console.log(this.dataset.hero);
    $('.select').css('background-image', 'url(http://cdn.dota2.com/apps/dota2/images/heroes/' + this.dataset.hero + '_vert.jpg)');
    $('.select p').empty();
  });
};

$(function() {
  draft.chooseSlot();
  draft.selectHero();
});

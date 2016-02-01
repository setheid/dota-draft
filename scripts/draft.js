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

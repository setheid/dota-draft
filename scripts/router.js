page('/',
  draft.getTemplate,
  draft.renderDefault,
  heroes.getTemplate,
  heroes.renderMain
);

page.start();

$(function() {
  draft.chooseSlot();
  selection.selectHero();
});

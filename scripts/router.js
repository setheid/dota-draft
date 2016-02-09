page('/',
  draft.getTemplate,
  draft.renderDefault,
  heroes.getTemplate,
  heroes.renderMain,
  heroes.runFunctions
);

page.start();

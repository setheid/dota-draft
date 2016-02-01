page('/',
  draft.getTemplate,
  draft.default,
  heroes.getTemplate,
  heroes.renderAll
);

page.start();

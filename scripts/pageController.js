draft.getTemplate = function(ctx, next) {
  $.get('/templates/hero_draft.html', function(data, message, xhr) {
    draft.template = Handlebars.compile(data);
    next();
  });
};

heroes.getTemplate = function(ctx, next) {
  $.get('/templates/hero_image.html', function(data, message, xhr) {
    heroes.template = Handlebars.compile(data);
    next();
  });
};

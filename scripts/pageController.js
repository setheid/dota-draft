heroes.renderAll = function() {
  heroes.sortArray(heroes.list);
  heroes.renderHeroes(heroes.list);
};

heroes.getTemplate = function(ctx, next) {
  $.get('/templates/hero_image.html', function(data, message, xhr) {
    heroes.template = Handlebars.compile(data);
    next();
  });
};

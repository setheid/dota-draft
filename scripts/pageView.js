heroes.renderSingle = function(hero) {
  return heroes.template(hero);
};

heroes.renderHeroes = function(heroesList) {
  $('section').empty();
  heroesList.forEach(function(hero) {
    hero.image = heroes.image(hero);
    heroes[hero.hero_class].push(hero);
    $('.' + hero.hero_class).append(
      heroes.renderSingle(hero)
    );
  });
};

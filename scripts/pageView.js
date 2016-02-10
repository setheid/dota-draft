draft.renderDefault = function(ctx, next) {
  $('header div').append(
    draft.pickNums.map(function(ele) {
      return draft.loadSingle(ele);
    })
  );
  next();
};

heroes.renderHeroes = function(heroesList) {
  heroesList.forEach(function(hero) {
    hero.image = heroes.image(hero);
    heroes[hero.hero_class].push(hero);
    $('.' + hero.hero_class).append(
      heroes.loadSingle(hero)
    );
  });
};

heroes.renderMain = function(ctx, next) {
  // heroes.sortArray(heroes.list);
  heroes.renderHeroes(heroes.list);
  next();
};

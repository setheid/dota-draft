heroes.strength = [];
heroes.agility = [];
heroes.intelligence = [];

heroes.sortArray = function(array) {
  var compare = function(a,b) {
    if (a.localized_name < b.localized_name)
      return -1;
    else if (a.localized_name > b.localized_name)
      return 1;
    else
      return 0;
  };
  array.sort(compare);
};

heroes.loadSingle = function(hero) {
  return heroes.template(hero);
};

heroes.image = function(hero) {
  return 'http://cdn.dota2.com/apps/dota2/images/heroes/' + hero['name'] + '_vert.jpg';
};

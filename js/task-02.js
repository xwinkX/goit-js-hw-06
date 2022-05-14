const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const titleEl = document.querySelector('#ingredients');

const elements = ingredients.map(ingredient => {
  const itemEl = document.createElement("li");
  itemEl.classList.add("item");
  itemEl.textContent = ingredient;
  return itemEl;

});

titleEl.append(...elements);



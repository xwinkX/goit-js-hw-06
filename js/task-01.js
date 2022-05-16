const amountcategories = document.querySelectorAll(".item");
const title = document.querySelectorAll("h2");
const amountItems = document.querySelectorAll(".item ul");
console.log(`Number of categories: ${amountcategories.length}`);
for (let i = 0; i < amountcategories.length; i += 1) {
console.log(`Category: ${title[i].textContent}`);
console.log(`Elements: ${amountItems[i].children.length}`);
}

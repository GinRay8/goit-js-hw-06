const categoriesElementsList = document.querySelectorAll('.item');

console.log(`Number of categories: ${categoriesElementsList.length}`);

categoriesElementsList.forEach(item => {
  console.log(`Category: ${item.firstElementChild.textContent}`);
  console.log(`Elements: ${item.lastElementChild.children.length}`);
});
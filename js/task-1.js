const listItemEl = document.querySelectorAll('.categories-item');
console.log(`Number of categories: ${listItemEl.length}`);

listItemEl.forEach(item => {
  console.log(`Category: ${item.querySelector('h2').textContent}`);
  console.log(`Elements: ${item.querySelectorAll('li').length}`);
});

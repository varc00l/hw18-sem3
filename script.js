const categories = document.querySelectorAll('#categories .item');
console.log(`У списку ${categories.length} категорії.`);

categories.forEach(category => {
  const title = category.querySelector('h2').textContent;
  const itemsCount = category.querySelectorAll('ul li').length;
  console.log(`Категорія: ${title}`);
  console.log(`Кількість елементів: ${itemsCount}`);
});

const ingredients = [
    'Картопля',
    'Гриби',
    'Часник',
    'Помідори',
    'Зелень',
    'Приправи',
];
  
const ingredientsList = document.getElementById('ingredients');
  
const ingredientItems = ingredients.map(ingredient => {
    const li = document.createElement('li');
    li.textContent = ingredient;
    return li;
});
  
ingredientsList.append(...ingredientItems);

const images = [
    {
      url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'White and Black Long Fur Cat',
    },
    {
      url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
      url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Group of Horses Running',
    },
];
  
const gallery = document.getElementById('gallery');
  
const galleryItems = images
.map(({ url, alt }) => `<li><img src="${url}" alt="${alt}" width="200"></li>`)
.join('');
  
gallery.insertAdjacentHTML('beforeend', galleryItems);
  
gallery.style.display = 'flex';
gallery.style.gap = '10px';
  
let counterValue = 0;

const valueElement = document.getElementById('value');
const decrementButton = document.querySelector('button[data-action="decrement"]');
const incrementButton = document.querySelector('button[data-action="increment"]');

const updateValue = () => {
  valueElement.textContent = counterValue;
};

const decrement = () => {
  counterValue -= 1;
  updateValue();
};

const increment = () => {
  counterValue += 1;
  updateValue();
};

decrementButton.addEventListener('click', decrement);
incrementButton.addEventListener('click', increment);

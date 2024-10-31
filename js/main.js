const categories = document.querySelector("#categories").children;

console.log(
    `У списку ${categories.length} категорії`
);

for (let category of categories) {
    console.log(
        `Категорія: ${category.firstElementChild.textContent}\nКількість елементів: ${category.lastElementChild.childElementCount}`
    );
}

let ingredients = [
    'Картопля',
    'Гриби',
    'Часник',
    'Помідори',
    'Зелень',
    'Приправи',
];

ingredients = ingredients.map(el => {
    const newLi = document.createElement("li");
    newLi.textContent = el;
    return newLi;
});

ingredients.forEach(el => {
    document.querySelector("#ingredients").appendChild(el);
});

function decrement() {
    const span = document.querySelector("#value");

    span.textContent = Number(span.textContent) - 1;
}

function increment() {
    const span = document.querySelector("#value");

    span.textContent = Number(span.textContent) + 1;
}

document.querySelector("[data-action='decrement']").addEventListener("click", decrement);
document.querySelector("[data-action='increment']").addEventListener("click", increment);

const images = [ 
    { 
     url: 
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', 
     alt: 'White and Black Long Fur Cat', 
    }, 
    { 
     url: 
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', 
     alt: 'Orange and White Koi Fish Near Yellow Koi Fish', 
    }, 
    { 
     url: 
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', 
     alt: 'Group of Horses Running', 
    }, 
]; 
 
const galleryList = document.getElementById('gallery'); 
 
const fillList = images.map((el) => `<li><img src="${el.url}" alt="${el.alt}" width=300 height="200"></li>`).join(""); 
 
galleryList.insertAdjacentHTML("afterbegin",fillList);
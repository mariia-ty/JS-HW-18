//task 1

const cats = document.querySelectorAll("#categories .item");
console.log(`У списку ${cats.length} категорії.`);

cats.forEach((cat) => {
  const ttl = cat.querySelector("h2").textContent;
  const countIt = cat.querySelectorAll("ul li").length;
  console.log(`Категорія: ${ttl}`);
  console.log(`Кількість елементів: ${countIt}`);
});

//task 2

const ingredients = [
  "Картопля",
  "Гриби",
  "Часник",
  "Помідори",
  "Зелень",
  "Приправи",
];

const list = document.querySelector("#ingredients");

ingredients.forEach((ingredient) => {
  const item = document.createElement("li");
  item.textContent = ingredient;
  list.appendChild(item);
});

//task 3

const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const imgList = document.querySelector("#gallery");
const imgCombine = images.map(({url, alt}) => `<li><img src="${url}" alt="${alt} width="400" height="300"</li>`).join(" ");

imgList.insertAdjacentHTML("beforeend", imgCombine);
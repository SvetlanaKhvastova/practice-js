//insertElem - доступ, куда встраивать

// function(array)
// 1 - img
// 2 - a
// 3 - li ==>[li, li, li]

// 4 - ul

// 5 - div

// 6 - h2

// 7 - p

// 8 - span
// 9 - p

// 10 - input

// 11 - article.append(h2, p, div, p, input)

//встраиваем готовый article в insertElem

const images = [
  {
    url:
      "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url:
      "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url:
      "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const insertElem = document.querySelector(".insertElem");

// Первый метод через объекты

// createPost(images, insertElem);
// function createPost(array, place) {
//   function createItems(array) {
//     return array.map((elem) => {
//       const img = document.createElement("img");
//       img.setAttribute("src", elem.url);
//       img.setAttribute("alt", elem.alt);
//       img.setAttribute("width", "300");
//       // console.log(img);

//       const a = document.createElement("a");
//       a.setAttribute("href", "");

//       a.append(img);
//       // console.log(a);

//       const li = document.createElement("li");
//       li.classList.add("list-item");
//       li.append(a);
//       // console.log(li);

//       return li;
//     });
//   }

//   const allItems = createItems(array);

//   // console.log(allItems);

//   const ul = document.createElement("ul");
//   ul.id = "allPosts";
//   ul.append(...allItems);
//   // console.log(ul);

//   const div = document.createElement("div");
//   div.style.backgroundColor = "tomato";
//   div.insertAdjacentElement("afterbegin", ul);
//   // console.log(div);

//   const h2 = document.createElement("h2");
//   h2.textContent = "I love JS";

//   const p1 = document.createElement("p");
//   p1.textContent = "Bla-bla-bla";

//   const span = document.createElement("span");
//   span.textContent = "15.11.2020";

//   const p2 = document.createElement("p");
//   p2.textContent = "Sveta ";
//   p2.append(span);

//   const input = document.createElement("input");
//   input.type = "checbox";

//   const article = document.createElement("article");
//   article.append(h2, p1, div, p2, input);
//   //   console.log(article);

//   place.prepend(article);
// }

// Второй метод
function createInnerPost(array, place) {
  const arrayItems = array.map((obj) => {
    // console.log(obj);
    let item = `<li class="list-item">
    <a href="">
    <img src="${obj.url}" alt="${obj.alt}" width="300">
    </a>
    </li>`;
    return item;
  });
  //   return arrayItems;
  const article = `<article>
  <h2>Привет</h2>
  <p>Lorem</p>
  <div>
  <ul>${arrayItems}</ul>
  </div>
  <p>Sveta <span>"15.11.20"</span></p>
  <input type="checkbox">
  </article>`;

  place.insertAdjacentHTML("afterbegin", article);
  return article;
}
console.log(createInnerPost(images, insertElem));

// Третий метод (оптимизованный)
// createPost(images, insertElem);
// function createPost(array, place) {
//   const allItems = (function createItems(arr) {
//     return arr.map((elem) => {
//       const img = document.createElement("img");
//       img.setAttribute("src", elem.url);
//       img.setAttribute("alt", elem.alt);
//       img.setAttribute("width", "300");
//       // console.log(img);

//       const a = document.createElement("a");
//       a.setAttribute("href", "");

//       a.append(img);
//       // console.log(a);

//       const li = document.createElement("li");
//       li.classList.add("list-item");
//       li.append(a);
//       // console.log(li);

//       return li;
//     });
//   })(array);

//   // console.log(allItems);

//   const ul = document.createElement("ul");
//   ul.id = "allPosts";
//   ul.append(...allItems);
//   // console.log(ul);

//   const div = document.createElement("div");
//   div.style.backgroundColor = "tomato";
//   div.insertAdjacentElement("afterbegin", ul);
//   // console.log(div);

//   const h2 = document.createElement("h2");
//   h2.textContent = "I love JS";

//   const p1 = document.createElement("p");
//   p1.textContent = "Bla-bla-bla";

//   const span = document.createElement("span");
//   span.textContent = "15.11.2020";

//   const p2 = document.createElement("p");
//   p2.textContent = "Sveta ";
//   p2.append(span);

//   const input = document.createElement("input");
//   input.type = "checbox";

//   const article = document.createElement("article");
//   article.append(h2, p1, div, p2, input);
//   console.log(article);

//   place.prepend(article);
// }

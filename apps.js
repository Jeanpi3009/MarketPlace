const mainContainer = document.querySelector("main");
const products = [
  {title:'Ps4',image:'source/producto1.jpg',price: 1000000,id:1},
  {title:'Ps4',image:'source/producto2.jpg',price: 1000000,id:2},
  {title:'Ps4',image:'source/producto3.jpg',price: 1000000,id:3},
  {title:'Ps4',image:'source/producto4.jpg',price: 1000000,id:4},
  {title:'Ps4',image:'source/producto5.jpg',price: 1000000,id:5},
  {title:'Ps4',image:'source/producto6.jpg',price: 1000000,id:6},
  {title:'Ps4',image:'source/producto7.jpg',price: 1000000,id:7},
  {title:'Ps4',image:'source/producto8.jpg',price: 1000000,id:8},
  {title:'Ps4',image:'source/producto9.jpg',price: 1000000,id:9},
  {title:'Ps4',image:'source/producto10.jpg',price: 1000000,id:10}
];
function createCard(title, image, price, id){

  const cardProduct = document.createElement("div");
  const nameProduct = document.createElement("h3");
  const imgProduct = document.createElement("img");
  const priceProduct = document.createElement("p");
  const btnAddToCart = document.createElement("button");

  cardProduct.classList.add("card");
  
  nameProduct.textContent = title;
  
  imgProduct.setAttribute("src",image);
  imgProduct.setAttribute("alt",title);
  imgProduct.classList.add("imgCard");

  priceProduct.textContent = price;
  
  btnAddToCart.textContent = "Add To Cart";
  btnAddToCart.setAttribute("id",'btn-add');
  
  cardProduct.appendChild(nameProduct);
  cardProduct.appendChild(imgProduct);
  cardProduct.appendChild(priceProduct);
  mainContainer.appendChild(cardProduct);
  cardProduct.appendChild(btnAddToCart);
}
function renderCards() {
  products.forEach(product => {
      createCard(product.id, product.name, product.price, product.img);
  });
}

renderCards();

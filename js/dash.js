let products = [
    {
        name: "Tasty Burger",
        price: 5,
        image: "https://www.crushpixel.com/big-static11/preview4/fresh-tasty-burger-694357.jpg" 
    },
    {
        name: "Tasty Pizza",
        price: 7,
        image: "https://i.pinimg.com/originals/3a/2a/21/3a2a21fb4fe2dbd4ce179620e184e902.jpg" 
    },
    {
        name: "Tasty Cake",
        price: 10,
        image: "https://5.imimg.com/data5/NI/IH/QU/ANDROID-90366522/img-20190619-153251-jpg-500x500.jpg" 
    },
]

let main = document.getElementById('products');

for(var i = 0; i < products.length; i++){
    main.innerHTML += `
    <div class="card" style="width: 18rem;">
    <img src="${products[i].image}" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">${products[i].name}</h5>
        <p class="card-text">${products[i].price} Bitcoin</p>
        <a href="#" onclick='addToCart("${products[i].name}","${products[i].price}","${products[i].image}")' class="btn btn-primary">ADD TO CART</a>
    </div>
</div>
    `
}

let allCarts = [];
let carts = localStorage.getItem('carts')

if(carts !== null){
   allCarts = JSON.parse(carts)
   let cart_badge = document.getElementById('cart_badge');
   cart_badge.innerHTML = allCarts.length
}

function addToCart(name,price,image){
    let cart = {
        name,
        price,
        image
    }
    allCarts.push(cart)
    localStorage.setItem('carts',JSON.stringify(allCarts))
    let cart_badge = document.getElementById('cart_badge');
    cart_badge.innerHTML = allCarts.length
}
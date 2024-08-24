

const addToBasket = document.querySelector(".addToBasket")
const productsContentDesc = document.querySelector(".productsBasketInner");
const basket = JSON.parse(localStorage.getItem('basket')) || [];
addToBasket.addEventListener("click", ()=>{
    const products = fetch("https://fakestoreapi.com/products")
    .then(response => response.json())
    .then(data=>{
        console.log(data);
        // const product = data[Math.floor(Math.random()*data.length)];
    })
    
})


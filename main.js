

  

let products = JSON.parse(localStorage.getItem('products')) || [];


function displayProducts() {
  const productList = document.getElementById('productList');
  productList.innerHTML = ''; 

  products.forEach((product, index) => {
    const li = document.createElement('li');
    li.innerHTML = `${product.name} - ${product.price} AZN <button class="deleteProduct" onclick="deleteProduct(${index})">Delete</button>`;
    productList.appendChild(li);
  });

  updateTotals();
}

document.getElementById('addProductBtn').addEventListener('click', () => {
  const name = document.getElementById('productName').value;
  const price = parseFloat(document.getElementById('productPrice').value);

  if (name && price) {
    products.push({ name, price });
    localStorage.setItem('products', JSON.stringify(products));
    displayProducts();
    document.getElementById('productName').value = '';
    document.getElementById('productPrice').value = '';
  }
});


function deleteProduct(index) {
  products.splice(index, 1);
  localStorage.setItem('products', JSON.stringify(products));
  displayProducts();
}


function updateTotals() {
  const productCount = products.length;
  const totalPrice = products.reduce((sum, product) => sum + product.price, 0);

  document.getElementById('productCount').innerText = productCount;
  document.getElementById('totalPrice').innerText = totalPrice.toFixed(2);
}


window.onload = displayProducts;

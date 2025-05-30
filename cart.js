// تحميل السلة وعرضها عند تحميل الصفحة
function loadCart() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const cartItemsContainer = document.getElementById('cart-items');
  cartItemsContainer.innerHTML = ''; // مسح المحتوى القديم

  if (cart.length === 0) {
 
    cartItemsContainer.innerHTML = '<p>Your cart is empty ☹</p>';
    document.getElementById('cart-total').innerText = '0.00 JD';
    return;
  }

  let total = 0;

  cart.forEach(item => {
    total += item.price * item.qty;

    const itemDiv = document.createElement('div');
    itemDiv.className = 'cart-item';
    itemDiv.style = `
      display: flex; 
      align-items: center; 
      gap: 15px; 
      background-color:rgb(228, 213, 197); 
      padding: 15px; 
      border-radius: 10px; 
      box-shadow: 0 4px 6px rgba(0,0,0,0.1); 
      margin-bottom: 15px;
    `;

    itemDiv.innerHTML = `
      <img src="${item.imgSrc}" alt="${item.name}" style="width:80px; height:80px; border-radius:8px;">
      <div style="flex-grow:1;">
        <h4 style="margin:0; color:#5c3d2e;">${item.name}</h4>
        <p>Quantity: ${item.qty}</p>
        <p>Price: <strong>${(item.price * item.qty).toFixed(2)} JD</strong></p>
      </div>
      <button onclick="removeItem('${item.name}')" style="
        background-color: #a9745d; 
        color: white; 
        border: none; 
        padding: 10px 15px; 
        border-radius: 5px; 
        cursor: pointer;
      ">Remove</button>
    `;

    cartItemsContainer.appendChild(itemDiv);
  });


  document.getElementById('cart-total').innerText = total.toFixed(2) + ' JD';
}


function removeItem(name) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart = cart.filter(item => item.name !== name);
  localStorage.setItem('cart', JSON.stringify(cart));
  loadCart();
}


function clearCart() {
  localStorage.removeItem('cart');
  loadCart();
}


function checkout() {
  alert('See you soon.');
}


window.onload=loadCart;
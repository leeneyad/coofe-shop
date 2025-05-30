// إضافة المنتجات إلى سلة التسوق

document.addEventListener('DOMContentLoaded', () => {
 
  const addToCartButtons = document.querySelectorAll('button');

  addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
      const card = button.parentElement;

      const name = card.querySelector('h3, h4').innerText;

      const priceText = card.querySelector('span').innerText;
      const price = parseFloat(priceText.replace('$', ''));

      const imgSrc = card.querySelector('img').src;

      let cart = JSON.parse(localStorage.getItem('cart')) || [];

      const existingProduct = cart.find(item => item.name === name);

      if (existingProduct) {

        existingProduct.qty += 1;
      } else {
 
        cart.push({ name, price, imgSrc, qty: 1 });
      }


      localStorage.setItem('cart', JSON.stringify(cart));


      alert('${name} added to cart');
    });
  });
});
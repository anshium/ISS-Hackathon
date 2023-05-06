// Get all the increment buttons
const incrementButtons = document.querySelectorAll('.increment-btn');

// Loop through the increment buttons and add a click event listener
incrementButtons.forEach((button) => {
  button.addEventListener('click', (event) => {
    // Get the count span for the current button
    const countSpan = event.currentTarget.parentNode.querySelector('.count');
    // Get the current count value and increment it
    let count = parseInt(countSpan.innerText);
    count++;
    // Update the count span with the new count value
    countSpan.innerText = count;
  });
});

// Get all the decrement buttons
const decrementButtons = document.querySelectorAll('.decrement-btn');

// Loop through the decrement buttons and add a click event listener
decrementButtons.forEach((button) => {
  button.addEventListener('click', (event) => {
    // Get the count span for the current button
    const countSpan = event.currentTarget.parentNode.querySelector('.count');
    // Get the current count value and decrement it, but not below 0
    let count = parseInt(countSpan.innerText);
    count = count > 0 ? count - 1 : 0;
    // Update the count span with the new count value
    countSpan.innerText = count;
  });
});





window.addEventListener('', changeBlock);

function changeBlock() {
  let width = window.width;
  console.log(width)
  let nav_imgs = document.getElementsByClassName("icon_like");
  if (width > 600) {
    for (var i = 0; i < nav_imgs.length; i++) {
      nav_imgs[i].setAttribute("class", "no_display");
    }
  } else {
    for (var i = 0; i < nav_imgs.length; i++) {
      nav_imgs[i].setAttribute("class", "please_display");
    }
  }
}


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~



const menuItems = document.querySelectorAll(".menu .tile");
const searchInput = document.querySelector("#search-input");
const cart = document.querySelector(".cart");
const cartList = document.querySelector(".cart-list");
const cartItems = {};

// Add an event listener to the search input
searchInput.addEventListener("input", (event) => {
  const query = event.target.value.toLowerCase().trim();

  // Filter the menu items based on the query
  const filteredItems = Array.from(menuItems).filter((item) => {
    const title = item.querySelector("h2").textContent.toLowerCase();
    const price = item.querySelector("p").textContent.toLowerCase();

    return title.includes(query) || price.includes(query);
  });

  // Hide the menu items that do not match the query
  menuItems.forEach((item) => {
    if (!filteredItems.includes(item)) {
      item.classList.add("hidden");
    } else {
      item.classList.remove("hidden");
    }
  });
});


menuItems.forEach((item) => {
  const addButton = item.querySelector(".add-btn");
  const count = item.querySelector(".count");

  addButton.addEventListener("click", () => {
    if (parseInt(count.textContent) > 0) {
      const name = item.querySelector("h2").textContent;
      const price = item.querySelector("p").textContent;
      const quantity = parseInt(count.textContent);

      if (cartItems[name]) {
        // If the item is already in the cart, update the quantity
        const currentQuantity = cartItems[name].quantity;
        const newQuantity = currentQuantity + quantity;

        if (newQuantity < currentQuantity) {
          // If the new quantity is less than the current quantity, update the cart with the lesser amount
          cartItems[name].quantity = newQuantity;
          cartItems[name].element.querySelector(".item-price").textContent = `${price} x ${newQuantity}`;
        } else {
          // Otherwise, update the cart with the new quantity
          cartItems[name].quantity = quantity;
          cartItems[name].element.querySelector(".item-price").textContent = `${price} x ${cartItems[name].quantity}`;
        }
      } else {
        // Otherwise, add the item to the cart
        const cartItem = document.createElement("div");
        cartItem.classList.add("cart-item");
        cartItem.innerHTML = `
          <p class="item-name">${name}</p>
          <p class="item-price">${price} x ${quantity}</p>
        `;
        cartList.appendChild(cartItem);

        cartItems[name] = {
          quantity,
          element: cartItem,
        };
      }

     
    } else {
      // If the new quantity is 0, remove the item from the cart list
      const name = item.querySelector("h2").textContent;
      if (cartItems[name]) {
        cartList.removeChild(cartItems[name].element);
        delete cartItems[name];
      }
    }
  });
});

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

function changeBlock(){
	let width = window.width;
	console.log(width)
	let nav_imgs = document.getElementsByClassName("icon_like");
	if(width > 600){
		for(var i = 0; i < nav_imgs.length; i++){
			nav_imgs[i].setAttribute("class", "no_display");
		}
	} else{
		for(var i = 0; i < nav_imgs.length; i++){
			nav_imgs[i].setAttribute("class", "please_display");
		}
	}
}



const menuItems = document.querySelectorAll(".menu .tile");

// Get the search input
const searchInput = document.querySelector("#search-input");

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




function updateMenu(itemName, quantity) {
  var $menu = $("#menu");
  var $item = $("<div>").text(itemName + " (" + quantity + ")");
  $menu.append($item);
}

$("#add-button").click(function() {
  var itemName = $("#item-name").val();
  var quantity = parseInt($("#counter").val());

  if (quantity > 0) {
    // Update the menu with the item name and quantity
    updateMenu(itemName, quantity);

    // Reset the counter to 0
    $("#counter").val(0);
  }
});

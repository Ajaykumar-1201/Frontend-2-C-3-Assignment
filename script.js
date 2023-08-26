// Function to get the menu from JSON
async function getMenu() {
  try {
    const response = await fetch(
      "https://ajaykumar-1201.github.io/json-contest-3/food.json"
    );
    const menuItems = await response.json();

    // Display menu items on the website (you should update your HTML for this)
    displayMenu(menuItems);
  } catch (error) {
    console.error("Error fetching menu:", error);
  }
}

// Function to simulate taking an order
function takeOrder() {
  return new Promise((resolve) => {
    setTimeout(() => {
      // Choose 3 random burgers and create an order object
      const order = {
        items: ["Burger 1", "Burger 2", "Burger 3"],
      };
      resolve(order);
    }, 2500);
  });
}

// Function to simulate order preparation
function orderPrep(order) {
  return new Promise((resolve) => {
    setTimeout(() => {
      // Mark the order as prepared and unpaid
      order.order_status = true;
      order.paid = false;
      resolve(order);
    }, 1500);
  });
}

// Function to simulate paying for the order
function payOrder(order) {
  return new Promise((resolve) => {
    setTimeout(() => {
      // Mark the order as paid
      order.paid = true;
      resolve(order);
    }, 1000);
  });
}

// Function to display a thank you message
function thankYouFnc() {
  alert("Thank you for eating with us today!");
}

// Function to display menu items
function displayMenu(menuItems) {
  // Get the menu-container div
  const menuContainer = document.getElementById("menu-container");

  // Create a card-container div to hold menu items
  const cardContainer = document.createElement("div");
  cardContainer.className = "card-container";

  // Loop through the menu items and create cards for each item
  menuItems.forEach((menuItem) => {
    const card = document.createElement("div");
    card.className = "card";

    const image = document.createElement("img");
    image.className = "image";
    image.src = menuItem.imgSrc;

    const cardBottom = document.createElement("div");
    cardBottom.className = "card-bottom";

    const cardBottom1 = document.createElement("div");

    const cardName = document.createElement("p");
    cardName.className = "card-name";
    cardName.textContent = `${menuItem.name}`;

    const price = document.createElement("p");
    price.className = "price";
    price.textContent = `$${menuItem.price}/-`;

    const plus = document.createElement("div");

    //   const plusSvg = document.createElement('svg');
    //   plusSvg.className = 'plus';
    //   plusSvg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    //   plusSvg.setAttribute('width', '33');
    //   plusSvg.setAttribute('height', '33');
    //   plusSvg.setAttribute('viewBox', '0 0 33 33');
    //   plusSvg.setAttribute('fill', 'none');

    //   const path1 = document.createElement('path');
    //   path1.setAttribute('d', 'M16.5186 7.27173V25.688');
    //   path1.setAttribute('stroke', '#878787');
    //   path1.setAttribute('stroke-width', '2');
    //   path1.setAttribute('stroke-linecap', 'round');
    //   path1.setAttribute('stroke-linejoin', 'round');

    //   const path2 = document.createElement('path');
    //   path2.setAttribute('d', 'M7.3103 16.4799H25.7266');
    //   path2.setAttribute('stroke', '#878787');
    //   path2.setAttribute('stroke-width', '2');
    //   path2.setAttribute('stroke-linecap', 'round');
    //   path2.setAttribute('stroke-linejoin', 'round');

    const plusimg = document.createElement("img");
    plusimg.className = "plus";
    plusimg.setAttribute("src", "./assets/plus (1) 1.png");

    // Append elements to create the card
    //   plusSvg.appendChild(path1);
    //   plusSvg.appendChild(path2);
    cardBottom1.appendChild(cardName);
    cardBottom1.appendChild(price);
    plus.appendChild(plusimg);
    cardBottom.appendChild(cardBottom1);
    cardBottom.appendChild(plus);
    card.appendChild(image);
    card.appendChild(cardBottom);
    cardContainer.appendChild(card);
  });

  // Append the card container to the menu container
  menuContainer.appendChild(cardContainer);
}

// Function to handle the entire process
async function restaurantProcess() {
  try {
    // Step 1: Get the menu
    await getMenu();

    // Step 2: Take the order
    const order = await takeOrder();

    // Step 3: Prepare the order
    const preparedOrder = await orderPrep(order);

    // Step 4: Pay for the order
    const paidOrder = await payOrder(preparedOrder);

    // Step 5: Display thank you message
    thankYouFnc();
  } catch (error) {
    console.error("Error in restaurant process:", error);
  }
}

// Call the restaurant process when the page loads
window.onload = restaurantProcess;

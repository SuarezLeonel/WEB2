function updateQuantityDisplay() {
    quantityDisplay.textContent = quantity;
}

// Function to update price based on selected currency
function updatePrice() {
    const priceDisplay = document.getElementById('price-display');
    const selectedCurrency = document.querySelector('input[name="boton"]:checked').value;

    if (selectedCurrency === 'USD') {
        priceDisplay.textContent = '$10';
    } else if (selectedCurrency === 'ARS') {
        priceDisplay.textContent = '$7500';
    }
}

// Add event listeners to radio buttons
document.querySelectorAll('input[name="boton"]').forEach((radio) => {
    radio.addEventListener('change', updatePrice);
});

// Initial update
updatePrice();

const decreaseBtn = document.getElementById('decrease-btn');
const increaseBtn = document.getElementById('increase-btn');
const quantityDisplay = document.getElementById('quantity-display');

let quantity = 1;

decreaseBtn.addEventListener('click', () => {
    if (quantity > 1) {
        quantity--;
        updateQuantityDisplay();
    }
});

increaseBtn.addEventListener('click', () => {
    if (quantity < 10) {
        quantity++;
        updateQuantityDisplay();
    }
});
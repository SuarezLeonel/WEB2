const decreaseBtn = document.getElementById('decrease-btn');
const increaseBtn = document.getElementById('increase-btn');
const quantityDisplay = document.getElementById('quantity-display');

let quantity = 1; // Inicializamos la cantidad en 1

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

function updateQuantityDisplay() {
    quantityDisplay.textContent = quantity;
}

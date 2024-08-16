const colors = ['#303030', '#01662c', '#aa662b', '#274569', '#b23030', '#3a0000'];

function changeHeaderFooterColor() {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.querySelector('header').style.backgroundColor = randomColor;
    document.querySelector('footer').style.backgroundColor = randomColor;
    
    const h4Elements = document.querySelectorAll('h4');
    h4Elements.forEach(h4 => {
        h4.style.color = randomColor;
    });
}

window.onload = changeHeaderFooterColor;

function updateQuantityDisplay() {
    quantityDisplay.textContent = quantity;
}

// Function to update price based on selected currency
function updatePrice() {
    const selectedCurrency = document.querySelector('input[name="boton"]:checked').value;

    // Aquí agregas todos los IDs que quieras actualizar
    const idsToUpdate = ['price-display-1', 'price-display-2', 'price-display-3','price-display-4', 'price-display-5', 'price-display-6'];

    idsToUpdate.forEach(id => {
        const priceDisplay = document.getElementById(id);
        if (priceDisplay) {
            if (selectedCurrency === 'USD') {
                priceDisplay.innerHTML = '<span>$</span>10';
            } else if (selectedCurrency === 'ARS') {
                priceDisplay.innerHTML = '<span>$</span>7500';
            }
        }
    });
}



// Add event listeners to radio buttons
document.querySelectorAll('input[name="boton"]').forEach((radio) => {
    radio.addEventListener('change', updatePrice);
});

// Initial update
updatePrice();

//#303030 Americano
//#01662c Brasil
//#aa662b Colombia
//#274569 Costa Rica
//#b23030 Expresso
//#3a0000 Latte
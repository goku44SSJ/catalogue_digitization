// script.js

let productEntries = [];
let selectedProduct = {};

function openPopup() {
    document.getElementById('popup').style.display = 'block';
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

function showForm() {
    const category = document.getElementById('category').value;
    let formHTML = '';

    switch (category) {
        case 'electronics':
            formHTML = `
                <h2>Electronic Category Form - Slide 1</h2>
                <label for="productName">Product Name:</label>
                <input type="text" id="productName" name="productName"><br>

                <label for="productCompany">Product Company:</label>
                <input type="text" id="productCompany" name="productCompany"><br>

                <label for="productVariant">Product Variant:</label>
                <input type="text" id="productVariant" name="productVariant"><br>

                <label for="subVariants">Sub Variants:</label>
                <input type="text" id="subVariants" name="subVariants"><br>

                <label for="colors">Colors:</label>
                <input type="text" id="colors" name="colors"><br>

                <label for="wattageUsage">Wattage Usage:</label>
                <input type="number" id="wattageUsage" name="wattageUsage"><br>

                <button class="next-button" onclick="nextSlide()">Next</button>
            `;
            break;
        case 'lifestyle':
            formHTML = `
                <h2>Lifestyle Category Form</h2>
                <!-- Add lifestyle category form fields here -->
            `;
            break;
        case 'groceries':
            formHTML = `
                <h2>Groceries Category Form</h2>
                <!-- Add groceries category form fields here -->
            `;
            break;
        case 'materials':
            formHTML = `
                <h2>Materials Category Form</h2>
                <!-- Add materials category form fields here -->
            `;
            break;
        default:
            break;
    }

    document.getElementById('form-container').innerHTML = formHTML;
}

function nextSlide() {
    // Get values from the first slide
    selectedProduct.productName = document.getElementById('productName').value;
    selectedProduct.productCompany = document.getElementById('productCompany').value;
    selectedProduct.productVariant = document.getElementById('productVariant').value;
    selectedProduct.subVariants = document.getElementById('subVariants').value;
    selectedProduct.colors = document.getElementById('colors').value;
    selectedProduct.wattageUsage = document.getElementById('wattageUsage').value;

    const slide1 = document.getElementById('slide-1');
    slide1.style.display = 'none';
    const slide2 = document.getElementById('slide-2');
    slide2.style.display = 'block';

    // Display selected choices from the first slide as tags
    displaySelectedChoices();
}

function displaySelectedChoices() {
    const tagsContainer = document.getElementById('selected-choices');

    const tagsHTML = `
        <p>Product Name: ${selectedProduct.productName}</p>
        <p>Product Company: ${selectedProduct.productCompany}</p>
        <p>Product Variant: ${selectedProduct.productVariant}</p>
        <p>Sub Variants: ${selectedProduct.subVariants}</p>
        <p>Colors: ${selectedProduct.colors}</p>
        <p>Wattage Usage: ${selectedProduct.wattageUsage}</p>
    `;

    tagsContainer.innerHTML = tagsHTML;
}

function submitForm() {
    // Get values from the second slide
    const productSubVariantName = document.getElementById('productSubVariantName').value;
    const productDetails = document.getElementById('productDetails').value;

    // Add values to the selectedProduct object
    selectedProduct.productSubVariantName = productSubVariantName;
    selectedProduct.productDetails = productDetails;

    // Add selected product to productEntries array
    productEntries.push(selectedProduct);

    // Display product card on the main page body
    displayProductCard(selectedProduct);

    // Reset selectedProduct object and form fields
    selectedProduct = {};
    clearFormFields();
}

function displayProductCard(product) {
    // Create product card element
    const card = document.createElement('div');
    card.classList.add('product-card');
    card.innerHTML = `
        <p>Product Name: ${product.productName}</p>
        <p>Product Company: ${product.productCompany}</p>
        <p>Product Variant: ${product.productVariant}</p>
        <p>Sub Variants: ${product.subVariants}</p>
        <p>Colors: ${product.colors}</p>
        <p>Wattage Usage: ${product.wattageUsage}</p>
        <p>Product Sub Variant Name: ${product.productSubVariantName}</p>
        <p>Product Details: ${product.productDetails}</p>
    `;

    // Append product card to the main page body
    document.getElementById('product-cards').appendChild(card);
}

function clearFormFields() {
    document.getElementById('productSubVariantName').value = '';
    document.getElementById('productDetails').value = '';
}

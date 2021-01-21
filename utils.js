export function renderProduct(product) {
    /*
Product has:
    id
    name,
    image,
    description,
    category,
    price
*/
    const li = document.createElement('li');
    li.classList.add('item');

    const h3 = document.createElement('h3');
    h3.classList.add('name');
    h3.textContent = product.name;
    li.append(h3);

    const img = document.createElement('img');
    img.classList.add('product-image');
    img.src = `../assets/pictures/${product.image}`;
    img.alt = 'A photo of a purple and white RPG style dice set.';
    li.append(img);

    const p = document.createElement('p');
    p.classList.add('description');
    p.textContent = product.description;
    li.append(p);

    const pPrice = document.createElement('p');
    pPrice.classList.add('price');
    pPrice.textContent = `$${product.price}`;
    li.append(pPrice);

    const button = document.createElement('button');
    button.value = product.id;
    button.textContent = 'Add to cart';
    li.append(button);


    return li;
}

export function findById(id, array) {
    // iterate through the array
    for (let item of array) {
        // compare our ID to the ID of the item
        if (item.id === id) {
            // If they match, return that item
            return item;
        }
    }
}

export function calcItemTotal(cartItem, product) {
    return cartItem.quantity * product.price;

}

export function renderLineItems(cartItem, product) {
    const quantity = cartItem.quantity;

    const tr = document.createElement('tr');
    tr.classList.add('cart-item');

    const nameTd = document.createElement('td');
    const quantityTd = document.createElement('td');
    const priceTd = document.createElement('td');

    nameTd.textContent = product.name;
    quantityTd.textContent = quantity;
    priceTd.textContent = `$${calcItemTotal(cartItem, product).toFixed(2)}`;

    tr.append(nameTd, quantityTd, priceTd);

    return tr;
}



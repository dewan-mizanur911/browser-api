const displayLocalStorageCart = () => {
    const cart = getCart();
    for (const name in cart) {
        displayItem(name);
    }
}

const addItem = () => {
    const input = document.getElementById('input');
    const value = input.value;
    if (!value) {
        return;
    }

    // display item 
    displayItem(value);

    addProductToCart(value);

    input.value = '';
}

const displayItem = name => {
    const ul = document.getElementById('ul');
    const li = document.createElement('li');
    li.innerText = name;
    ul.appendChild(li);
}

const getCart = () => {
    const cart = localStorage.getItem('cart');
    let cartObject;
    if (cart) {
        cartObject = JSON.parse(cart);
    }
    else {
        cartObject = {};
    }
    return cartObject;
}

const addProductToCart = name => {
    const cart = getCart();
    if (cart[name]) {
        cart[name] = cart[name] + 1;
    }
    else {
        cart[name] = 1;
    }
    
    // console.log(cart);
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified);
}

const purchase = () => {
    document.getElementById('ul').textContent = '';
    localStorage.removeItem('cart');
}
displayLocalStorageCart();
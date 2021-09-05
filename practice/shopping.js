const displayLocalStorageCart = () => {
    const cart = getCart();
    for (const name in cart) {
        displayItems(name);
    }
}

const addItem = () => {
    const input = document.getElementById('input');
    const value = input.value;
    if (value) {
       //display items
    displayItems(value);

    setLocalStorageCart(value);

    input.value = '';
    }

}
const displayItems = name => {
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

const setLocalStorageCart = name => {
    const cart = getCart();
    console.log(cart[name]);
    if (cart[name]) {
        cart[name] += 1;
    }
    else {
        cart[name] = 1;
    }
    const stringified = JSON.stringify(cart);
    localStorage.setItem('cart', stringified);
}
displayLocalStorageCart();
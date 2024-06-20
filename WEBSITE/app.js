var MenuItems = document.getElementById("MenuItems");
MenuItems.style.maxHeight = "0px";
function menutoggle(){
    if (MenuItems.style.maxHeight == "0px")
    {
        MenuItems.style.maxHeight = "200px"
    }
    else
    {
        MenuItems.style.maxHeight = "0px"
    }
}

let carticon = document.querySelector('.cart-icon');
let closeCart = document.querySelector('.Close');
let body = document.querySelector('body');
let listProductHTML = document.querySelector('.listProduct');
let listCartHTML = document.querySelector('.listCart');
let carticonSpan = document.querySelector('.cart-icon span');


let listProducts = [];
let carts = [];

carticon.addEventListener('click', () => {
    body.classList.toggle('showCart')
})
closeCart.addEventListener('click', () => {
    body.classList.toggle('showCart')
})

const addDataToHTML = () => {
    listProductHTML.innerHTML = '';
    if(listProducts.length > 0) {
        listProducts.forEach(product => {
            let newProduct = document.createElement('div');
            newProduct.classList.add('item');
            newProduct.dataset.id = product.id;
            newProduct.innerHTML = `
                <img src="${product.image}">
                <p>${product.price}</p>
                <button class="addCart">
                    ADD TO cart
                </button>
             `;
            listProductHTML.appendChild(newProduct);
        })
    }
}

listProductHTML.addEventListener('click', (event) => {
    let positionClick = event.target;
    if(positionClick.classList.contains('addCart')){
        let product_id = positionClick.parentElement.dataset.id;
        addToCart(product_id);
    }
})

const addToCart = (product_id) => {
    let positionThisProductInCart = carts.findIndex((value) => value.product_id == product_id);
    if(carts.length <= 0){
        carts = [{
            product_id: product_id,
        quantity: 1
        }]
    }else if(positionThisProductInCart < 0){ 
        carts.push({
            product_id: product_id,
            quantity: 1
        });
    }else{
        carts[positionThisProductInCart].quantity = carts[positionThisProductInCart].quantity + 1;
    }
    addCartToHTML();
}

const addCartToHTML = () => {
    listCartHTML.innerHTML = '';
    if (carts.length > 0){
        carts.forEach(cart => {
            let newCart = document.createElement('div');
            newCart.classList.add('item');
            newCart.innerHTML =`
             <div class="item">
                <div class="image">
                    <img src="images/elite xbox controller.png" >
                </div>
                <div class="name">
                    NAME
                </div>
                <div class="totalPrice">
                    R4500
                </div>
                <div class="quantity">
                    <span class="minus"><</span>
                    <span>1</span>
                    <span class="plus">></span>
                </div>
            </div>`;
            listCartHTML.appendChild(newCart);
        })
    }
}
const initApp = () => {

    fetch('product.JSON')
    .then(response => response.json())
    .then(data => {
        listProducts = data;
        addDataToHTML();
    })
}
initApp();

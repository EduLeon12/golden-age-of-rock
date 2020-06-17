// @ts-check
// SHOPPING CART
function ShoppingCart() {
    // { id: numero de discos en el carrito }
    let cart = {};

    this.addOne = function(id) {
        if (cart[id])
            cart[id] += 1;
        else
            cart[id] = 1;
        
        console.log("Producto con id:", id, ". Tienes un total de: ", cart[id], "de estos productos en el carrito");
        return cart[id];
    }

    this.removeOne = function(id) {
        if (cart[id] && cart[id] >= 1) {
            cart[id] -= 1;
            console.log("Producto con id:", id, "removido del carrito con un total de", cart[id], "restantes");
        }
        return cart[id];
    }

    this.get = function(){
        return cart;
    }

    this.getTotalAmount = function(){
        let total = 0;
        cart.forEach(currentProduct => {
            total += currentProduct.price
        })
        return total;
    }

}

function Product(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
}

var myShoppingCart = new ShoppingCart();

// CONVERTIDOR
const DOLLARPRICE = 1;
var converToPesos = amount => (amount * DOLLARPRICE);

function calculateTaxes (amount, tax) {
    var amountTax = 0;
    switch(tax){
        case 'IVA':
         amountTax = amount * 1.21;
         break;
        case 'PAIS':
         amountTax = amount * 1.30;
         break;
        default:
         amountTax = amount;
         break;    
    }
    return amountTax;
}

var localPrice = converToPesos();

const catalogoEl = document.getElementById('catalogo');

db.get().forEach(item => {
    const productoEl = document.createElement("div");
    productoEl.className = "w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col";

    // image
    const discEl = document.createElement("img");
    discEl.src = item.src;
    
    // title
    const titleEl = document.createElement("div");
    titleEl.className = "flex justify-between items-center py-2";

    const nameEl = document.createElement("span");
    nameEl.textContent = item.name;

    // Add 
    const addButtonEl = document.createElement("button");
    // total
    const totalEl = document.createElement("span");
    totalEl.id = "total-" + item.id;
    totalEl.textContent = "0";
    totalEl.className = "hidden";

    // remove
    const removeButtonEl = document.createElement("button");
    removeButtonEl.className = "hidden";

    addButtonEl.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" class="fill-current text-yellow-900">
            <path class="heroicon-ui" d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm1-9h2a1 1 0 0 1 0 2h-2v2a1 1 0 0 1-2 0v-2H9a1 1 0 0 1 0-2h2V9a1 1 0 0 1 2 0v2z"/>
        </svg>
    `
    addButtonEl.addEventListener('click', () => {
        const newTotal = myShoppingCart.addOne(item.id);
        totalEl.textContent = newTotal;
        if (newTotal === 1) {
            totalEl.className = "visible px-2";
            removeButtonEl.className = "visible";
        }
    });

    removeButtonEl.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" class="fill-current text-red-900" style="transform: rotate(45deg);">
            <path class="heroicon-ui" d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm1-9h2a1 1 0 0 1 0 2h-2v2a1 1 0 0 1-2 0v-2H9a1 1 0 0 1 0-2h2V9a1 1 0 0 1 2 0v2z"/>
        </svg>
    `
    removeButtonEl.addEventListener('click', () => {
        const newTotal = myShoppingCart.removeOne(item.id);
        totalEl.textContent = newTotal;
        if (newTotal === 0) {
            totalEl.className = "hidden";
            removeButtonEl.className = "hidden";
        }
    });

    titleEl.appendChild(nameEl);
    titleEl.appendChild(removeButtonEl);
    titleEl.appendChild(totalEl);
    titleEl.appendChild(addButtonEl);

    // precio
    const priceEl = document.createElement("span");
    priceEl.textContent = "$" + item.price.toFixed(2);

    productoEl.appendChild(discEl);
    productoEl.appendChild(titleEl);
    productoEl.appendChild(priceEl);

    catalogoEl.appendChild(productoEl);
})

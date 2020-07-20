// @ts-check

// SHOPPING CART

function ShoppingCart() {
    // { id: numero de discos en el carrito }
     let cart = JSON.parse(localStorage.getItem('cart'));

    if (!cart) {
        cart = {}
        localStorage.setItem('cart', JSON.stringify({}))
    }

    this.addOne = function(id) {
        if (cart[id])
            cart[id] += 1;
        else 
            cart[id] = 1;

        localStorage.setItem('cart', JSON.stringify(cart))
        console.log("Producto con id:", id, ". Tienes un total de: ", cart[id], "de estos productos en el carrito");
        console.log("Total: $", this.getTotalAmount())
        return cart[id];
    }

    this.removeOne = function(id) {
        if (cart[id] && cart[id] >= 1) {
            cart[id] -= 1;
            localStorage.setItem('cart', JSON.stringify(cart))
            console.log("Producto con id:", id, "removido del carrito con un total de", cart[id], "restantes de este producto");
            console.log("Total: $", this.getTotalAmount())
        }
        return cart[id];
    }   

    this.get = function(){
        return cart;
    }

    this.getTotalById = function(id) {
        return cart[id] || 0
    }

    this.getTotalAmount = function(){
        let total = 0;
        Object.keys(cart).forEach(productId => {
            const price = db.getById(productId).price
            const totalAmount = cart[productId]
            total += price * totalAmount
        })
        return total;    
    }
    this.getTotalProducts = function(){
        let total = 0;
        Object.keys(cart).forEach(productId => {
            total += cart[productId]
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



console.log(myShoppingCart.getTotalProducts());
console.log(myShoppingCart.getTotalAmount());
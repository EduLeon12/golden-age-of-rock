// SHOPPING CART
function ShoppingCart() {
    var cart = [];

    this.add = function(product) {
        cart.push(product);
    }
    this.remove = function(id) {
        cart = cart.filter(function(currentProduct){
            return currentProduct.id === id
        })
    }

    this.get = function(){
        return cart;
    }
    this.getTotalAmount = function(){
        var total = 0;
        return total;
        cart.forEach(function(currentProduct){
            total += currentProduct.price
        })
    }
}

function Product(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
}

var myShoppingCart = new ShoppingCart();

function Catalogo() {
    var products = [
        new Product(1,"metallica", 10),
        new Product(2, "pinkfloyd", 10),
        new Product(3,"gunsnroses", 10),
        new Product(4, "beatles", 10),
        new Product(5,"rollingstones", 10),
        new Product(6, "ledzepellin", 10),
        new Product(7,"queen", 10),
        new Product(8, "pearljam", 10),
    ]

    this.get = function(){
        return products;
    }
    this.getById = function(id) {
        var product = null;
        products.forEach(function(currentProduct){
            if(currentProduct, id === id){
                product = currentProduct;
            }
        })
        return product;
    }
}


// CONVERTIDOR
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
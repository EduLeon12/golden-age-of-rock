//Catalog
const catalogoEl = document.getElementById('catalogo');
db.get().forEach(item => {
    const productoEl = document.createElement("div");
    productoEl.className = "bg-gray-900  max-w-lg p-6 flex flex-col m-auto ";
    
    const audioEl = document.createElement('audio');
    const sourceEl = document.createElement('source');
    sourceEl.src = item.music;
    sourceEl.type = "audio/mp3";

    // image
    const discEl = document.createElement("img");
    discEl.className = "records";
    discEl.src = item.src;
    discEl.onmouseover = () => audioEl.play()
    discEl.onmouseout = () => audioEl.pause()
        
    // title
    const titleEl = document.createElement("div");
    titleEl.className = "flex justify-between items-center py-2";

    const nameEl = document.createElement("span");
    nameEl.textContent = item.name;
  
    const addButtonEl = document.createElement("button");
    addButtonEl.className = "shadow bg-gray-600 text-base w-1/2 ml-auto mr-auto items-center text-center hover:bg-gray-800 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded "
    addButtonEl.id = "addCartbtn";
    addButtonEl.textContent = "Add to Cart"
    
    addButtonEl.addEventListener('click', () => {
        const newTotal = myShoppingCart.addOne(item.id);
        $("#nbmCartItems").html(function nbmitems(){
            const items = myShoppingCart.getTotalProducts();
            return items
        })
       addButtonEl.innerHTML = "Album added to Cart";
       addButtonEl.className = "shadow bg-gray-600 text-base  ml-auto mr-auto items-center text-center hover:bg-gray-800 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded w-auto ";    
       $("#miniCarttotalprice").text( 
        function totalprice(){
        const price = myShoppingCart.getTotalAmount();
        return price
        })
        $("#checkout").removeClass("invisible");
        $("#miniCarttotalprice").removeClass("invisible");
        $("#totaltext").removeClass("invisible");
        $("#dolarSign").removeClass("invisible");
        $("#emptyCartbtn").removeClass("invisible");
        $("#emptyCart").addClass("invisible");
        $("#miniCartText").addClass("invisible");
       miniCartbuildup()
    });
    titleEl.appendChild(nameEl);
    
    // precio
    const priceEl = document.createElement("span");
    priceEl.textContent = "$" + item.price.toFixed(2);

    productoEl.appendChild(discEl);
    productoEl.appendChild(titleEl);
    titleEl.appendChild(priceEl);
    productoEl.appendChild(addButtonEl);
    audioEl.appendChild(sourceEl);
    catalogoEl.appendChild(productoEl);
})
  

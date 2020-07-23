

//Catalog

const catalogoEl = document.getElementById('catalogo');

db.get().forEach(item => {
    const productoEl = document.createElement("div");
    productoEl.className = "bg-gray-900 w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col ";
    
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
    
    addButtonEl.innerHTML = `

    <button id="addCartbtn"  class="addCartbutton shadow bg-gray-600 hover:bg-gray-800 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button" >
     Add to Cart
   </button>`
   
    addButtonEl.addEventListener('click', () => {
        const newTotal = myShoppingCart.addOne(item.id);
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



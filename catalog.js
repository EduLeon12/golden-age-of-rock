// @ts-check

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

    
    const cartControlsEl = document.createElement("div");
    cartControlsEl.className = "flex items-center justify-center";

    // Add 
    const addButtonEl = document.createElement("button");
    
    // total
    const totalEl = document.createElement("span");
    const total = myShoppingCart.getTotalById(item.id);
    totalEl.id = "total-" + item.id;
    totalEl.textContent = total;

    // remove
    const removeButtonEl = document.createElement("button");
    
    if (total > 0) {
        removeButtonEl.className = "block"        
        totalEl.className = "block px-2";
    }
    else {
        removeButtonEl.className = "hidden";
        totalEl.className = "hidden";
    }

    addButtonEl.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" class="fill-current text-yellow-900">
            <path class="heroicon-ui" d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm1-9h2a1 1 0 0 1 0 2h-2v2a1
             1 0 0 1-2 0v-2H9a1 1 0 0 1 0-2h2V9a1 1 0 0 1 2 0v2z"/>
        </svg>`

    addButtonEl.addEventListener('click', () => {
        const newTotal = myShoppingCart.addOne(item.id);
        totalEl.textContent = newTotal;
        if (newTotal === 1) {
            totalEl.className = "block px-2";
            removeButtonEl.className = "block";
   
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
    
    cartControlsEl.appendChild(removeButtonEl);
    cartControlsEl.appendChild(totalEl);
    cartControlsEl.appendChild(addButtonEl);

    titleEl.appendChild(nameEl);
    titleEl.appendChild(cartControlsEl);

    // precio
    const priceEl = document.createElement("span");
    priceEl.textContent = "$" + item.price.toFixed(2);

    productoEl.appendChild(discEl);
    productoEl.appendChild(titleEl);
    productoEl.appendChild(priceEl);
    audioEl.appendChild(sourceEl);
    catalogoEl.appendChild(productoEl);
})

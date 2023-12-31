// list of all items
let shop = document.getElementById('shop');
let basket = JSON.parse(localStorage.getItem("data")) || [];

const search = () =>{
    const searchbox = document.getElementById("search-item").value.toUpperCase();
    const storeItems = document.getElementById("shop");
    
    const product = document.querySelectorAll(".item");
    const pname = storeItems.getElementsByTagName("h3");
    

    for (var i = 0; i < pname.length; i++) {
        let match = product[i].getElementsByTagName('h3')[0];
        

        if (match) {
            let textvalue = match.textContent || match.innerHTML;
            if (textvalue.toUpperCase().indexOf(searchbox) > -1){
                product[i].style.display = "";
            } else {
                product[i].style.display = "none";
            }
        }

    }

};

let generateShop =()=>{
    // var x will target data from above one by one
    return (shop.innerHTML= shopItemsData
        .map((x)=> {
            let {id, name, img} = x;
            let search = basket.find((x) => x.id == id) || [];
        return `
        <div id=product-id-${id} class="item">
                <img width="220" src="${img}" alt="">
                <div class="details">
                    <h3>${name}</h3>
                    <div class="price-quantity">
                        <div class="buttons">
                            <i onclick="decrement(${id})" class="bi bi-dash-circle-fill"></i>
                            <div id=${id} class="quantity">
                            ${search.item === undefined? 0: search.item}
                            </div>
                            <i onclick="increment(${id})" class="bi bi-plus-circle-fill"></i>
                        </div>
                    </div>
                </div>
            </div>
        `
    }).join(""))
};

generateShop();

let increment = (id)=>{
    let selectedItem = id;
    let search = basket.find((x)=> x.id === selectedItem.id);
    if (search === undefined){
        basket.push({
            id: selectedItem.id,
            item: 1,
        });
    } else {
        search.item += 1;
    }

    

    // console.log(basket);
    update(selectedItem.id);
    localStorage.setItem("data", JSON.stringify(basket));
};

let decrement = (id)=>{
    let selectedItem = id;
    let search = basket.find((x)=> x.id === selectedItem.id);

    if (search === undefined) return;
    else if (search.item === 0) return; 
    else {
        search.item -= 1;
    }

    update(selectedItem.id);
    basket = basket.filter(((x) => x.item !== 0))
    // console.log(basket);
    
    localStorage.setItem("data", JSON.stringify(basket));
};

let update = (id)=>{
    let search = basket.find((x)=> x.id === id);
    // console.log(search.item);
    document.getElementById(id).innerHTML = search.item;
    calculation();
};

let calculation =()=>{
    let cartIcon = document.getElementById("cartAmount");
    cartIcon.innerHTML = basket.map((x)=>x.item).reduce((x,y)=> x + y, 0 );
};

calculation();
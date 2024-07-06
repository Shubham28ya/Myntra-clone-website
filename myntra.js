let bagItems;
onload();
function onload(){
    let bagItemsStr=localStorage.getItem('bagItems');
    bagItems=bagItemsStr? JSON.parse(bagItemsStr):[];
    displayItemOnHomepage();
    displayBagIcon();

}


function addToBag(itemId){
    bagItems.push(itemId);
    localStorage.setItem('bagItems',JSON.stringify(bagItems));
displayBagIcon()
};


function displayBagIcon() {
    let bagItemCountElement=document.querySelector('.bag-item-count');
    bagItemCountElement.innerText=bagItems.length;
    if(bagItems.length>0){
        bagItemCountElement.style.visibility='visible';

        bagItemCountElement.innerText=bagItems.length;
    }else{
        bagItemCountElement.style.visibility='hidden';
    }

};

function displayItemOnHomepage(){
    let itemsContainerElement= document.querySelector('.items-container')
if(!itemsContainerElement){
    return;
}
    innerHTML='';
    items.forEach(item=>{
    innerHTML+=`<div class="item-container">
    <img class="item-img" src="${item.image}" alt="item image">
    <div class="raiting">
        ${item.rating.stars}⭐|${item.rating.count}k
    </div>
    <div class="company-name">${item.company}</div>
    <div class="item-name">${item.item_name}</div>
    <div class="pricing">
    <span class="current-price">${item.current_price}</span>
    <span class="original-price">Rs ${item.original_price}</span>
    <span class="discount-price">(${item.discount_percentage}% OFF)</span>
    </div>
    <button onclick="addToBag(${item.id})" class="btn-add-bag">"Add to Bag"</button>
    </div>`
    
    })
    itemsContainerElement.innerHTML=innerHTML;
}


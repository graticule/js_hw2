const shop = []
const basket = []

function addItemToShop(id, itemName, description, sizes, price, available){
    shop.push(
        {
            id,
            name: itemName, 
            description, 
            sizes, 
            price, 
            available
        }
    )
}

function initShop() {
// id            Код товара
// name          Наименование
// description   Описание
// sizes         массив возможных размеров
// price         цена товара
// available     Признак доступности для продажи
    addItemToShop(1, "Товар 1", "Товар 1", null, 10, true);
    addItemToShop(2, "Товар 2", "Товар 2", "S", 20, true);
    addItemToShop(3, "Товар 2", "Товар 2", "L", 30, false);
    addItemToShop(4, "Товар 4", "Товар 4", null, 40, true);
    addItemToShop(5, "Товар 3", "Товар 3", "S", 50, true);
    addItemToShop(6, "Товар 6", "Товар 6", 1, 60, false);
    addItemToShop(7, "Товар 7", "Товар 7", 1, 70, true);
}

function initBasket() {
// good           ссылка на товар в каталоге shop.id
// amount         количество товара в корзине  
    addItem(1, 2);
    addItem(2, 4);
    addItem(7);
}

function init(){
    initShop();
    initBasket();
}

function shopItemIndex(id) {
    for (let j = 0; j < shop.length; j++) {
        if (shop[j].id === id) {
            return j;
        }
    }
    return -1;
}

function addItem(id, amount=1) {
    const itemIndex = shopItemIndex(id);
    if (itemIndex === -1){
        console.log("Товар отсутствует в каталоге");
        return;
    } else if(!shop[itemIndex].available){
        console.log("Товар недоступен для покупки")
        return;
    }
    
    for(let i=0; i<basket.length; i++) {
        if(id === basket[i]["good"]){
            basket[i].amount = basket[i].amount + amount;
            return;
        }
    }

    basket.push(
        {"good": id,
         "amount": amount,
        }
    )
}

function removeItem(id) {
    for (let i = 0; i < basket.length; i++) {
        if (id === basket[i]["good"]) {
            basket.splice(i, 1);
            return;
        }
    }
    console.log(`Товара ${id} нет в корзине`)
}

function total() {
    let totalAmount = 0;
    let totalSum = 0;
    for (let i = 0; i < basket.length; i++) {
        totalAmount = totalAmount + basket[i].amount;
        let itemIndex = shopItemIndex(basket[i].good)
        totalSum = totalSum + basket[i].amount * shop[itemIndex].price;
    }
    return {
        totalAmount,
        totalSum,
    }
}

init();
console.log(shop);
console.log(basket);
console.log(total());
addItem(9);
addItem(3, 4);
addItem(1, 2);
removeItem(7);
console.log(basket);
console.log(total());
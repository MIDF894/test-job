//Склад тканевых масок и Заказ
//Key1
let Store_key1 = [
    { "size": 2, "quantity": 1 }
];

let Order_key1 = [
    { "id": 102, "size": [1, 2], "masterSize": "s1" }
];

//key2
let Store_key2 = [
    { "size": 3, "quantity": 1 }
];

let Order_key2 = [
    { "id": 102, "size": [1, 2], "masterSize": "s1" }
];

//key3
let Store_key3 = [
    { "size": 2, "quantity": 4 }
];

let Order_key3 = [
    { "id": 101, "size": [2] },
    { "id": 102, "size": [1, 2], "masterSize": "s2" }
];

//key4
let Store_key4 = [
    { "size": 1, "quantity": 1 },
    { "size": 2, "quantity": 2 },
    { "size": 3, "quantity": 1 }
];

let Order_key4 = [
    { "id": 100, "size": [1] },
    { "id": 101, "size": [2] },
    { "id": 102, "size": [2, 3], "masterSize": "s1" },
    { "id": 103, "size": [1, 2], "masterSize": "s2" }
];



function process(store, order){
//Создание нужных переменных
    let stats = [];
    let assignment = [];
    let mismatches = 0;
    
//Заполнение массива для проверки на возможность обработать заказ
    let checkin = order.map((item, index) => {
        try{
            return item.size.includes(store[index].size)
        } catch{
            return item.size.includes(store[index - index].size)
        }
    });

//Проверка на соответствие размеров с заказами
    if (checkin.includes(false)){
        return console.log(false);
    } else {

//Добавление в stats из массива Store
    for (item of store){
        stats.push(item);
    }

//Добавление в assignment из массива Order
    for (part of order){   
        assignment.push({"id": part.id, "size": part.size});
    }

//Нахождение количества несовпадений с приоритетом
    order.forEach((item, index) => {
        try{
        if (store[index].size != item.masterSize[1]){
            return mismatches++;
        }} catch{}
    })
    }

    stats.sort((a, b) => a.size - b.size);
    console.log({stats: stats, assigment: assignment, mismatches: mismatches});
}

process(Store_key1, Order_key1);
process(Store_key2, Order_key2);
process(Store_key3, Order_key3);
process(Store_key4, Order_key4);

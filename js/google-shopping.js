var data = require('../products.json');

var shoppingCount = 0;
// Write your solutions below

// console.log(data.items);
//1
// for (var i = 0; i < data.items.length; i++){
// 	var item = data.items[i];
// 	if (item.kind === 'shopping#product'){
// 		shoppingCount++;
// 	}
// }
// console.log(shoppingCount);

//2
// for (var i = 0; i < data.items.length; i++) {
// 	var item = data.items[i];
// 	if (item.product.inventories[0].availability === 'backorder'){
// 		console.log(item.product.title);
// 	}
// }

//3
// for (var i = 0; i < data.items.length; i++) {
// 	var item = data.items[i];

// 	if (item.product.images.length > 1){
// 		console.log(item.product.title);
// 	}
// }

//4
// for (var i = 0; i < data.items.length; i++) {
// 	var item = data.items[i];

// 	if (item.product.brand === 'Canon'){
// 		console.log(item.product.title);
// 	}
// }

//5
// for (var i = 0; i < data.items.length; i++) {
// 	var item = data.items[i];

// 	if (item.product.author.name === 'eBay' && item.product.brand === 'Canon'){
// 		console.log(item.product.title);
// 	}
// }

//6
for (var i = 0; i < data.items.length; i++) {
	var item = data.items[i];

	console.log(item.product.brand, item.product.inventories[0].price, item.product.images[0].link);
	
}
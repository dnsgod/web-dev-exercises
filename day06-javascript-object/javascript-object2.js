const jsonData = '{"product": "Laptop", "price": 1200, "stock": true}';

const product = JSON.parse(jsonData);
console.log(product);

product.price = 1100;
const updatedJson = JSON.stringify(product);
console.log(updatedJson);

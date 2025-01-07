const jsonData = `{"name": "David", "age": 35}`;

const obj = JSON.parse(jsonData);
console.log(obj.name);

const newJson = JSON.stringify(obj);
console.log(newJson);
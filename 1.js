// I/O of all the data types

//JS data types

//Number, String, Object
// boolean, Symbol, null, undefined
//JS data types are dynamically typed

let dataTypes = {};
dataTypes["number"] = 0;
dataTypes["string"] = `Krishna`;
dataTypes["boolean"] = true;
dataTypes["Null"] = null;
dataTypes["unDefined"] = undefined;
dataTypes["symb"] = Symbol("id");

Object.keys(dataTypes).map(key => {
  console.log(`${key} : ${typeof dataTypes[key]}`);
});

console.log(`dataTypes : ${typeof dataTypes}`);

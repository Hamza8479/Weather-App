// objects

const name = "Hamza";
const age = 22;

const user = {
  name,
  age,
  location: "Islamabad",
};

console.log(user);

// object destructuring

const product = {
  item: "chocolates",
  quality: "good",
  quantity: 10,
  located: "Us",
};

const { item: Pname, quality, quantity, located, rating = 5 } = product;

console.log(Pname, quality, quantity, located, rating);

const transaction = (type, { item, quality }) => {
  //   const { item } = myProduct;
  console.log(type, item, quality);
};

transaction("order", product);

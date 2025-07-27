const car = {
  type: "Fiat",
  model: "500",
  color: "white",
  "new-feature": "dfaskl",
};

car.type = "Bangali";

const carType = car.type; // dot notation
const newFeature = car["new-feature"]; // bracket notation

// console.log(
//   "Type: ",
//   car.type,
//   ", ",
//   "model: ",
//   car.model,
//   ", ",
//   "color: ",
//   car.color
// );

const newObj = new Object();

// console.log(typeof newObj);

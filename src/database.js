import faker from "faker";
faker.seed(123);
export const productLists = [...Array(70)].map((item) => ({
  id: faker.datatype.uuid(),
  name: faker.commerce.productName(),
  image: faker.random.image(),
  desc: faker.commerce.productDescription(),
  material: faker.commerce.productMaterial(),
  adjective: faker.commerce.productAdjective(),
  price: faker.commerce.price(),
  inStock: faker.datatype.boolean(),
  isFastDeliveryAvailable: faker.datatype.boolean(),
  category: faker.random.arrayElement(["CricketKit", "Bat", "Ball", "Gloves"]),
  quantity: 0
}));

export const categories = ["Cricket Kit", "Bat", "Ball", "Gloves"];

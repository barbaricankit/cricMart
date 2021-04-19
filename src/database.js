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

export const Users=[
  {
    id:1,
    username:"Ankit1993",
    password:"Singhania1993"
  },
  {
    id:2,
    username:"Tanay",
    password:"Pratap"
  },
  {
    id:3,
    username:"Ritesh1993",
    password:"Mukim1993"
  },
  {
    id:4,
    username:"Raunak",
    password:"Tibrewal"
  },
  {
    id:5,
    username:"Priya",
    password:"Singhania"
  }
]

export const findUsername=(username)=> Users.find(user=>user.username===username);
export const checkPassword=(username,password)=>{
  const user=findUsername(username)
  console.log(user.password===password)
  return user.password===password
}
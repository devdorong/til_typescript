const user = {
    name: "정국",
    address: { city: "서울", age: 20 },
};
const { name, address: { city, age }, } = user;
export {};

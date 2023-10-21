const uniqId = require("uniqid");

const cubes = [
  {
    id: "1nevib2twlo06pllf",
    name: "Cube1",
    description: "Blue",
    imageUrl: "https://cdn.fcglcdn.com/brainbees/images/products/720x720/13377727a.webp",
    difficultyLevel: 4,
  },
  {
    id: "1nevib2twlo06r9t6",
    name: "Cube2",
    description: "Cool Shape",
    imageUrl: "https://i.pinimg.com/474x/75/67/75/756775830f533f547e8f7b1267f2111f.jpg",
    difficultyLevel: 3,
  },
  {
    id: "1nevib1yklo06uanj",
    name: "Cube3",
    description: "Red",
    imageUrl: "https://cubezz.com/images/201801/goods_img/5584_P_1516946006627.jpg",
    difficultyLevel: 2,
  },
];

exports.create = (cubeData) => {
  const newCube = {
    id: uniqId(),
    ...cubeData,
  };
  cubes.push(newCube);
  //   return newCube;
};

exports.getAll = () => {
  return [...cubes];
};

const Cube = require("../models/Cube.js");

const cubes = [

  // {
  //   id: "1nevib2twlo06r9t6",
  //   name: "Cube2",
  //   description: "Cool Shape",
  //   imageUrl: "https://i.pinimg.com/474x/75/67/75/756775830f533f547e8f7b1267f2111f.jpg",
  //   difficultyLevel: 3,
  // },
  // {
  //   id: "1nevib1yklo06uanj",
  //   name: "Red",
  //   description: "Cool red Cube",
  //   imageUrl: "https://cubezz.com/images/201801/goods_img/5584_P_1516946006627.jpg",
  //   difficultyLevel: 2,
  // },
];

exports.create = async (cubeData) => {
  // const cube = await Cube(cubeData);
  // cube.save();
  const cube = await Cube.create(cubeData);
  return cube;
};

exports.getAll = async (search, from, to) => {
  let filterCubes = await Cube.find().lean();

  // TODO   This will be filtered latter by Mongoose
  if (search) {
    filterCubes = filterCubes.filter((cube) =>
      cube.name.toLowerCase().includes(search.toLowerCase())
    );
  }
  if (from) {
    filterCubes = filterCubes.filter((cube) => cube.difficultyLevel >= Number(from));
  }
  if (to) {
    filterCubes = filterCubes.filter((cube) => cube.difficultyLevel <= Number(to));
  }
  return [...filterCubes];
};

exports.getCube = (id) => Cube.findById(id);
// return Cube.findById(id);
//? return cubes.find((cube) => cube.id === id);

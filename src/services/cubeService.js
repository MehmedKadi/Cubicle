const Cube = require("../models/Cube.js");

const cubes = [];

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

exports.getCube = (id) => Cube.findById(id); // return Cube.findById(id); //? return cubes.find((cube) => cube.id === id);

exports.attachAccessory = async (cubeId, accessoryId) => {
  const cube = await this.getCube(cubeId);
  cube.accessories.push(accessoryId);
  return cube.save();
};

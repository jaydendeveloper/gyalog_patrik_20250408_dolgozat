import { flowers } from "../lib/flowers.js";

export async function getFlowersById(req, res) {
  const { id } = req.params;
  console.log(id);
  const filteredFlowers = flowers.filter((flower) => flower.id === Number(id));

  if (filteredFlowers.length === 0) {
    return res.status(404).json({ message: "Flower not found" });
  }

  res.status(200).json(filteredFlowers);
}

export async function postFlower(req, res) {
  const { name, species, price, isAvailable } = req.body;

  if (
    !name ||
    !species ||
    price < 0 ||
    isAvailable === undefined ||
    isAvailable === null
  ) {
    return res.status(400).json({ message: "Missing or invalid fields" });
  }

  const newFlower = {
    id: flowers[flowers.length - 1].id + 1 || flowers[flowers.length] + 1,
    name,
    species,
    price,
    isAvailable,
  };

  flowers.push(newFlower);

  res.status(201).json(newFlower);
}
export async function putFlower(req, res) {
  const { id } = req.params;
  const { name, species, price, isAvailable } = req.body;
  if (
    !id ||
    !name ||
    !species ||
    price < 0 ||
    isAvailable === undefined ||
    isAvailable === null
  ) {
    return res.status(400).json({ message: "Missing or invalid fields" });
  }

  const flowerIndex = flowers.findIndex((flower) => flower.id === Number(id));

  if (flowerIndex === -1) {
    res.status(404).json({ message: "Flower not found" });
  }

  const updatedFlower = {
    ...flowers[flowerIndex],
    name,
    species,
    price,
    isAvailable,
  };

  flowers.splice(flowerIndex, 1, updatedFlower);

  res.status(200).json(updatedFlower);
}
export async function deleteFlower(req, res) {
  const { id } = req.params;

  const flowerIndex = flowers.findIndex((flower) => flower.id === Number(id));
  flowers.splice(flowerIndex, 1);

  res.status(200).json({
    message: `Flower with id ${id} deleted`,
  });
}

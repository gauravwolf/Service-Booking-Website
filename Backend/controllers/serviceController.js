const Service = require("../models/Service");

const addService = async (req, res) => {
  try {
    const { title, price, description } = req.body;

    if (!title || !price) {
      return res.status(400).json({ message: "Title & price required" });
    }

    const service = await Service.create({
      title,
      price,
      description,
      image: req.file ? req.file.path : "",
    });

    res.status(201).json(service);
  } catch (error) {
    console.error("ADD SERVICE ERROR:", error);
    res.status(500).json({ message: error.message });
  }
};

const getServices = async (req, res) => {
  try {
    const services = await Service.find();
    res.json(services);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  addService,
  getServices,
};

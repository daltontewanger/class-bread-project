const router = require("express").Router();
const Bread = require("../models/bread");
const Baker = require("../models/baker");

router.get("/data/seed", async (req, res) => {
  const seedData = [
    {
      name: "Rye",
      hasGluten: true,
      image:
        "https://images.unsplash.com/photo-1534620808146-d33bb39128b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    },
    {
      name: "French",
      hasGluten: true,
      image:
        "https://images.unsplash.com/photo-1595535873420-a599195b3f4a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    },
    {
      name: "Gluten-Free",
      hasGluten: false,
      image:
        "https://images.unsplash.com/photo-1546538490-0fe0a8eba4e6?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80",
    },
    {
      name: "Pumpernickel",
      hasGluten: true,
      image:
        "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80",
    },
  ];

  const bakers = await Baker.find();
  const bakerIds = bakers.map((baker) => baker.id);
  seedData.forEach((bread) => {
    const random = Math.floor(Math.random() * bakerIds.length);
    const randomId = bakerIds[random];
    bread.baker = randomId;
  });

  await Bread.deleteMany();
  await Bread.insertMany(seedData);
  res.redirect("/bread");
});

module.exports = router;

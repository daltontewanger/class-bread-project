const router = require("express").Router();
const Bread = require("../models/bread");

// GET retrieve all the bread
router.get("/", async (req, res) => {
  try {
    const breads = await Bread.find();
    res.render("index", {
      breads,
    });
  } catch (error) {
    console.log("error:", error);
    res.json({ message: "error getting bread" });
  }
});

// Render New Page
router.get("/new", (req, res) => {
  res.render("new");
});

// GET retrieve bread by id
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const bread = await Bread.findById(id);
  res.render("show", {
    bread,
  });
});

router.get("/:id/edit", async (req, res) => {
  const { id } = req.params;
  try {
    const bread = await Bread.findById(id);
    res.render("edit", {
      bread,
    });
  } catch (error) {
    console.log("error:", error);
    res.json({ message: "error getting bread" });
  }
});

// CREATE bread
router.post("/", async (req, res) => {
  if (!req.body.image) req.body.image = undefined;
  if (req.body.hasGluten === "on") {
    req.body.hasGluten = true;
  } else {
    req.body.hasGluten = false;
  }
  await Bread.create(req.body);
  res.redirect("/bread");
});

// PUT (UPDATE) Bread
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    if (!req.body.image) req.body.image = undefined;
    if (req.body.hasGluten === "on") {
      req.body.hasGluten = true;
    } else {
      req.body.hasGluten = false;
    }
    await Bread.findByIdAndUpdate(id, req.body, { new: true });
    res.redirect(`/bread/${id}`);
  } catch (error) {
    console.log("Error:", error);
    res.status(500).json({ message: "Error updating bread", error });
  }
});

// DELETE Bread
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  await Bread.findByIdAndDelete(id);
  res.redirect("/bread");
});

module.exports = router;

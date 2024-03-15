const mongoose = require("mongoose");

const breadSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  hasGluten: {
    type: Boolean,
  },
  image: {
    type: String,
    default:
      "https://houseofnasheats.com/wp-content/uploads/2022/02/French-Bread-1.jpg",
  },
  baker: {
    type: String,
    enum: ["Rachel", "Monica", "Joey", "Chandler", "Ross", "Phoebe"],
  },
});

breadSchema.methods.getBakedBy = function () {
  return `${this.name} was baked by ${this.baker}`
}

module.exports = mongoose.model("Bread", breadSchema);

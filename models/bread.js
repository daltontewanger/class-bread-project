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
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Baker'
  },
});

breadSchema.methods.getBakedBy = function () {
  return `${this.name} was baked by ${this.baker.name} who has been here since ${this.baker.startDate.getFullYear()}.`
}

module.exports = mongoose.model("Bread", breadSchema);

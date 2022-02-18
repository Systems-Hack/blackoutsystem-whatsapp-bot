const mongoose = require("mongoose");

const memberSchema = new mongoose.Schema({
    memberId: {
        type: mongoose.Schema.Types.ObjectId,
        index: true,
        required: true,
        auto: true
      },

      memberName: {
        type: String,
        required: true,
      },

      memberNumber: {
        type: String,
        required: true,
      },

      memberStatus: {
        type: Boolean,
        required: true,
        deafult: true
      }
});

module.exports = mongoose.model("Member", memberSchema);
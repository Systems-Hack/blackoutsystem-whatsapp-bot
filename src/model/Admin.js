const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
    adminId: {
        type: mongoose.Schema.Types.ObjectId,
        index: true,
        required: true,
        auto: true
      },

      adminName: {
        type: String,
        required: true,
      },

      adminNumber: {
        type: String,
        required: true,
      },

      adminStatus: {
        type: Boolean,
        required: true,
        deafult: true
      }
});

module.exports = mongoose.model("Admin", adminSchema);
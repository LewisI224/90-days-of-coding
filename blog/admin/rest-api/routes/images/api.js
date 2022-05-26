const path = require("path")
const fs = require("fs")

const assetsDirPath = path.join(__dirname, "..", "..", "..", "..", "assets")

module.exports = {
  getAllImages: function(callback) {
    fs.readdir(assetsDirPath, function(error, files) {
      if (error) {
        callback({getDataError: true})
      } else {
        callback({success: true, files: files})
      }
    })
  }
}
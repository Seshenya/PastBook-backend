const photoGrid = require("../services/photoGrid.js");

module.exports = app => {
    // Get the selected photoGrid of the user from MongoDB 
    app.get("/photoGrid/:userID", photoGrid.getSavedPhotoGrid);

    // Save or update the selected photos of the user in MongoDB 
    app.put("/photoGrid", photoGrid.savePhotoGrid);
}
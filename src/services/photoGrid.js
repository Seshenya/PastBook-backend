const { queryConnect } = require("../../db.js");

const getSavedPhotoGrid = async (req, res) => {
    try {
        const client = await queryConnect();
        const query = { userID: +req.params.userID };
        const result = await client.db("pastBook").collection("photoGrid").findOne(query);
        res.status(200).send(result);
    } catch (err) {
        console.error("Getting saved photoGrid error", err);
        return [true, err];
    }
};

const savePhotoGrid = async (req, res) => {
    try {
        const client = await queryConnect();
        const query = { userID: 1 };
        const updateData = { $set: {userID: 1, photos: req.body }};
        const options = { upsert: true };
        const result = await client.db("pastBook").collection("photoGrid").updateOne(query, updateData, options);
        res.status(200).send(result);
    } catch (err) {
        console.error("Saving photoGrid error", err);
        return [true, err];
    }
};

module.exports = {
    getSavedPhotoGrid,
    savePhotoGrid
};


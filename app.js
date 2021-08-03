const express = require("express");

const app= express();

const port = 2010;

// This limit is added as blob files are saved in the DB
app.use(express.json({
    limit: '50mb'
  }));

require("./src/routes/route")(app);

if (!module.parent) {
    app.listen(port, () => {
        console.log('Server is running on port:' + port)
    });
}

module.exports = app
const express = require("express");

const PORT = process.env.PORT || 4000;

const app = express();




//Note: Make sure to place this above the app.listen function.
//The code below creates an endpoint for the route /api.
app.get("/api", (req, res) => {
	res.json({ message: "Hello from server!" +
			" Works well!" });
});

app.listen(PORT, () => {
	console.log(`Server listening on ${PORT}`);
});


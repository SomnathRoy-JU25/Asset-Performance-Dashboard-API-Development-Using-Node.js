const express = require('express');
const app = express();
const database = require('./config/database');
const assetsRouter = require('./routes/assets');
const performanceMetricsRouter = require('./routes/performanceMetrics');
const insightsRouter = require('./routes/insights');
const dotenv = require("dotenv");
dotenv.config();
// Connecting to database
database.connect();

app.use(express.json());

app.use('/asset', assetsRouter);
app.use('/performance-metrics', performanceMetricsRouter);
app.use('/insights', insightsRouter);

const PORT = process.env.PORT || 4000;
// Listening to the server
app.listen(PORT, () => {
	console.log(`App is listening at ${PORT}`);
});

// Testing the server
app.get("/", (req, res) => {
	return res.json({
		success: true,
		message: "Your server is up and running ...",
	});
});
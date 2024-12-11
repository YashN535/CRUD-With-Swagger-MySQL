//Express App Configuration

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger/swagger-output.json");
const userRoutes = require("./routes/userRoutes");
const app = express();

//Middleware Configuration

app.use(cors()); // Enable Cross-Origin Resource Sharing
app.use(bodyParser.json()); // Parse JSON Request Bodies

//Routes Configuration

app.use("/api/users", userRoutes); // Routes For User Management
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument)); // Swagger UI For API Documentation

//Start The Server

const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);

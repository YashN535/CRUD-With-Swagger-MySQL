//Swagger Documentation Generation Script

const swaggerAutogen = require("swagger-autogen")();

const outputFile = "./swagger-output.json"; // Location Of The Generated Swagger.json
const routesFiles = ["routes/userRoutes.js"]; //Path to Your Route files

// Define your Swagger Documentation

const doc = {
  info: {
    title: "User API",
    description: "API documentation for user management", // Description of the API
    version: "1.0.0",
  },
  host: "localhost:3000", //Host For API
  schemes: ["http"], //HTTP/HTTPS Schemes
};

// Generate the Swagger JSON File

swaggerAutogen(outputFile, routesFiles, doc).then(() => {
  console.log("Swagger documentation generated");
});

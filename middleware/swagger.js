import swaggerJSDoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Products API", 
      description: "A simple products API", 
      version: "1.0.0", 
    },
    servers: [
      {
        url: "http://localhost:3000",
        description: "Development server", 
      },
    ],
    components: {
      securitySchemes: {
        BearerAuth: {
          type: "http",
          scheme: "bearer", // Use HTTP Bearer token authentication
          bearerFormat: "JWT", // Indicate that the token format is JWT
        },
      },
    },
    security: [
      {
        BearerAuth: [], // Apply BearerAuth security globally to all routes unless specified otherwise
      },
    ],
  },
  apis: ["./swagger/*.js"], // Adjust this path to point to your actual route files for Swagger docs
};

const specs = swaggerJSDoc(options);

export default specs;
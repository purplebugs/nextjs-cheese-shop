import { createSwaggerSpec } from "next-swagger-doc";

export const getAPIDocs = async () => {
  const spec = createSwaggerSpec({
    apiFolder: "src/app/api",
    definition: {
      openapi: "3.1.0",
      info: {
        title: "Purple Cheese Swagger API",
        version: "2.0.0",
      },
    },
  });

  console.log(spec);

  return spec;
};

export default getAPIDocs;

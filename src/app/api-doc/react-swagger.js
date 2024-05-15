"use client";

import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";

function ReactSwagger(spec) {
  const specString = JSON.stringify(spec);
  return <SwaggerUI spec={specString} />;
}

export default ReactSwagger;

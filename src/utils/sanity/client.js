// From tutorial for https://alpaca-teddies.sanity.studio/vision

import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "ss37e7oy",
  dataset: "production",
  apiVersion: "2024-03-11",
  // Set to `true` for production environments
  useCdn: false,
});

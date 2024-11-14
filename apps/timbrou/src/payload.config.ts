import path from "node:path";
import { fileURLToPath } from "node:url";
// storage-adapter-import-placeholder
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { buildConfig } from "payload";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import sharp from "sharp";

import { Users } from "./collections/users";
import Categories from "./collections/categories";
import Products from "./collections/products";
import Medias from "./collections/medias";
import ProductsLandingPage from "./collections/product-landing-pages";
import Receipts from "./collections/receipts";
import Orders from "./collections/orders";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [
    Users,
    Medias,
    Categories,
    Products,
    ProductsLandingPage,
    Receipts,
    Orders,
  ],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || "",
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || "",
  }),
  sharp,
  plugins: [
    // storage-adapter-placeholder
  ],
  routes: {
    admin: "/",
  },
});

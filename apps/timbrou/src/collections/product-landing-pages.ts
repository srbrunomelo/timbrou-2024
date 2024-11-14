import type { CollectionConfig } from "payload";
import { LandingBlocks } from "./blocks/landing-page-blocks";

export const ProductsLandingPage: CollectionConfig = {
  slug: "products_landing_pages",
  typescript: {
    interface: "TProductLandingPage",
  },
  labels: {
    singular: "Landing Page de Produto",
    plural: "Landing Pages de Produtos",
  },
  fields: [
    {
      label: "Produto",
      name: "product",
      type: "relationship",
      relationTo: "products",
      required: true,
    },
    {
      label: "SEO",
      name: "SEO",
      type: "group",
      fields: [
        {
          name: "title",
          label: "Title",
          type: "text",
        },
        {
          name: "description",
          label: "Description",
          type: "textarea",
        },
      ],
    },
    {
      label: "Landing",
      name: "landing",
      type: "blocks",
      blocks: LandingBlocks,
    },
  ],
};

export default ProductsLandingPage;

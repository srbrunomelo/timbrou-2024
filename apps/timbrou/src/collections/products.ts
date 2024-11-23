import type { CollectionConfig } from "payload";

export const Products: CollectionConfig = {
  slug: "products",
  admin: {
    useAsTitle: "name",
  },
  typescript: {
    interface: "TProduct",
  },
  labels: {
    singular: "Produto",
    plural: "Produtos",
  },
  fields: [
    {
      label: "Nome",
      name: "name",
      type: "text",
      required: true,
    },
    {
      label: "Descrição",
      name: "description",
      type: "textarea",
    },
    {
      label: "Preço",
      name: "price",
      type: "number",
      required: true,
    },
    {
      label: "Categoria",
      name: "category",
      type: "relationship",
      relationTo: "categories",
      required: true,
    },
    {
      label: "Tem landing page?",
      name: "hasLandingPage",
      type: "checkbox",
      defaultValue: false,
    },
    {
      label: "Foto",
      name: "images",
      type: "array",
      fields: [
        {
          label: "Url",
          name: "url",
          type: "text",
        },
        {
          label: "Alt",
          name: "alt",
          type: "text",
        },
        {
          label: "Principal",
          name: "default",
          type: "checkbox",
          defaultValue: false,
        }
      ]
    },
  ],
};

export default Products;

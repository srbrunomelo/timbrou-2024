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
      name: "has_landing_page",
      type: "checkbox",
      defaultValue: false,
    },
    {
      label: "Foto",
      name: "image",
      type: "relationship",
      relationTo: "medias",
    },
  ],
};

export default Products;

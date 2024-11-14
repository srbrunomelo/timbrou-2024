import type { CollectionConfig } from "payload";

export const Categories: CollectionConfig = {
  slug: "categories",
  admin: {
    useAsTitle: "name",
  },
  typescript: {
    interface: "TCategory",
  },
  labels: {
    singular: "Categoria",
    plural: "Categorias",
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
      type: "text",
    },
    {
      label: "Foto",
      name: "image",
      type: "relationship",
      relationTo: "medias",
    },
  ],
};

export default Categories;

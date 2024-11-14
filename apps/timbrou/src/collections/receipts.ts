import type { CollectionConfig } from "payload";

export const Receipts: CollectionConfig = {
  slug: "receipts",
  admin: {
    useAsTitle: "name",
  },
  typescript: {
    interface: "TMedia",
  },
  labels: {
    singular: "Media",
    plural: "Medias",
  },
  upload: true,
  fields: [
    {
      label: "Nome",
      name: "name",
      type: "text",
      required: true,
    },
  ],
};

export default Receipts;

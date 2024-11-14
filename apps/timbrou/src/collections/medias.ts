import type { CollectionConfig } from "payload";

export const Medias: CollectionConfig = {
  slug: "medias",
  admin: {
    useAsTitle: "alt",
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
      label: "Alt",
      name: "alt",
      type: "text",
      required: true,
    },
  ],
};

export default Medias;

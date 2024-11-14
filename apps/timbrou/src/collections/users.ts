import type { CollectionConfig } from "payload";

export const Users: CollectionConfig = {
  slug: "users",
  auth: {
    disableLocalStrategy: true,
  },
  admin: {
    useAsTitle: "name",
  },
  typescript: {
    interface: "TUser",
  },
  labels: {
    singular: "Usuário",
    plural: "Usuários",
  },
  fields: [
    {
      label: "Nome",
      name: "name",
      type: "text",
      required: true,
    },
    {
      label: "Email",
      name: "email",
      type: "email",
      required: true,
    },
    {
      label: "CPF",
      name: "document_number",
      type: "text",
    },
    {
      label: "Celular",
      name: "phone",
      type: "text",
    },
    {
      label: "Data de Nascimento",
      name: "birth_date",
      type: "date",
    },
    {
      label: "ID externo",
      name: "external_id",
      type: "text",
    },
  ],
};

export default Users;

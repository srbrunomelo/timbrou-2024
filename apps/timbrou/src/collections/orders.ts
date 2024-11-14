import type { CollectionConfig } from "payload";

export const Orders: CollectionConfig = {
  slug: "orders",
  typescript: {
    interface: "TOrder",
  },
  labels: {
    singular: "Pedido",
    plural: "Pedidos",
  },
  fields: [
    {
      label: "Produtos",
      name: "products",
      type: "array",
      required: true,
      fields: [
        {
          label: "Produto",
          name: "product",
          type: "relationship",
          relationTo: "products",
        },
      ],
    },
    {
      label: "Comprador",
      name: "buyer",
      type: "relationship",
      relationTo: "users",
      required: true,
    },
    {
      label: "Subtotal",
      name: "subtotal",
      type: "number",
      required: true,
    },
    {
      label: "Total",
      name: "total",
      type: "number",
      required: true,
    },
    {
      label: "Status",
      name: "status",
      type: "select",
      options: [
        { label: "Aguardando pagamento", value: "awaiting_payment" },
        { label: "Em preparo", value: "preparing" },
        { label: "Enviado", value: "shipped" },
        { label: "Entregue", value: "delivered" },
        { label: "Cancelado", value: "canceled" },
      ],
    },
    {
      label: "Comprovante de pagamento",
      name: "receipt",
      type: "relationship",
      relationTo: "receipts",
    },
  ],
};

export default Orders;

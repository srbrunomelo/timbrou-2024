import type { Block } from "payload";

export const TextWithVideo: Block = {
  slug: "text-with-video",
  labels: {
    singular: "Texto com vídeo",
    plural: "Textos com vídeos",
  },
  fields: [
    {
      name: "title",
      label: "Título",
      type: "text",
      required: true,
    },
    {
      name: "description",
      label: "Descrição",
      type: "textarea",
      required: true,
    },
    {
      name: "action",
      label: "Botão",
      type: "group",
      fields: [
        {
          name: "label",
          label: "Texto",
          type: "text",
          required: true,
        },
        {
          name: "link",
          label: "Link",
          type: "text",
          required: true,
        },
      ],
    },
    {
      name: "video",
      label: "Video",
      type: "text",
      required: true,
    },
  ],
};

export const ItemsList: Block = {
  slug: "items-list",
  labels: {
    singular: "Lista de item",
    plural: "Lista de items",
  },
  fields: [
    {
      name: "title",
      label: "Título",
      type: "text",
      required: true,
    },
    {
      name: "items",
      label: "Items",
      type: "array",
      required: true,
      fields: [
        {
          name: "title",
          label: "Título",
          type: "text",
          required: true,
        },
        {
          name: "description",
          label: "Descrição",
          type: "text",
        },
        {
          name: "icon",
          label: "Ícone",
          type: "relationship",
          required: true,
          hasMany: false,
          relationTo: "medias",
        },
      ],
    },
  ],
};

export const TestimonialList: Block = {
  slug: "testimonials-list",
  labels: {
    singular: "Lista de depoimentos",
    plural: "Listas de depoimentos",
  },
  fields: [
    {
      name: "title",
      label: "Título",
      type: "text",
      required: true,
    },
    {
      name: "testimonials",
      label: "Testemunhos",
      type: "array",
      fields: [
        {
          name: "title",
          label: "Nome",
          type: "text",
          required: true,
        },
        {
          name: "subtitle",
          label: "Descrição",
          type: "text",
        },
        {
          name: "description",
          label: "Depoimento",
          type: "textarea",
          required: true,
        },
        {
          name: "image",
          label: "Imagem",
          type: "relationship",
          required: true,
          hasMany: false,
          relationTo: "medias",
        },
      ],
    },
  ],
};

export const LeadForm: Block = {
  slug: "lead-form",
  labels: {
    singular: "Formulário de lead",
    plural: "Formulários de lead",
  },
  fields: [
    {
      name: "name",
      label: "Nome da seção",
      type: "text",
      required: true,
    },
    {
      name: "title",
      label: "Título",
      type: "text",
      required: true,
    },
    {
      name: "action",
      label: "Texto de submissão",
      type: "text",
      required: true,
    },
  ],
};

export const Faq: Block = {
  slug: "faq",
  labels: {
    singular: "FAQ",
    plural: "FAQs",
  },
  fields: [
    {
      name: "name",
      label: "Nome da seção",
      type: "text",
      required: true,
    },
    {
      name: "title",
      label: "Título",
      type: "text",
      required: true,
    },
    {
      name: "faqs",
      label: "FAQs",
      type: "array",
      required: true,
      fields: [
        {
          name: "question",
          label: "Pergunta",
          type: "text",
        },
        {
          name: "answer",
          label: "Resposta",
          type: "richText",
        },
      ],
    },
  ],
};

export const SplitTextImage: Block = {
  slug: "split-text-image",
  labels: {
    singular: "Divisão texto imagem",
    plural: "Divisões texto imagem",
  },
  fields: [
    {
      name: "title",
      label: "Título",
      type: "text",
      required: true,
    },
    {
      name: "description",
      label: "Descrição",
      type: "richText",
      required: true,
    },
    {
      name: "image_position",
      label: "Posição da imagem",
      type: "select",
      options: [
        { label: "Esquerda", value: "left" },
        { label: "Direita", value: "right" },
      ],
      required: true,
    },
    {
      name: "image",
      label: "Imagem",
      type: "relationship",
      required: true,
      hasMany: false,
      relationTo: "medias",
    },
  ],
};

export const LandingBlocks = [
  TextWithVideo,
  ItemsList,
  TestimonialList,
  LeadForm,
  Faq,
  SplitTextImage,
];

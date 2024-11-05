import { CollectionConfig } from 'payload'
import { WealthCategoriesOptions } from './options/wealth-options'

export const Wealth: CollectionConfig = {
  slug: 'wealth',
  admin: {
    useAsTitle: 'month',
  },
  typescript: {
    interface: 'TWealth',
  },
  labels: {
    singular: 'Patrimônio',
    plural: 'Patrimônios',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      label: 'Mês',
      name: 'month',
      type: 'date',
      required: true,
    },
    {
      name: 'money',
      type: 'array',
      required: true,
      fields: [
        {
          label: 'Nome',
          name: 'name',
          type: 'text',
          required: true,
        },
        {
          label: 'Valor',
          name: 'amount',
          type: 'number',
          required: true,
        },
        {
          label: 'É Investimento?',
          name: 'is_investment',
          type: 'checkbox',
          defaultValue: false,
        },
        {
          label: 'Categoria',
          name: 'category',
          type: 'select',
          required: true,
          options: WealthCategoriesOptions,
        },
        {
          label: 'Descrição',
          name: 'description',
          type: 'textarea',
        },
        {
          label: 'Corretora',
          name: 'broker',
          type: 'text',
        },
      ],
    },
    {
      label: 'Dono',
      name: 'owner',
      type: 'relationship',
      relationTo: 'users',
      required: true,
    },
  ],
}

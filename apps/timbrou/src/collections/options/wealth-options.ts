export const WealthCategoriesOptions = [
  {
    label: 'Criptomoedas',
    value: 'crypto',
  },
  {
    label: 'Ações',
    value: 'stocks',
  },
  {
    label: 'Fundos Imobiliários',
    value: 'fiis',
  },
  {
    label: 'Renda Fixa',
    value: 'fixed',
  },
  {
    label: 'Fundos de Investimento',
    value: 'funds',
  },
  {
    label: 'Fundos Multimercado',
    value: 'funds_multimarket',
  },
  {
    label: 'Fundos Multimercado',
    value: 'funds_multimarket',
  },
  {
    label: 'Internacional',
    value: 'international',
  },
  {
    label: 'Em conta',
    value: 'in_account',
  },
]

export function translateCategory(category: string) {
  return WealthCategoriesOptions.find((option) => option.value === category)?.label
}

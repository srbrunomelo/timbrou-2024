import { ArrowDown, ArrowUp, TrendingDown, TrendingUp } from 'lucide-react'

import { Card } from '@repo/ui/card'
import { DateUtils } from '@repo/utils/date'
import { Currency } from '@repo/utils/currency'
import { RetrieveMonthWealthByCategories } from '@/features/wealth/retrieve-month-wealth-by-categories'
import { WealthCategoriesCardsError } from './wealth-categories-cards-error'

export const WealthCategoriesCardsSuccess = async ({
  month,
}: {
  month?: string
  year?: string
}) => {
  const date = new DateUtils({ utc: true, date: month })
  const [, success] = await RetrieveMonthWealthByCategories({
    month: date.get('month'),
  })

  const ArrowIcon = {
    positive: <TrendingUp className="size-4 text-feedback-success-accent" />,
    negative: <TrendingDown className="size-4 text-feedback-alert-accent" />,
  }

  if (!success) return <WealthCategoriesCardsError />

  return Object.entries(success.currentWealth).map(([key, value]) => {
    const difference = value.value - success.previousWealth[key].value
    return (
    <Card x-chunk={`wealth-category-card-${key}`} key={key}>
      <Card.Header className="pb-2">
         <Card.Description>{value.label}</Card.Description>
         <Card.Title className="text-4xl">
           {new Currency(value.value).format()}
         </Card.Title>
       </Card.Header>
       <Card.Content>
         <div className="text-xs text-muted-foreground flex items-center gap-1">
           {ArrowIcon[difference > 0 ? 'positive' : 'negative']}
           {new Currency(difference).format()} comparado com o ultimo registro
         </div>
       </Card.Content>
    </Card>
  )})
}

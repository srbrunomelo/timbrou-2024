import { right, TLeftRightReturn } from '@repo/utils/patterns/left-right'
import { getWealthByMonth } from '@/data-access/wealth/get-wealth-by-month'
import { TWealth } from '@/payload-types'
import { translateCategory } from '@/collections/options/wealth-options'
import { Currency } from '@repo/utils/currency'
import { DateUtils } from '@repo/utils/date'

type TRetrieveMonthParamsInvestments = {
  month?: number
}
type RetrieveMonthInvestmentsResult = {
  currentWealth: Record<string, { value: number; label: string }>
  previousWealth: Record<string, { value: number; label: string }>
}

function formatByCategory(wealth: TWealth) {
  const result = wealth.money.reduce(
    (acc, money) => {
      acc.total.value = new Currency(acc.total.value).add(money.amount).value
      acc[money.category] = {
        value: new Currency(acc[money.category]?.value ?? 0).add(money.amount).value,
        label: translateCategory(money.category) ?? '',
      }
      return acc
    },
    { total: { value: 0, label: 'Total' } } as Record<string, { value: number; label: string }>,
  )

  return result
}

export async function RetrieveMonthWealthByCategories({
  month,
}: TRetrieveMonthParamsInvestments): Promise<TLeftRightReturn<RetrieveMonthInvestmentsResult>> {
  const date = new DateUtils({ utc: true })
  const startMonth = date.set('month', month ?? date.get('month')).startOf('month')

  const wealth = await getWealthByMonth(startMonth.format('YYYY-MM-DDTHH:mm:ss.SSS[Z]'))

  const current = formatByCategory(wealth[0])
  const previous = formatByCategory(wealth[1])

  return right({
    currentWealth: current,
    previousWealth: previous,
  })
}

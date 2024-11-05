
import { getWealthByMonth } from '@/data-access/wealth/get-wealth-by-month'
import { TWealth } from '@/payload-types'
import { ElementType } from '@/shared/types/infer'
import { Currency } from '@repo/utils/currency'
import { DateUtils } from '@repo/utils/date'
import { right, TLeftRightReturn } from '@repo/utils/patterns/left-right'

type TRetrieveMonthParamsInvestments = {
  month?: number
}
type RetrieveMonthInvestmentsResult = {
  currentWealth: number
  previousWealth: number
  wealthPieChartData: Array<{ wealth: string; value: number; fill: string }>
}

type TMoney = ElementType<TWealth['money']>

function calculateWealthPieChartData(wealth: TWealth) {
  let totalWealth = new Currency(0)
  const wealthPieChartData: Array<{ wealth: string; value: number; fill: string }> = []

  ;(wealth.money ?? []).forEach((money: TMoney) => {
    totalWealth = totalWealth.add(money.amount)
    const wealthIndex = wealthPieChartData.findIndex((item) => item.wealth === money.category)

    if (wealthIndex === -1) {
      wealthPieChartData.push({
        wealth: money.category ?? '',
        value: money.amount,
        fill: `hsl(var(--chart-${wealthPieChartData.length + 1}))`,
      })
    } else {
      wealthPieChartData[wealthIndex].value = new Currency(
        wealthPieChartData[wealthIndex].value,
      ).add(money.amount).value
    }
  })

  return {
    totalWealth: totalWealth.value,
    wealthPieChartData,
  }
}

export async function RetrieveMonthWealth({
  month,
}: TRetrieveMonthParamsInvestments): Promise<TLeftRightReturn<RetrieveMonthInvestmentsResult>> {
  const date = new DateUtils({ utc: true })
  const startMonth = date.set('month', month ?? date.get('month')).startOf('month')

  // const endMonth = date
  //   .clone()
  //   .set('month', month ?? date.get('month'))
  //   .endOf('month')

  const wealth = await getWealthByMonth(startMonth.format('YYYY-MM-DDTHH:mm:ss.SSS[Z]'))

  const current = calculateWealthPieChartData(wealth[0])
  const previous = calculateWealthPieChartData(wealth[1])

  return right({
    currentWealth: current.totalWealth,
    previousWealth: previous.totalWealth,
    wealthPieChartData: current.wealthPieChartData,
  })
}

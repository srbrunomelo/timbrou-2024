import { Suspense } from 'react'
import { WealthPieChartCardSuccess } from './wealth-pie-chart-card.server'
import { WealthPieChartCardErrorBoundary } from './wealth-pie-chart-card-error'
import { WealthPieChartCardLoading } from './wealth-pie-chart-card-loading'

export const WealthPieChartCard = ({ month }: { month?: string }) => {
  return (
    <WealthPieChartCardErrorBoundary>
      <Suspense fallback={<WealthPieChartCardLoading />}>
        <WealthPieChartCardSuccess month={month} />
      </Suspense>
    </WealthPieChartCardErrorBoundary>
  )
}

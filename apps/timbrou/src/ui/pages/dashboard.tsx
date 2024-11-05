import { WealthCategoriesCards } from '../widget/wealth-categories-cards/wealth-categories-cards'
import { WealthPieChartCard } from '../widget/wealth-pie-chart-card/wealth-pie-chart-card'

type DashboardProps = {
  searchParams: {
    month: string
  }
}

export const DashboardPage = ({ searchParams }: DashboardProps) => {
  return (
    <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
      <div className="grid items-start gap-4 md:gap-8 col-span-full">
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
          <WealthCategoriesCards month={searchParams.month} />
        </div>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
          <WealthPieChartCard month={searchParams.month} />
        </div>
      </div>
    </main>
  )
}

export default DashboardPage

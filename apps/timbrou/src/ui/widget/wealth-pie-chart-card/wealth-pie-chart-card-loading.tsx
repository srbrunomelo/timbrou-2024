
import { Card } from '@repo/ui/card'
import { Skeleton } from '@repo/ui/skeleton'

export const WealthPieChartCardLoading = () => {
  return (
    <Card x-chunk="month-investments-card">
      <Card.Header className="pb-2">
        <Card.Description>Divisão de patrimônio</Card.Description>
      </Card.Header>
      <Card.Content>
        <div className="size-[250px] mx-auto">
          <Skeleton className="size-[250px] rounded-full" />
        </div>
      </Card.Content>
    </Card>
  )
}

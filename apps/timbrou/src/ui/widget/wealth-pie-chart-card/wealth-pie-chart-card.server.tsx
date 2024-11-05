import { RetrieveMonthWealth } from "@/features/wealth/retrieve-month-wealth";
import { DateUtils } from "@repo/utils/date";
import { Card } from "@repo/ui/card";
import { WealthPieChartCardError } from "./wealth-pie-chart-card-error";
import { WealthPieChartCardClient } from "./wealth-pie-chart-card.client";
import { TrendingDown, TrendingUp } from "lucide-react";
import { Currency } from "@repo/utils/currency";

export const WealthPieChartCardSuccess = async ({
  month,
}: {
  month?: string;
  year?: string;
}) => {
  const date = new DateUtils({ utc: true, date: month });
  const [, success] = await RetrieveMonthWealth({
    month: date.get("month"),
  });

  if (!success) return <WealthPieChartCardError />;

  const TrendIcon =
    success.currentWealth - success.previousWealth > 0
      ? TrendingUp
      : TrendingDown;

  return (
    <Card x-chunk="month-investments-card">
      <Card.Header className="pb-2">
        <Card.Description>Divisão de patrimônio</Card.Description>
      </Card.Header>
      <Card.Content>
        <WealthPieChartCardClient
          totalWealth={success.currentWealth}
          data={success.wealthPieChartData}
        />
      </Card.Content>
      <Card.Footer className="flex-col gap-2 text-sm text-left items-start">
        <div className="flex items-center gap-2 font-medium leading-none">
          Diferença de{" "}
          {new Currency(success.currentWealth)
            .subtract(success.previousWealth)
            .format()}{" "}
          em relação ao registro anterior <TrendIcon className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total visitors for the last 6 months
        </div>
      </Card.Footer>
    </Card>
  );
};

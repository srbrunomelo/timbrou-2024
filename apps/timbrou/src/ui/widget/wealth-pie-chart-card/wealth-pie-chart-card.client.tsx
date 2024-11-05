"use client";

import { Label, Pie, PieChart } from "recharts";
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@repo/ui/chart'
import React, { useMemo } from 'react'
import { translateCategory } from "@/collections/options/wealth-options";

export const description = "A donut chart with text";

export const WealthPieChartCardClient = ({
  totalWealth,
  data,
}: {
  totalWealth: number;
  data: Array<{ wealth: string; value: number; fill: string }>;
}) => {
  const chartConfig = useMemo(() => {
    const customChartConfig: ChartConfig = {
      wealth: {
        label: "Patrimônio",
      },
    };
    data.forEach((item) => {
      customChartConfig[item.wealth] = {
        label: `${translateCategory(item.wealth)} `,
        color: item.fill,
      };
    });
    return customChartConfig;
  }, [data]);

  return (
    <ChartContainer config={chartConfig} className="mx-auto size-[300px]">
      <PieChart width={300} height={300}>
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent hideLabel />}
        />
        <Pie
          data={data}
          dataKey="value"
          nameKey="wealth"
          innerRadius={90}
          strokeWidth={5}
        >
          <Label
            content={({ viewBox }) => {
              if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                return (
                  <text
                    x={viewBox.cx}
                    y={viewBox.cy}
                    textAnchor="middle"
                    dominantBaseline="middle"
                  >
                    <tspan
                      x={viewBox.cx}
                      y={viewBox.cy}
                      className="fill-foreground text-3xl font-bold"
                    >
                      {totalWealth}
                    </tspan>
                    <tspan
                      x={viewBox.cx}
                      y={(viewBox.cy || 0) + 24}
                      className="fill-muted-foreground"
                    >
                      Patrimônio
                    </tspan>
                  </text>
                );
              }
            }}
          />
        </Pie>
      </PieChart>
    </ChartContainer>
  );
};

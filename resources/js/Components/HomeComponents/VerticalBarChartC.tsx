import { Bar, BarChart, XAxis, YAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

interface ChartDataInterface {
  title: string;
  amount: number;
  fill: string;
}

interface VerticalBarChartCProps {
  title?: string;
  chartData: ChartDataInterface[];
  chartConfig: ChartConfig;
}

export const VerticalBarChartC = ({
  title = "",
  chartData,
  chartConfig,
}: VerticalBarChartCProps) => {
  return (
    <Card>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chartData}
            layout='vertical'
            margin={{
              left: 0,
            }}
          >
            <YAxis
              dataKey='title'
              type='category'
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) =>
                String(chartConfig[value as keyof typeof chartConfig]?.label)
              }
            />
            <XAxis dataKey='amount' type='number' hide />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey='amount' layout='vertical' radius={5} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

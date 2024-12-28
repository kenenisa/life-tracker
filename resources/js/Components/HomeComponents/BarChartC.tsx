import { CartesianGrid, Bar, BarChart, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/Components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/Components/ui/chart";

interface ChartDataInterface {
  month: string;
  [key: string]: number | string;
}

interface ChartConfigInterface {
  [key: string]: { label: string; color: string };
}

interface LineChartCProps {
  title: string;
  timeframe: string;
  chartData: ChartDataInterface[];
  chartConfig: ChartConfig;
  datakeys: string[];
}

export const BarChartC = ({
  title,
  timeframe,
  chartData,
  chartConfig,
  datakeys,
}: LineChartCProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{timeframe}</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey='month'
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            {datakeys.map((item, index) => (
              <Bar
                dataKey={item}
                type='monotone'
                fill={`var(--color-${item})`}
                radius={4}
                key={index}
              />
            ))}
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

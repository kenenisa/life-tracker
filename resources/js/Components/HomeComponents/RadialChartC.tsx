import { RadialBar, RadialBarChart } from "recharts";

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
import { title } from "process";
interface ChartDataInterface {
  title: string;
  amount: number;
  fill: string;
}

interface RadialchartCProps {
  title: string;
  timeframe: string;
  chartData: ChartDataInterface[];
  chartConfig: ChartConfig;
}

export const RadialChartC = ({
  title,
  timeframe,
  chartData,
  chartConfig,
}: RadialchartCProps) => {
  return (
    <Card className='flex flex-col'>
      <CardHeader className='items-center pb-0'>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{timeframe}</CardDescription>
      </CardHeader>
      <CardContent className='flex-1 pb-0'>
        <ChartContainer
          config={chartConfig}
          className='mx-auto aspect-square max-h-[250px]'
        >
          <RadialBarChart data={chartData} innerRadius={30} outerRadius={110}>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel nameKey='title' />}
            />
            <RadialBar dataKey='amount' background />
          </RadialBarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

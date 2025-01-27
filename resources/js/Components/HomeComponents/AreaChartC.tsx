import * as React from "react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ChartDataInterface {
  date: string;
  [key: string]: number | string;
}
interface AreaChartCProps {
  title: string;
  description: string;
  chartData: ChartDataInterface[];
  chartConfig: ChartConfig;
  datakeys: string[];
}

export const AreaChartC = ({
  title,
  description,
  chartData,
  chartConfig,
  datakeys,
}: AreaChartCProps) => {
  const [timeRange, setTimeRange] = React.useState("7d");

  const calcurateDates = () => {
    const referenceDate = new Date();
    let daysToSubtract = 90;
    if (timeRange === "30d") {
      daysToSubtract = 30;
    } else if (timeRange === "7d") {
      daysToSubtract = 7;
    }
    const startDate = new Date(referenceDate);

    const temporaryChartData = [];
    startDate.setDate(startDate.getDate() - daysToSubtract);
    for (
      let date = startDate;
      date <= referenceDate;
      date.setDate(date.getDate() + 1)
    ) {
      const formattedDate = String(date.toISOString().slice(0, 10));
      let found = false;
      for (const item of chartData) {
        if (item.date === formattedDate) {
          found = true;
          temporaryChartData.push(item);
          break;
        }
      }
      if (!found) {
        const newData: ChartDataInterface = {
          date: formattedDate,
          ...datakeys.reduce((acc, key) => ({ ...acc, [key]: 0 }), {}),
        };
        temporaryChartData.push(newData);
      }
    }
    const sortedData = temporaryChartData.sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return dateA.getTime() - dateB.getTime();
    });
    return sortedData;
  };

  const filteredData = calcurateDates();

  return (
    <Card>
      <CardHeader className='flex items-center gap-2 space-y-0 border-b py-5 sm:flex-row'>
        <div className='grid flex-1 gap-1 text-center sm:text-left'>
          <CardTitle>{title}</CardTitle>
          <CardDescription>
            Showing total visitors for the last 3 months
          </CardDescription>
        </div>
        <Select value={timeRange} onValueChange={setTimeRange}>
          <SelectTrigger
            className='w-[160px] rounded-lg sm:ml-auto'
            aria-label='Select a value'
          >
            <SelectValue placeholder='Last 3 months' />
          </SelectTrigger>
          <SelectContent className='rounded-xl'>
            <SelectItem value='90d' className='rounded-lg'>
              Last 3 months
            </SelectItem>
            <SelectItem value='30d' className='rounded-lg'>
              Last 30 days
            </SelectItem>
            <SelectItem value='7d' className='rounded-lg'>
              Last 7 days
            </SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className='px-2 pt-4 sm:px-6 sm:pt-6'>
        <ChartContainer
          config={chartConfig}
          className='aspect-auto h-[250px] w-full'
        >
          <AreaChart data={filteredData}>
            <defs>
              {datakeys.map((item, index) => (
                <linearGradient id={`fill${item}`} x1='0' y1='0' x2='0' y2='1'>
                  <stop
                    offset='5%'
                    stopColor={`var(--color-${item})`}
                    stopOpacity={0.8}
                  />
                  <stop
                    offset='95%'
                    stopColor={`var(--color-${item})`}
                    stopOpacity={0.1}
                  />
                </linearGradient>
              ))}
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey='date'
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value);
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                });
              }}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    });
                  }}
                  indicator='dot'
                />
              }
            />
            {datakeys.map((item, index) => (
              <Area
                dataKey={item}
                type='natural'
                fill={`url(#fill${item})`}
                stroke={`var(--color-${item})`}
                stackId='a'
              />
            ))}
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

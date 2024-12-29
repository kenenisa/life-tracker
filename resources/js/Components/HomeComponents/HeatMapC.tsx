import React from "react";
import HeatMap from "@uiw/react-heat-map";
import Tooltip from "@uiw/react-tooltip";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface HeatMapDataInterface {
  date: string;
  count: number;
}
interface HeatMapCProps {
  color?: string;
  value: HeatMapDataInterface[];
}

export const HeatMapC = ({ value, color = "#000" }: HeatMapCProps) => {
  const [year, setYear] = React.useState(String(new Date().getFullYear()));

  return (
    <Card>
      <CardContent>
        <div className='grid grid-cols-[3fr,1fr] gap-4 p-2'>
          <HeatMap
            value={value}
            weekLabels={["", "Mon", "", "Wed", "", "Fri", ""]}
            monthLabels={[
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec",
            ]}
            startDate={new Date(`${year}/01/01`)}
            endDate={new Date(`${year}/12/31`)}
            width={940}
            height={170}
            rectSize={15}
            panelColors={{
              1: color,
            }}
            rectProps={{
              rx: 4,
            }}
            rectRender={(props, data) => {
              // if (!data.count) return <rect {...props} />;
              return (
                <Tooltip
                  placement='top'
                  content={new Date(data.date).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                  })}
                >
                  <rect {...props} />
                </Tooltip>
              );
            }}
          />
          <Select value={year} onValueChange={setYear}>
            <SelectTrigger
              className='w-[160px] rounded-lg sm:ml-auto'
              aria-label='Select a value'
            >
              <SelectValue placeholder={year} />
            </SelectTrigger>
            <SelectContent className='rounded-xl'>
              {[
                String(new Date().getFullYear()),
                String(new Date().getFullYear() - 1),
                String(new Date().getFullYear() - 2),
              ].map((item, index) => (
                <SelectItem value={item} key={index} className='rounded-lg'>
                  {item}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </CardContent>
    </Card>
  );
};

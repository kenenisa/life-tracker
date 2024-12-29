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
} from "@/Components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/Components/ui/select";

interface HeatMapDataInterface {
  date: string;
  count: number;
}
interface HeatMapCProps {
  value: HeatMapDataInterface[];
}

export const HeatMapC = ({ value }: HeatMapCProps) => {
  const [year, setYear] = React.useState(String(new Date().getFullYear()));

  return (
    <Card>
      <CardContent>
        <div className='grid grid-cols-[2fr,1fr] gap-4 p-2'>
          <HeatMap
            value={value}
            weekLabels={["", "Mon", "", "Wed", "", "Fri", ""]}
            startDate={new Date(`${year}/01/01`)}
            endDate={new Date(`${year}/12/31`)}
            width={800}
            height={130}
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
                <SelectItem value={item} className='rounded-lg'>
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
// rectRender={(props, data) => {
//   // if (!data.count) return <rect {...props} />;
//   return (
//     <Tooltip placement='top' content={`count: ${data.count || 0}`}>
//       <rect {...props} />
//     </Tooltip>
//   );
// }}

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { BarChartC } from "@/components/HomeComponents/BarChartC";
import { LineChartC } from "@/components/HomeComponents/LineChartC";

interface DataInterface {
  income: number;
  expense: number;
  categoryId: number;
  id: number;
  created_at: string;
  updated_at: string;
  user_id: number;
}

export function ResizableC({
  chartData,
  chartConfig,
  datakeys,
}: {
  chartData: any;
  chartConfig: any;
  datakeys: any;
}) {
  return (
    <ResizablePanelGroup
      direction='horizontal'
      className='min-h-[200px]  rounded-lg border md:min-w-[450px]'
    >
      <ResizablePanel defaultSize={33}>
        <BarChartC
          title='Area Chart'
          description='January - June 2024'
          chartData={chartData}
          chartConfig={chartConfig}
          datakeys={datakeys}
        />
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={33}>
        <LineChartC
          title='visuals'
          description='January - June 2024'
          chartData={chartData}
          chartConfig={chartConfig}
          datakeys={datakeys}
        />
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}

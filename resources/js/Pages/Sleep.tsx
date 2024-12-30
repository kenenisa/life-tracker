import DefaultLayout from "@/Layouts/DefaultLayout";
import { PageProps } from "@/types";
import { Head, Link } from "@inertiajs/react";
import { LineChartC } from "@/components/HomeComponents/LineChartC";
import { BarChartC } from "@/components/HomeComponents/BarChartC";
import { PieChartC } from "@/components/HomeComponents/PieChartC";
import { RadialChartC } from "@/components/HomeComponents/RadialChartC";
import { AreaChartC } from "@/components/HomeComponents/AreaChartC";
import { CardSmallC } from "@/components/HomeComponents/CardSmallC";
import { ResizableC } from "@/components/HomeComponents/ResizableC";
import { HeatMapC } from "@/components/HomeComponents/HeatMapC";
import { TableC } from "@/components/HomeComponents/TableC";
import { VerticalBarChartC } from "@/components/HomeComponents/VerticalBarChartC";
import { Button } from "@/components/ui/button";

export default function Welcome({
  auth,
  laravelVersion,
  phpVersion,
}: PageProps<{ laravelVersion: string; phpVersion: string }>) {
  const handleImageError = () => {
    document.getElementById("screenshot-container")?.classList.add("!hidden");
    document.getElementById("docs-card")?.classList.add("!row-span-1");
    document.getElementById("docs-card-content")?.classList.add("!flex-row");
    document.getElementById("background")?.classList.add("!hidden");
  };

  return (
    <>
      <DefaultLayout>
        <Head title='Welcome' />
        <div className='flex justify-end'>
          <Link href='/dashboard' className='btn'>
            <Button>Add sleep</Button>
          </Link>
        </div>
        <TableC
          datakeys={["start", "end", "length", "quality"]}
          value={[
            {
              start: "22:00",

              end: "07:30",

              length: "9:50",

              quality: "good",
            },

            {
              start: "23:30",

              end: "06:00",

              length: "6:50",

              quality: "average",
            },

            {
              start: "21:45",

              end: "05:00",

              length: "7:25",

              quality: "good",
            },

            {
              start: "23:00",

              end: "08:15",

              length: "9:25",

              quality: "good",
            },

            {
              start: "22:30",

              end: "05:45",

              length: "7:25",

              quality: "good",
            },
            {
              start: "23:00",

              end: "07:00",

              length: "8:00",

              quality: "good",
            },

            {
              start: "22:30",

              end: "06:30",

              length: "8:00",

              quality: "good",
            },

            {
              start: "23:15",

              end: "06:45",

              length: "7:30",

              quality: "good",
            },

            {
              start: "22:45",

              end: "06:15",

              length: "7:30",

              quality: "good",
            },

            {
              start: "23:00",

              end: "07:00",

              length: "8:00",

              quality: "good",
            },

            {
              start: "22:30",

              end: "06:30",

              length: "8:00",

              quality: "good",
            },

            {
              start: "23:15",

              end: "06:45",

              length: "7:30",

              quality: "good",
            },

            {
              start: "22:45",

              end: "06:15",

              length: "7:30",

              quality: "good",
            },

            {
              start: "23:00",

              end: "07:00",

              length: "8:00",

              quality: "good",
            },

            {
              start: "22:30",

              end: "06:30",

              length: "8:00",

              quality: "good",
            },

            {
              start: "23:15",

              end: "06:45",

              length: "7:30",

              quality: "good",
            },

            {
              start: "22:45",

              end: "06:15",

              length: "7:30",

              quality: "good",
            },

            {
              start: "23:00",

              end: "07:00",

              length: "8:00",

              quality: "good",
            },

            {
              start: "22:30",

              end: "06:30",

              length: "8:00",

              quality: "good",
            },

            {
              start: "23:15",

              end: "06:45",

              length: "7:30",

              quality: "good",
            },
          ]}
        />
        <HeatMapC
          value={[
            { date: "2024/12/12", count: 1 },
            { date: "2024/01/12", count: 20 },
            { date: "2024/01/13", count: 10 },
            { date: "2024/04/11", count: 2 },
            { date: "2024/05/01", count: 5 },
            { date: "2024/05/02", count: 5 },
            { date: "2022/05/04", count: 11 },
            { date: "2023/05/05", count: 5 },
            { date: "2024/02/15", count: 7 },
            { date: "2024/03/08", count: 3 },
            { date: "2024/06/20", count: 12 },
            { date: "2024/07/04", count: 1 },
            { date: "2024/08/18", count: 9 },
            { date: "2024/09/10", count: 5 },
            { date: "2024/10/25", count: 4 },
            { date: "2024/11/17", count: 6 },
            { date: "2024/03/21", count: 15 },
            { date: "2024/09/03", count: 8 },
            { date: "2024/02/09", count: 11 },
            { date: "2024/07/27", count: 4 },
            { date: "2024/11/05", count: 13 },
            { date: "2024/05/18", count: 6 },
            { date: "2024/10/12", count: 9 },
            { date: "2024/01/28", count: 17 },
            { date: "2024/08/01", count: 2 },
            { date: "2024/06/13", count: 14 },
            { date: "2024/01/05", count: 8 },
            { date: "2024/02/20", count: 1 },
            { date: "2024/03/12", count: 16 },
            { date: "2024/04/03", count: 4 },
            { date: "2024/05/15", count: 9 },
            { date: "2024/06/25", count: 2 },
            { date: "2024/07/10", count: 11 },
            { date: "2024/08/22", count: 3 },
            { date: "2024/09/18", count: 7 },
            { date: "2024/10/05", count: 10 },
            { date: "2024/11/20", count: 6 },
            { date: "2024/12/05", count: 14 },
            { date: "2024/01/18", count: 5 },
            { date: "2024/02/25", count: 2 },
            { date: "2024/03/17", count: 13 },
            { date: "2024/04/08", count: 8 },
            { date: "2024/05/22", count: 1 },
            { date: "2024/06/28", count: 9 },
            { date: "2024/07/15", count: 4 },
            { date: "2024/08/27", count: 6 },
            { date: "2024/09/23", count: 12 },
            { date: "2024/10/10", count: 3 },
            { date: "2024/11/25", count: 7 },
            { date: "2024/12/10", count: 5 },
            { date: "2024/01/23", count: 11 },
            { date: "2024/02/28", count: 6 },
            { date: "2024/03/20", count: 2 },
            { date: "2024/04/12", count: 15 },
            { date: "2024/05/26", count: 8 },
            { date: "2024/06/30", count: 1 },
            { date: "2024/07/17", count: 9 },
            { date: "2024/08/29", count: 4 },
            { date: "2024/09/25", count: 6 },
            { date: "2024/10/12", count: 12 },
            { date: "2024/11/27", count: 3 },
            { date: "2024/12/13", count: 7 },
            { date: "2024/01/26", count: 10 },
            { date: "2024/02/23", count: 5 },
            { date: "2024/03/19", count: 2 },
            { date: "2024/04/15", count: 14 },
            { date: "2024/05/29", count: 8 },
            { date: "2024/07/02", count: 1 },
            { date: "2024/08/05", count: 9 },
            { date: "2024/09/28", count: 4 },
            { date: "2024/10/15", count: 6 },
            { date: "2024/11/30", count: 12 },
            { date: "2024/12/15", count: 3 },
            { date: "2024/01/30", count: 7 },
            { date: "2024/02/26", count: 11 },
            { date: "2024/03/22", count: 5 },
            { date: "2024/04/17", count: 2 },
            { date: "2024/05/31", count: 10 },
            { date: "2024/07/05", count: 8 },
            { date: "2024/08/07", count: 1 },
            { date: "2024/09/30", count: 9 },
            { date: "2024/10/17", count: 4 },
            { date: "2024/12/01", count: 6 },
          ]}
          baseColor='#bb0000'
          secondColor='#efef09'
          thirdColor='#009000'
        />
      </DefaultLayout>
    </>
  );
}

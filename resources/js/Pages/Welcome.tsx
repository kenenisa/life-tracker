import DefaultLayout from "@/Layouts/DefaultLayout";
import { PageProps } from "@/types";
import { Head, Link } from "@inertiajs/react";
import { LineChartC } from "@/Components/HomeComponents/LineChartC";
import { BarChartC } from "@/Components/HomeComponents/BarChartC";
import { PieChartC } from "@/Components/HomeComponents/PieChartC";
import { RadialChartC } from "@/Components/HomeComponents/RadialChartC";
import { AreaChartC } from "@/Components/HomeComponents/AreaChartC";
import { table } from "console";

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
        <AreaChartC
          title='Area Chart'
          description='January - June 2024'
          chartData={[
            { date: "2024-04-01", desktop: 222, mobile: 150, tablet: 180 },
            { date: "2024-04-02", desktop: 97, mobile: 180, tablet: 120 },
            { date: "2024-04-03", desktop: 167, mobile: 120, tablet: 150 },
            { date: "2024-04-04", desktop: 242, mobile: 260, tablet: 200 },
            { date: "2024-04-05", desktop: 373, mobile: 290, tablet: 250 },
            { date: "2024-04-06", desktop: 301, mobile: 340, tablet: 300 },
            { date: "2024-04-07", desktop: 245, mobile: 180, tablet: 170 },
            { date: "2024-04-08", desktop: 409, mobile: 320, tablet: 280 },
            { date: "2024-04-09", desktop: 59, mobile: 110, tablet: 90 },
            { date: "2024-04-10", desktop: 261, mobile: 190, tablet: 220 },
            { date: "2024-04-11", desktop: 327, mobile: 350, tablet: 300 },
            { date: "2024-04-12", desktop: 292, mobile: 210, tablet: 180 },
            { date: "2024-04-13", desktop: 342, mobile: 380, tablet: 320 },
            { date: "2024-04-14", desktop: 137, mobile: 220, tablet: 150 },
            { date: "2024-04-15", desktop: 120, mobile: 170, tablet: 110 },
            { date: "2024-04-16", desktop: 138, mobile: 190, tablet: 130 },
            { date: "2024-04-17", desktop: 446, mobile: 360, tablet: 380 },
            { date: "2024-04-18", desktop: 364, mobile: 410, tablet: 350 },
            { date: "2024-04-19", desktop: 243, mobile: 180, tablet: 200 },
            { date: "2024-04-20", desktop: 89, mobile: 150, tablet: 110 },
            { date: "2024-04-21", desktop: 137, mobile: 200, tablet: 140 },
            { date: "2024-04-22", desktop: 224, mobile: 170, tablet: 180 },
            { date: "2024-04-23", desktop: 138, mobile: 230, tablet: 160 },
            { date: "2024-04-24", desktop: 387, mobile: 290, tablet: 300 },
            { date: "2024-04-25", desktop: 215, mobile: 250, tablet: 220 },
            { date: "2024-04-26", desktop: 75, mobile: 130, tablet: 100 },
            { date: "2024-04-27", desktop: 383, mobile: 420, tablet: 360 },
            { date: "2024-04-28", desktop: 122, mobile: 180, tablet: 150 },
            { date: "2024-04-29", desktop: 315, mobile: 240, tablet: 260 },
            { date: "2024-04-30", desktop: 454, mobile: 380, tablet: 400 },
            { date: "2024-05-01", desktop: 165, mobile: 220, tablet: 180 },
            { date: "2024-05-02", desktop: 293, mobile: 310, tablet: 250 },
            { date: "2024-05-03", desktop: 247, mobile: 190, tablet: 200 },
            { date: "2024-05-04", desktop: 385, mobile: 420, tablet: 360 },
            { date: "2024-05-05", desktop: 481, mobile: 390, tablet: 400 },
            { date: "2024-05-06", desktop: 498, mobile: 520, tablet: 450 },
            { date: "2024-05-07", desktop: 388, mobile: 300, tablet: 280 },
            { date: "2024-05-08", desktop: 149, mobile: 210, tablet: 160 },
            { date: "2024-05-09", desktop: 227, mobile: 180, tablet: 190 },
            { date: "2024-05-10", desktop: 293, mobile: 330, tablet: 270 },
            { date: "2024-05-11", desktop: 335, mobile: 270, tablet: 250 },
            { date: "2024-05-12", desktop: 197, mobile: 240, tablet: 200 },
            { date: "2024-05-13", desktop: 197, mobile: 160, tablet: 140 },
            { date: "2024-05-14", desktop: 448, mobile: 490, tablet: 420 },
            { date: "2024-05-15", desktop: 473, mobile: 380, tablet: 350 },
            { date: "2024-05-16", desktop: 338, mobile: 400, tablet: 320 },
            { date: "2024-05-17", desktop: 499, mobile: 420, tablet: 380 },
            { date: "2024-05-18", desktop: 315, mobile: 350, tablet: 300 },
            { date: "2024-05-19", desktop: 235, mobile: 180, tablet: 160 },
            { date: "2024-05-20", desktop: 177, mobile: 230, tablet: 190 },
            { date: "2024-05-21", desktop: 82, mobile: 140, tablet: 110 },
            { date: "2024-05-22", desktop: 81, mobile: 120, tablet: 100 },
            { date: "2024-05-23", desktop: 252, mobile: 290, tablet: 240 },
            { date: "2024-05-24", desktop: 294, mobile: 220, tablet: 250 },
            { date: "2024-05-25", desktop: 201, mobile: 250, tablet: 220 },
            { date: "2024-05-26", desktop: 213, mobile: 170, tablet: 180 },
            { date: "2024-05-27", desktop: 420, mobile: 460, tablet: 400 },
            { date: "2024-05-28", desktop: 233, mobile: 190, tablet: 200 },
            { date: "2024-05-29", desktop: 78, mobile: 130, tablet: 110 },
            { date: "2024-05-30", desktop: 340, mobile: 280, tablet: 300 },
            { date: "2024-05-31", desktop: 178, mobile: 230, tablet: 200 },
            { date: "2024-06-01", desktop: 178, mobile: 200, tablet: 180 },
            { date: "2024-06-02", desktop: 470, mobile: 410, tablet: 360 },
            { date: "2024-06-03", desktop: 103, mobile: 160, tablet: 140 },
            { date: "2024-06-04", desktop: 439, mobile: 380, tablet: 350 },
            { date: "2024-06-05", desktop: 88, mobile: 140, tablet: 120 },
            { date: "2024-06-06", desktop: 294, mobile: 250, tablet: 220 },
            { date: "2024-06-07", desktop: 323, mobile: 370, tablet: 320 },
            { date: "2024-06-08", desktop: 385, mobile: 320, tablet: 280 },
            { date: "2024-06-09", desktop: 438, mobile: 480, tablet: 420 },
            { date: "2024-06-10", desktop: 155, mobile: 200, tablet: 180 },
            { date: "2024-06-11", desktop: 92, mobile: 150, tablet: 130 },
            { date: "2024-06-12", desktop: 492, mobile: 420, tablet: 380 },
            { date: "2024-06-13", desktop: 81, mobile: 130, tablet: 110 },
            { date: "2024-06-14", desktop: 426, mobile: 380, tablet: 340 },
            { date: "2024-06-15", desktop: 307, mobile: 350, tablet: 300 },
            { date: "2024-06-16", desktop: 371, mobile: 310, tablet: 270 },
            { date: "2024-06-17", desktop: 475, mobile: 520, tablet: 460 },
            { date: "2024-06-18", desktop: 107, mobile: 170, tablet: 150 },
            { date: "2024-06-19", desktop: 341, mobile: 290, tablet: 250 },
            { date: "2024-06-20", desktop: 408, mobile: 450, tablet: 400 },
            { date: "2024-06-21", desktop: 169, mobile: 210, tablet: 180 },
            { date: "2024-06-22", desktop: 317, mobile: 270, tablet: 240 },
            { date: "2024-06-23", desktop: 480, mobile: 530, tablet: 470 },
            { date: "2024-06-24", desktop: 132, mobile: 180, tablet: 160 },
            { date: "2024-06-25", desktop: 141, mobile: 190, tablet: 170 },
            { date: "2024-06-26", desktop: 434, mobile: 380, tablet: 340 },
            { date: "2024-06-27", desktop: 448, mobile: 490, tablet: 430 },
            { date: "2024-06-28", desktop: 149, mobile: 200, tablet: 180 },
            { date: "2024-06-29", desktop: 103, mobile: 160, tablet: 140 },
            { date: "2024-06-30", desktop: 446, mobile: 400, tablet: 360 },
          ]}
          chartConfig={{
            amount: {
              label: "Amount",
            },
            desktop: {
              label: "Desktop",
              color: "hsl(var(--chart-1))",
            },
            mobile: {
              label: "Mobile",
              color: "hsl(var(--chart-2))",
            },
            tablet: {
              label: "Tablet",
              color: "hsl(var(--chart-3))",
            },
          }}
          datakeys={["desktop", "mobile", "tablet"]}
        />
        <BarChartC
          title='Line Chart - Single'
          timeframe='January - June 2024'
          chartData={[
            { month: "January", desktop: 186, mobile: 93 },
            { month: "February", desktop: 305, mobile: 552 },
            { month: "March", desktop: 237, mobile: 118 },
            { month: "April", desktop: 73, mobile: 36 },
            { month: "May", desktop: 209, mobile: 104 },
            { month: "June", desktop: 214, mobile: 107 },
          ]}
          chartConfig={{
            desktop: {
              label: "Desktop",
              color: "hsl(var(--chart-1))",
            },
            mobile: {
              label: "Mobile",
              color: "hsl(var(--chart-2))",
            },
          }}
          datakeys={["desktop", "mobile"]}
          stacked={false}
        />
        <LineChartC
          title='Line Chart - Single'
          description='January - June 2024'
          chartData={[
            { date: "2024-04-01", desktop: 222, mobile: 150, tablet: 180 },
            { date: "2024-04-02", desktop: 97, mobile: 180, tablet: 120 },
            { date: "2024-04-03", desktop: 167, mobile: 120, tablet: 150 },
            { date: "2024-04-04", desktop: 242, mobile: 260, tablet: 200 },
            { date: "2024-04-05", desktop: 373, mobile: 290, tablet: 250 },
            { date: "2024-04-06", desktop: 301, mobile: 340, tablet: 300 },
            { date: "2024-04-07", desktop: 245, mobile: 180, tablet: 170 },
            { date: "2024-04-08", desktop: 409, mobile: 320, tablet: 280 },
            { date: "2024-04-09", desktop: 59, mobile: 110, tablet: 90 },
            { date: "2024-04-10", desktop: 261, mobile: 190, tablet: 220 },
            { date: "2024-04-11", desktop: 327, mobile: 350, tablet: 300 },
            { date: "2024-04-12", desktop: 292, mobile: 210, tablet: 180 },
            { date: "2024-04-13", desktop: 342, mobile: 380, tablet: 320 },
            { date: "2024-04-14", desktop: 137, mobile: 220, tablet: 150 },
            { date: "2024-04-15", desktop: 120, mobile: 170, tablet: 110 },
            { date: "2024-04-16", desktop: 138, mobile: 190, tablet: 130 },
            { date: "2024-04-17", desktop: 446, mobile: 360, tablet: 380 },
            { date: "2024-04-18", desktop: 364, mobile: 410, tablet: 350 },
            { date: "2024-04-19", desktop: 243, mobile: 180, tablet: 200 },
            { date: "2024-04-20", desktop: 89, mobile: 150, tablet: 110 },
            { date: "2024-04-21", desktop: 137, mobile: 200, tablet: 140 },
            { date: "2024-04-22", desktop: 224, mobile: 170, tablet: 180 },
            { date: "2024-04-23", desktop: 138, mobile: 230, tablet: 160 },
            { date: "2024-04-24", desktop: 387, mobile: 290, tablet: 300 },
            { date: "2024-04-25", desktop: 215, mobile: 250, tablet: 220 },
            { date: "2024-04-26", desktop: 75, mobile: 130, tablet: 100 },
            { date: "2024-04-27", desktop: 383, mobile: 420, tablet: 360 },
            { date: "2024-04-28", desktop: 122, mobile: 180, tablet: 150 },
            { date: "2024-04-29", desktop: 315, mobile: 240, tablet: 260 },
            { date: "2024-04-30", desktop: 454, mobile: 380, tablet: 400 },
            { date: "2024-05-01", desktop: 165, mobile: 220, tablet: 180 },
            { date: "2024-05-02", desktop: 293, mobile: 310, tablet: 250 },
            { date: "2024-05-03", desktop: 247, mobile: 190, tablet: 200 },
            { date: "2024-05-04", desktop: 385, mobile: 420, tablet: 360 },
            { date: "2024-05-05", desktop: 481, mobile: 390, tablet: 400 },
            { date: "2024-05-06", desktop: 498, mobile: 520, tablet: 450 },
            { date: "2024-05-07", desktop: 388, mobile: 300, tablet: 280 },
            { date: "2024-05-08", desktop: 149, mobile: 210, tablet: 160 },
            { date: "2024-05-09", desktop: 227, mobile: 180, tablet: 190 },
            { date: "2024-05-10", desktop: 293, mobile: 330, tablet: 270 },
            { date: "2024-05-11", desktop: 335, mobile: 270, tablet: 250 },
            { date: "2024-05-12", desktop: 197, mobile: 240, tablet: 200 },
            { date: "2024-05-13", desktop: 197, mobile: 160, tablet: 140 },
            { date: "2024-05-14", desktop: 448, mobile: 490, tablet: 420 },
            { date: "2024-05-15", desktop: 473, mobile: 380, tablet: 350 },
            { date: "2024-05-16", desktop: 338, mobile: 400, tablet: 320 },
            { date: "2024-05-17", desktop: 499, mobile: 420, tablet: 380 },
            { date: "2024-05-18", desktop: 315, mobile: 350, tablet: 300 },
            { date: "2024-05-19", desktop: 235, mobile: 180, tablet: 160 },
            { date: "2024-05-20", desktop: 177, mobile: 230, tablet: 190 },
            { date: "2024-05-21", desktop: 82, mobile: 140, tablet: 110 },
            { date: "2024-05-22", desktop: 81, mobile: 120, tablet: 100 },
            { date: "2024-05-23", desktop: 252, mobile: 290, tablet: 240 },
            { date: "2024-05-24", desktop: 294, mobile: 220, tablet: 250 },
            { date: "2024-05-25", desktop: 201, mobile: 250, tablet: 220 },
            { date: "2024-05-26", desktop: 213, mobile: 170, tablet: 180 },
            { date: "2024-05-27", desktop: 420, mobile: 460, tablet: 400 },
            { date: "2024-05-28", desktop: 233, mobile: 190, tablet: 200 },
            { date: "2024-05-29", desktop: 78, mobile: 130, tablet: 110 },
            { date: "2024-05-30", desktop: 340, mobile: 280, tablet: 300 },
            { date: "2024-05-31", desktop: 178, mobile: 230, tablet: 200 },
            { date: "2024-06-01", desktop: 178, mobile: 200, tablet: 180 },
            { date: "2024-06-02", desktop: 470, mobile: 410, tablet: 360 },
            { date: "2024-06-03", desktop: 103, mobile: 160, tablet: 140 },
            { date: "2024-06-04", desktop: 439, mobile: 380, tablet: 350 },
            { date: "2024-06-05", desktop: 88, mobile: 140, tablet: 120 },
            { date: "2024-06-06", desktop: 294, mobile: 250, tablet: 220 },
            { date: "2024-06-07", desktop: 323, mobile: 370, tablet: 320 },
            { date: "2024-06-08", desktop: 385, mobile: 320, tablet: 280 },
            { date: "2024-06-09", desktop: 438, mobile: 480, tablet: 420 },
            { date: "2024-06-10", desktop: 155, mobile: 200, tablet: 180 },
            { date: "2024-06-11", desktop: 92, mobile: 150, tablet: 130 },
            { date: "2024-06-12", desktop: 492, mobile: 420, tablet: 380 },
            { date: "2024-06-13", desktop: 81, mobile: 130, tablet: 110 },
            { date: "2024-06-14", desktop: 426, mobile: 380, tablet: 340 },
            { date: "2024-06-15", desktop: 307, mobile: 350, tablet: 300 },
            { date: "2024-06-16", desktop: 371, mobile: 310, tablet: 270 },
            { date: "2024-06-17", desktop: 475, mobile: 520, tablet: 460 },
            { date: "2024-06-18", desktop: 107, mobile: 170, tablet: 150 },
            { date: "2024-06-19", desktop: 341, mobile: 290, tablet: 250 },
            { date: "2024-06-20", desktop: 408, mobile: 450, tablet: 400 },
            { date: "2024-06-21", desktop: 169, mobile: 210, tablet: 180 },
            { date: "2024-06-22", desktop: 317, mobile: 270, tablet: 240 },
            { date: "2024-06-23", desktop: 480, mobile: 530, tablet: 470 },
            { date: "2024-06-24", desktop: 132, mobile: 180, tablet: 160 },
            { date: "2024-06-25", desktop: 141, mobile: 190, tablet: 170 },
            { date: "2024-06-26", desktop: 434, mobile: 380, tablet: 340 },
            { date: "2024-06-27", desktop: 448, mobile: 490, tablet: 430 },
            { date: "2024-06-28", desktop: 149, mobile: 200, tablet: 180 },
            { date: "2024-06-29", desktop: 103, mobile: 160, tablet: 140 },
            { date: "2024-06-30", desktop: 446, mobile: 400, tablet: 360 },
          ]}
          chartConfig={{
            amount: {
              label: "Amount",
            },
            desktop: {
              label: "Desktop",
              color: "hsl(var(--chart-1))",
            },
            mobile: {
              label: "Mobile",
              color: "hsl(var(--chart-2))",
            },
            tablet: {
              label: "Tablet",
              color: "hsl(var(--chart-3))",
            },
          }}
          datakeys={["desktop", "mobile", "tablet"]}
        />
        <RadialChartC
          title='Line Chart - Multiple'
          timeframe='January - June 2024'
          chartData={[
            { title: "chrome", amount: 275, fill: "var(--color-yellow)" },
            { title: "safari", amount: 200, fill: "var(--color-safari)" },
            { title: "firefox", amount: 287, fill: "var(--color-firefox)" },
          ]}
          chartConfig={{
            iamount: {
              label: "Amount",
            },
            chrome: {
              label: "Chrome",
              color: "hsl(var(--chart-1))",
            },
            safari: {
              label: "Safari",
              color: "hsl(var(--chart-2))",
            },
            firefox: {
              label: "Firefox",
              color: "hsl(var(--chart-3))",
            },
          }}
        />
        <PieChartC
          title='Line Chart - Multiple'
          timeframe='January - June 2024'
          chartData={[
            { title: "chrome", amount: 275, fill: "var(--color-chrome)" },
            { title: "safari", amount: 200, fill: "var(--color-safari)" },
            { title: "firefox", amount: 287, fill: "var(--color-firefox)" },
          ]}
          chartConfig={{
            iamount: {
              label: "Amount",
            },
            chrome: {
              label: "Chrome",
              color: "hsl(var(--chart-1))",
            },
            safari: {
              label: "Safari",
              color: "hsl(var(--chart-2))",
            },
            firefox: {
              label: "Firefox",
              color: "hsl(var(--chart-3))",
            },
          }}
        />
      </DefaultLayout>
    </>
  );
}

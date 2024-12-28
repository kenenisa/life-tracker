import DefaultLayout from "@/Layouts/DefaultLayout";
import { PageProps } from "@/types";
import { Head, Link } from "@inertiajs/react";
import { LineChartC } from "@/Components/HomeComponents/LineChartC";
import { BarChartC } from "@/Components/HomeComponents/BarChartC";
import { PieChartC } from "@/Components/HomeComponents/PieChartC";
import { RadialChartC } from "@/Components/HomeComponents/RadialChartC";

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

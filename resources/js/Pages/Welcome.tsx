import DefaultLayout from "@/Layouts/DefaultLayout";
import { PageProps } from "@/types";
import { Head, Link } from "@inertiajs/react";
import { LineChartC } from "@/Components/HomeComponents/LineChartC";
import { BarChartC } from "@/Components/HomeComponents/BarChartC";

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
        <LineChartC
          title='Line Chart - Multiple'
          timeframe='January - June 2024'
          chartData={[
            { month: "January", income: -5000, expense: 3000, saved: 2000 },
            { month: "February", income: 6000, expense: 3500, saved: 2500 },
            { month: "March", income: 7000, expense: 4000, saved: 3000 },
            { month: "April", income: 8000, expense: 4500, saved: 3500 },
            { month: "May", income: 9000, expense: 5000, saved: 4000 },
            { month: "June", income: 10000, expense: 5500, saved: 4500 },
            { month: "July", income: 11000, expense: 6000, saved: 5000 },
            { month: "August", income: 12000, expense: 6500, saved: 5500 },
            { month: "September", income: 13000, expense: 7000, saved: 6000 },
            { month: "October", income: 14000, expense: 7500, saved: 6500 },
            { month: "November", income: 15000, expense: 8000, saved: 7000 },
            { month: "December", income: 16000, expense: 8500, saved: 7500 },
          ]}
          chartConfig={{
            income: { label: "Income", color: "#000" },
            expense: { label: "Expense", color: "red" },
            saved: { label: "Saved", color: "blue" },
          }}
          datakeys={["income", "expense", "saved"]}
        />
      </DefaultLayout>
    </>
  );
}

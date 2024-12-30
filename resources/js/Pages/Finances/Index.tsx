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

interface DataInterface {
  income: number;
  expense: number;
  categoryId: number;
  id: number;
  created_at: string;
  updated_at: string;
  user_id: number;
}
export default function ({ data }: any) {
  console.log(data);
  const totalIncome = data.reduce(
    (acc: number, item: DataInterface) => acc + item.income,
    0
  );
  const totalExpense = data.reduce(
    (acc: number, item: DataInterface) => acc + item.expense,
    0
  );
  function formatDate(dateString: string) {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-indexed
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }
  const chartData = data.map((item: DataInterface) => ({
    date: formatDate(item.created_at),
    income: item.income,
    expense: item.expense,
    net: (item.income - item.expense).toFixed(2),
  }));
  const chartConfig = {
    amount: {
      label: "Amount",
    },
    income: {
      label: "income",
      color: "hsl(var(--chart-1))",
    },
    expense: {
      label: "expense",
      color: "hsl(var(--chart-2))",
    },
    net: {
      label: "net",
      color: "hsl(var(--chart-3))",
    },
  };
  const datakeys = ["income", "expense", "net"];

  return (
    <>
      <DefaultLayout>
        <Head title='Welcome' />

        <div className='grid grid-cols-1 gap-4 md:grid-cols-3 p-2'>
          <CardSmallC
            title='Total Income'
            value={`$ ${totalIncome.toFixed(2)}`}
            startColor='#084923'
            endColor='#35E980'
          />
          <CardSmallC
            title='Total Expense'
            value={`$ ${totalExpense.toFixed(2)}`}
            startColor='#620410'
            endColor='#F72642'
          />
          <CardSmallC
            title='Net profit'
            value={`$ ${(totalIncome - totalExpense).toFixed(2)}`}
            startColor='#001F66'
            endColor='#477EFF'
          />
        </div>

        <div className='grid md:grid-cols-[2fr,1fr] gap-4 p-2'>
          <AreaChartC
            title='money'
            description='January - June 2024'
            chartData={chartData}
            chartConfig={chartConfig}
            datakeys={datakeys}
          />
          <PieChartC
            title='Amount'
            timeframe='January - June 2024'
            chartData={[
              {
                title: "income",
                amount: totalIncome,
                fill: "var(--color-chrome)",
              },
              {
                title: "expense",
                amount: totalExpense,
                fill: "var(--color-safari)",
              },
              { title: "firefox", amount: 287, fill: "var(--color-firefox)" },
            ]}
            chartConfig={{
              amount: {
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
        </div>
        <ResizableC chartData={chartData} chartConfig = {chartConfig} datakeys={datakeys} />
        <HeatMapC
          value={[
            { date: "2024/01/11", count: 2 },
            { date: "2024/01/12", count: 20 },
            { date: "2024/01/13", count: 10 },
            { date: "2024/04/11", count: 2 },
            { date: "2024/05/01", count: 5 },
            { date: "2024/05/02", count: 5 },
            { date: "2022/05/04", count: 11 },
            { date: "2023/05/05", count: 5 },
          ]}
        />
        <div className='grid grid-cols-[2fr,1fr] gap-10'>
          <TableC
            datakeys={[
              "invoice",
              "paymentStatus",
              "totalAmount",
              "paymentMethod",
            ]}
            value={[
              {
                invoice: "INV001",
                paymentStatus: "Paid",
                totalAmount: "$250.00",
                paymentMethod: "Credit Card",
              },
              {
                invoice: "INV002",
                paymentStatus: "Pending",
                totalAmount: "$150.00",
                paymentMethod: "PayPal",
              },
              {
                invoice: "INV003",
                paymentStatus: "Unpaid",
                totalAmount: "$350.00",
                paymentMethod: "Bank Transfer",
              },
              {
                invoice: "INV004",
                paymentStatus: "Paid",
                totalAmount: "$450.00",
                paymentMethod: "Credit Card",
              },
              {
                invoice: "INV005",
                paymentStatus: "Paid",
                totalAmount: "$550.00",
                paymentMethod: "PayPal",
              },
              {
                invoice: "INV006",
                paymentStatus: "Pending",
                totalAmount: "$200.00",
                paymentMethod: "Bank Transfer",
              },
              {
                invoice: "INV007",
                paymentStatus: "Unpaid",
                totalAmount: "$300.00",
                paymentMethod: "Credit Card",
              },
            ]}
          />
          <VerticalBarChartC
            chartData={[
              { title: "chrome", amount: 275, fill: "var(--color-chrome)" },
              { title: "safari", amount: 200, fill: "var(--color-safari)" },
              { title: "firefox", amount: 187, fill: "var(--color-firefox)" },
              { title: "edge", amount: 173, fill: "var(--color-edge)" },
              { title: "other", amount: 90, fill: "var(--color-other)" },
            ]}
            chartConfig={{
              visitors: {
                label: "Visitors",
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
              edge: {
                label: "Edge",
                color: "hsl(var(--chart-4))",
              },
              other: {
                label: "Other",
                color: "hsl(var(--chart-5))",
              },
            }}
          />
        </div>
      </DefaultLayout>
    </>
  );
}

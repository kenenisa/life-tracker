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
import { WeekDaysTabC } from "@/components/HomeComponents/WeekDaysTabC";
import { MuscleMapC } from "@/components/HomeComponents/MuscleMapC";

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
  //   console.log(data);
  console.log("open");

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
        <div className='grid grid-cols-[1fr,3fr]'>
          nigger
          {/* <MuscleMapC /> */}
          <WeekDaysTabC
            workoutData={[
              {
                day: "mon",
                category: "back",
                title: "pull-ups",
                text: "3 sets X 10 reps",
              },
              {
                day: "mon",
                category: "biceps",
                title: "curls",
                text: "3 sets X 10 reps",
              },
              {
                day: "mon",
                category: "triceps",
                title: "pushups",
                text: "3 sets X 10 reps",
              },
              {
                day: "tue",
                category: "back",
                title: "pull-ups",
                text: "3 sets X 10 reps",
              },
              {
                day: "tue",
                category: "biceps",
                title: "curls",
                text: "3 sets X 10 reps",
              },
              {
                day: "tue",
                category: "triceps",
                title: "pushups",
                text: "3 sets X 10 reps",
              },
              {
                day: "wed",
                category: "back",
                title: "pull-ups",
                text: "3 sets X 10 reps",
              },
              {
                day: "wed",
                category: "biceps",
                title: "curls",
                text: "3 sets X 10 reps",
              },
              {
                day: "wed",
                category: "triceps",
                title: "pushups",
                text: "3 sets X 10 reps",
              },
              {
                day: "thu",
                category: "back",
                title: "pull-ups",
                text: "3 sets X 10 reps",
              },
              {
                day: "thu",
                category: "biceps",
                title: "curls",
                text: "3 sets X 10 reps",
              },
              {
                day: "thu",
                category: "triceps",
                title: "pushups",
                text: "3 sets X 10 reps",
              },
              {
                day: "fri",
                category: "back",
                title: "pull-ups",
                text: "3 sets X 10 reps",
              },
              {
                day: "fri",
                category: "biceps",
                title: "curls",
                text: "3 sets X 10 reps",
              },
            ]}
          />
        </div>
        <AreaChartC
          title='Area Chart'
          description='January - June 2024'
          chartData={[
            { date: "2024-12-01", car: 222, mobile: 150, tablet: 180 },
            { date: "2024-12-02", car: 97, mobile: 180, tablet: 120 },
            { date: "2024-12-12", car: 167, mobile: 120, tablet: 150 },
            { date: "2024-12-12", car: 242, mobile: 260, tablet: 200 },
            { date: "2024-12-05", car: 373, mobile: 290, tablet: 250 },
            { date: "2024-12-06", car: 301, mobile: 340, tablet: 300 },
            { date: "2024-12-07", car: 245, mobile: 180, tablet: 170 },
            { date: "2024-12-08", car: 409, mobile: 320, tablet: 280 },
            { date: "2024-12-09", car: 59, mobile: 110, tablet: 90 },
            { date: "2024-12-10", car: 261, mobile: 190, tablet: 220 },
            { date: "2024-12-11", car: 327, mobile: 350, tablet: 300 },
            { date: "2024-12-12", car: 292, mobile: 210, tablet: 180 },
            { date: "2024-12-13", car: 342, mobile: 380, tablet: 320 },
            { date: "2024-12-14", car: 137, mobile: 220, tablet: 150 },
            { date: "2024-12-15", car: 120, mobile: 170, tablet: 110 },
            { date: "2024-12-16", car: 138, mobile: 190, tablet: 130 },
            { date: "2024-12-17", car: 446, mobile: 360, tablet: 380 },
            { date: "2024-12-18", car: 364, mobile: 410, tablet: 350 },
            { date: "2024-12-19", car: 243, mobile: 180, tablet: 200 },
            { date: "2024-12-20", car: 89, mobile: 150, tablet: 110 },
            { date: "2024-12-21", car: 137, mobile: 200, tablet: 140 },
            { date: "2024-12-22", car: 224, mobile: 170, tablet: 180 },
            { date: "2024-12-23", car: 138, mobile: 230, tablet: 160 },
            { date: "2024-12-24", car: 387, mobile: 290, tablet: 300 },
            { date: "2024-12-25", car: 215, mobile: 250, tablet: 220 },
            { date: "2024-12-26", car: 75, mobile: 130, tablet: 100 },
            { date: "2024-12-27", car: 383, mobile: 420, tablet: 360 },
            { date: "2024-12-28", car: 122, mobile: 180, tablet: 150 },
            { date: "2024-12-29", car: 315, mobile: 240, tablet: 260 },
            { date: "2024-12-30", car: 454, mobile: 380, tablet: 400 },
            { date: "2024-05-01", car: 165, mobile: 220, tablet: 180 },
            { date: "2024-05-02", car: 293, mobile: 310, tablet: 250 },
            { date: "2024-05-03", car: 247, mobile: 190, tablet: 200 },
            { date: "2024-05-04", car: 385, mobile: 420, tablet: 360 },
            { date: "2024-05-05", car: 481, mobile: 390, tablet: 400 },
            { date: "2024-05-06", car: 498, mobile: 520, tablet: 450 },
            { date: "2024-05-07", car: 388, mobile: 300, tablet: 280 },
            { date: "2024-05-08", car: 149, mobile: 210, tablet: 160 },
            { date: "2024-05-09", car: 227, mobile: 180, tablet: 190 },
            { date: "2024-05-10", car: 293, mobile: 330, tablet: 270 },
            { date: "2024-05-11", car: 335, mobile: 270, tablet: 250 },
            { date: "2024-05-12", car: 197, mobile: 240, tablet: 200 },
            { date: "2024-05-13", car: 197, mobile: 160, tablet: 140 },
            { date: "2024-05-14", car: 448, mobile: 490, tablet: 420 },
            { date: "2024-05-15", car: 473, mobile: 380, tablet: 350 },
            { date: "2024-05-16", car: 338, mobile: 400, tablet: 320 },
            { date: "2024-05-17", car: 499, mobile: 420, tablet: 380 },
            { date: "2024-05-18", car: 315, mobile: 350, tablet: 300 },
            { date: "2024-05-19", car: 235, mobile: 180, tablet: 160 },
            { date: "2024-05-20", car: 177, mobile: 230, tablet: 190 },
            { date: "2024-05-21", car: 82, mobile: 140, tablet: 110 },
            { date: "2024-05-22", car: 81, mobile: 120, tablet: 100 },
            { date: "2024-05-23", car: 252, mobile: 290, tablet: 240 },
            { date: "2024-05-24", car: 294, mobile: 220, tablet: 250 },
            { date: "2024-05-25", car: 201, mobile: 250, tablet: 220 },
            { date: "2024-05-26", car: 213, mobile: 170, tablet: 180 },
            { date: "2024-05-27", car: 420, mobile: 460, tablet: 400 },
            { date: "2024-05-28", car: 233, mobile: 190, tablet: 200 },
            { date: "2024-05-29", car: 78, mobile: 130, tablet: 110 },
            { date: "2024-05-30", car: 340, mobile: 280, tablet: 300 },
            { date: "2024-05-31", car: 178, mobile: 230, tablet: 200 },
            { date: "2024-06-01", car: 178, mobile: 200, tablet: 180 },
            { date: "2024-06-02", car: 470, mobile: 410, tablet: 360 },
            { date: "2024-06-03", car: 103, mobile: 160, tablet: 140 },
            { date: "2024-06-04", car: 439, mobile: 380, tablet: 350 },
            { date: "2024-06-05", car: 88, mobile: 140, tablet: 120 },
            { date: "2024-06-06", car: 294, mobile: 250, tablet: 220 },
            { date: "2024-06-07", car: 323, mobile: 370, tablet: 320 },
            { date: "2024-06-08", car: 385, mobile: 320, tablet: 280 },
            { date: "2024-06-09", car: 438, mobile: 480, tablet: 420 },
            { date: "2024-06-10", car: 155, mobile: 200, tablet: 180 },
            { date: "2024-06-11", car: 92, mobile: 150, tablet: 130 },
            { date: "2024-06-12", car: 492, mobile: 420, tablet: 380 },
            { date: "2024-06-13", car: 81, mobile: 130, tablet: 110 },
            { date: "2024-06-14", car: 426, mobile: 380, tablet: 340 },
            { date: "2024-06-15", car: 307, mobile: 350, tablet: 300 },
            { date: "2024-06-16", car: 371, mobile: 310, tablet: 270 },
            { date: "2024-06-17", car: 475, mobile: 520, tablet: 460 },
            { date: "2024-06-18", car: 107, mobile: 170, tablet: 150 },
            { date: "2024-06-19", car: 341, mobile: 290, tablet: 250 },
            { date: "2024-06-20", car: 408, mobile: 450, tablet: 400 },
            { date: "2024-06-21", car: 169, mobile: 210, tablet: 180 },
            { date: "2024-06-22", car: 317, mobile: 270, tablet: 240 },
            { date: "2024-06-23", car: 480, mobile: 530, tablet: 470 },
            { date: "2024-06-24", car: 132, mobile: 180, tablet: 160 },
            { date: "2024-06-25", car: 141, mobile: 190, tablet: 170 },
            { date: "2024-06-26", car: 434, mobile: 380, tablet: 340 },
            { date: "2024-06-27", car: 448, mobile: 490, tablet: 430 },
            { date: "2024-06-28", car: 149, mobile: 200, tablet: 180 },
            { date: "2024-06-29", car: 103, mobile: 160, tablet: 140 },
            { date: "2024-06-30", car: 446, mobile: 400, tablet: 360 },
          ]}
          chartConfig={{
            amount: {
              label: "Amount",
            },
            car: {
              label: "Car",
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
          datakeys={["car", "mobile", "tablet"]}
        />

        <HeatMapC
          value={[
            { date: "2024/12/11", count: 4 },
            { date: "2024/12/12", count: 20 },
            { date: "2024/01/13", count: 10 },
            { date: "2024/04/11", count: 2 },
            { date: "2024/05/01", count: 5 },
            { date: "2024/05/02", count: 5 },
            { date: "2022/05/04", count: 11 },
            { date: "2023/05/05", count: 5 },
          ]}
          baseColor='#D00000'
        />
      </DefaultLayout>
    </>
  );
}

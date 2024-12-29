import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { WorkoutCardC } from "@/components/HomeComponents/WorkoutCardC";
interface WorkoutDataInterface {
  day: string;
  category: string;
  title: string;
  text: string;
}
interface WeekDaysTabCProps {
  workoutData: WorkoutDataInterface[];
}

export const WeekDaysTabC = ({ workoutData }: WeekDaysTabCProps) => {
  return (
    <Tabs defaultValue='mon' className='mx-12 my-4'>
      <TabsList className='grid w-full grid-cols-7'>
        <TabsTrigger value='mon'>Mon</TabsTrigger>
        <TabsTrigger value='tue'>Tue</TabsTrigger>
        <TabsTrigger value='wed'>Wed</TabsTrigger>
        <TabsTrigger value='thu'>Thu</TabsTrigger>
        <TabsTrigger value='fri'>Fri</TabsTrigger>
        <TabsTrigger value='sat'>Sat</TabsTrigger>
        <TabsTrigger value='sun'>Sun</TabsTrigger>
      </TabsList>
      {daysOfWeek.map((day) => (
        <TabsContent key={day} value={day}>
          <Card>
            <CardContent className='p-4 grid grid-cols-1  m-4 gap-12'>
              {/* Filter workouts for the current day */}
              {workoutData
                .filter((workout) => workout.day === day)
                .map((workout, index) => (
                  <WorkoutCardC
                    key={index}
                    category={workout.category}
                    title={workout.title}
                    text={workout.text}
                  />
                ))}
            </CardContent>
            <CardFooter className='flex justify-end'>
              <Button>Add workout</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      ))}
    </Tabs>
  );
};

const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

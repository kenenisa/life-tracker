import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface WorkoutCardCProps {
  category: string;
  title: string;
  text: string;
}

export const WorkoutCardC = ({ category, title, text }: WorkoutCardCProps) => {
  return (
    <Card className='rounded-lg  h-[150px] sm:h-[80px] '>
      <CardContent>
        <div className='flex flex-col md:flex-row justify-between h-[100px]  sm:h-[80px] rounded-lg'>
          <div className='relative flex flex-col   gap-2 items-center justify-center'>
            <Badge className='w-16 h-4 md:absolute top-1 left-0'>
              {category}
            </Badge>
            <h1 className='text-2xl'>{title}</h1>
          </div>
          <div className='flex flex-col justify-center items-center'>
            <p className='text-sm '>{text}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

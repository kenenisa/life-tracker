import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface CardSmallCProps {
  title: string;
  value: string;
  startColor?: string;
  endColor?: string;
}

export const CardSmallC = ({
  title,
  value,
  startColor = "#2563EB",
  endColor = "#1D4ED8",
}: CardSmallCProps) => {
  return (
    <Card
      className='w-[350px] p-4 rounded-lg text-white h-[120px]'
      style={{
        backgroundImage: `linear-gradient(to right, ${startColor}, ${endColor})`,
      }}
    >
      <CardContent>
        <div className='flex flex-col py-2 justify-center gap-2'>
          <p className='text-gray-200'>{title}</p>
          <h1 className='text-3xl'>{value}</h1>
        </div>
      </CardContent>
    </Card>
  );
};

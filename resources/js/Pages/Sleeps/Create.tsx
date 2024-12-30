import React, { useState } from "react";
import DefaultLayout from "@/Layouts/DefaultLayout";
import { Head } from "@inertiajs/react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const muscleGroups = [
  "trapezius",
  "upper-back",
  "lower-back",
  "chest",
  "biceps",
  "triceps",
  "forearm",
  "back-deltoids",
  "front-deltoids",
  "abs",
  "obliques",
  "adductor",
  "hamstring",
  "quadriceps",
  "abductors",
  "calves",
  "gluteal",
  "head",
  "neck",
];

export default function Welcome() {
  const [selectedMuscles, setSelectedMuscles] = useState<string[]>([]);

  const addMuscleGroup = (group: string) => {
    if (!selectedMuscles.includes(group)) {
      setSelectedMuscles((prev) => [...prev, group]);
    }
  };

  const removeMuscleGroup = (group: string) => {
    setSelectedMuscles((prev) => prev.filter((item) => item !== group));
  };

  return (
    <DefaultLayout>
      <Head title='Welcome' />
      <div className='flex flex-col items-center justify-center w-full h-full'>
        <Card className='w-[350px]'>
          <CardHeader>
            <CardTitle>Create sleep</CardTitle>
          </CardHeader>
          <CardContent>
            <form>
              <div className='grid w-full items-center gap-4'>
                <div className='flex flex-col space-y-1.5'>
                  <Label htmlFor='start'>start</Label>
                  <Input
                    id='start'
                    placeholder='start of your sleep'
                    required
                    type='time'
                  />
                </div>
                <div className='flex flex-col space-y-1.5'>
                  <Label htmlFor='end'>end</Label>
                  <Input id='end' placeholder='end' required type='time' />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className='flex justify-between'>
            <Button variant='outline'>Cancel</Button>
            <Button>Add sleep</Button>
          </CardFooter>
        </Card>
      </div>
    </DefaultLayout>
  );
}

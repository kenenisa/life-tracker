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
            <CardTitle>Create Workout</CardTitle>
          </CardHeader>
          <CardContent>
            <form>
              <div className='grid w-full items-center gap-4'>
                <div className='flex flex-col space-y-1.5'>
                  <Label htmlFor='name'>Name</Label>
                  <Input
                    id='name'
                    placeholder='Name of your Workout'
                    required
                  />
                </div>
                <div className='grid w-full gap-1.5'>
                  <Label htmlFor='description'>Description</Label>
                  <Textarea
                    placeholder='Type your description here.'
                    id='description'
                  />
                </div>
                <div className='flex flex-col space-y-1.5'>
                  <Label htmlFor='weight'>Weight</Label>
                  <Input id='weight' placeholder='Weight' required />
                </div>
                <div className='flex flex-col space-y-1.5'>
                  <Label htmlFor='duration'>Duration</Label>
                  <Input id='duration' placeholder='Duration' required />
                </div>
                <div className='flex flex-col space-y-1.5'>
                  <Label htmlFor='calories'>Calories</Label>
                  <Input id='calories' placeholder='Calories' required />
                </div>
                <div className='flex flex-col space-y-1.5'>
                  <Label htmlFor='muscles'>Muscles Worked</Label>
                  <Select onValueChange={addMuscleGroup}>
                    <SelectTrigger id='muscles'>
                      <SelectValue placeholder='Select' />
                    </SelectTrigger>
                    <SelectContent position='popper'>
                      {muscleGroups.map((group) => (
                        <SelectItem key={group} value={group}>
                          {group}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <div className='flex flex-wrap gap-2 mt-2'>
                    {selectedMuscles.map((muscle) => (
                      <span
                        key={muscle}
                        className='px-3 py-1 bg-blue-100 text-blue-800 rounded-full cursor-pointer'
                        onClick={() => removeMuscleGroup(muscle)}
                      >
                        {muscle} ✕
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className='flex justify-between'>
            <Button variant='outline'>Cancel</Button>
            <Button>Add workout</Button>
          </CardFooter>
        </Card>
      </div>
    </DefaultLayout>
  );
}

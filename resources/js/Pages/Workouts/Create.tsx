import React, { useState } from "react";
import DefaultLayout from "@/Layouts/DefaultLayout";
import { Head, router } from "@inertiajs/react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

import {
  Card,
  CardContent,
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
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    weight: "",
    duration: "",
    calories: "",
    muscles: "",
  });
  const [selectedMuscles, setSelectedMuscles] = useState<string[]>([]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const addMuscleGroup = (group: string) => {
    if (!selectedMuscles.includes(group)) {
      const updatedMuscles = [...selectedMuscles, group];
      setSelectedMuscles(updatedMuscles);
      setFormData((prev) => ({
        ...prev,
        muscles: updatedMuscles.join(", "),
      }));
    }
  };

  const removeMuscleGroup = (group: string) => {
    const updatedMuscles = selectedMuscles.filter((item) => item !== group);
    setSelectedMuscles(updatedMuscles);
    setFormData((prev) => ({
      ...prev,
      muscles: updatedMuscles.join(", "),
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.post("/workouts", formData);
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
            <form onSubmit={handleSubmit}>
              <div className='grid w-full items-center gap-4'>
                <div className='flex flex-col space-y-1.5'>
                  <Label htmlFor='name'>Name</Label>
                  <Input
                    id='name'
                    placeholder='Name of your Workout'
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className='grid w-full gap-1.5'>
                  <Label htmlFor='description'>Description</Label>
                  <Textarea
                    id='description'
                    placeholder='Type your description here.'
                    value={formData.description}
                    onChange={handleInputChange}
                  />
                </div>
                <div className='flex flex-col space-y-1.5'>
                  <Label htmlFor='weight'>Weight</Label>
                  <Input
                    id='weight'
                    placeholder='Weight'
                    value={formData.weight}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className='flex flex-col space-y-1.5'>
                  <Label htmlFor='duration'>Duration</Label>
                  <Input
                    id='duration'
                    placeholder='Duration'
                    value={formData.duration}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className='flex flex-col space-y-1.5'>
                  <Label htmlFor='calories'>Calories</Label>
                  <Input
                    id='calories'
                    placeholder='Calories'
                    value={formData.calories}
                    onChange={handleInputChange}
                    required
                  />
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
              <CardFooter className='flex justify-between mt-4'>
                <Button type='button' variant='outline'>
                  Cancel
                </Button>
                <Button type='submit'>Add Workout</Button>
              </CardFooter>
            </form>
          </CardContent>
        </Card>
      </div>
    </DefaultLayout>
  );
}
